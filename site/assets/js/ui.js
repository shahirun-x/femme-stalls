/*
 * Femme Stalls — shared page behaviour (vanilla JS, no dependencies).
 * Each feature only activates when its markup is present on the page.
 */
(function () {
  "use strict";

  var doc = document;
  var CFG = window.FS_CONFIG || {};
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };

  /* ---------- Contact links: every number/email comes from config.js ---------- */
  function hydrateContacts() {
    var C = CFG.CONTACT, M = CFG.WHATSAPP_MESSAGES || {};
    if (!C) return;
    $$("[data-wa]").forEach(function (a) {
      var key = a.getAttribute("data-wa");
      var msg = M[key] || key;
      var extra = a.getAttribute("data-wa-suffix");
      a.href = C.whatsappLink(msg ? msg + (extra ? " " + extra : "") : "");
      a.target = "_blank";
      a.rel = "noopener";
    });
    $$("[data-mail]").forEach(function (a) { a.href = C.mailtoLink(a.getAttribute("data-mail")); });
    $$("[data-tel]").forEach(function (a) { a.href = C.telLink; });
    $$("[data-contact]").forEach(function (el) {
      var v = C[el.getAttribute("data-contact")];
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-social]").forEach(function (a) {
      var url = (CFG.SOCIAL_LINKS || {})[a.getAttribute("data-social")];
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = $$(".reveal");
    if (!els.length) return;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Accordions: native <details> with animated height ---------- */
  function initAccordions() {
    $$(".accordion").forEach(function (group) {
      var items = $$("details", group);
      items.forEach(function (d) {
        var summary = d.querySelector("summary");
        var panel = d.querySelector(".accordion__panel");
        summary.addEventListener("click", function (e) {
          e.preventDefault();
          if (d.open) close(d); else open(d);
        });
        function open(el) {
          items.forEach(function (o) { if (o !== el && o.open) close(o); }); // single-open, collapsible
          el.open = true;
          if (reduced || !panel.animate) return;
          var h = panel.scrollHeight;
          panel.animate([{ height: "0px" }, { height: h + "px" }], { duration: 250, easing: "ease-out" });
        }
        function close(el) {
          var p = el.querySelector(".accordion__panel");
          if (reduced || !p.animate) { el.open = false; return; }
          var anim = p.animate([{ height: p.scrollHeight + "px" }, { height: "0px" }], { duration: 220, easing: "ease-out" });
          anim.onfinish = function () { el.open = false; };
        }
      });
    });
  }

  /* ---------- Count-up stats ---------- */
  function initCountUp() {
    var els = $$("[data-count]");
    if (!els.length || reduced || !("IntersectionObserver" in window)) return;
    els.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var live = el.querySelector("[data-count-live]");
      if (!live) return;
      live.textContent = "0";
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        var start = performance.now(), dur = 1600;
        (function tick(now) {
          var t = Math.min(1, (now - start) / dur);
          live.textContent = String(Math.round((1 - Math.pow(1 - t, 3)) * target));
          if (t < 1) requestAnimationFrame(tick);
        })(start);
      }, { threshold: 0.4 });
      io.observe(el);
    });
  }

  /* ---------- Testimonial slider ---------- */
  function initSliders() {
    $$("[data-slider]").forEach(function (root) {
      var slides = $$("[data-slide]", root);
      var dots = $$("[data-dot]", root);
      function show(i) {
        slides.forEach(function (s, j) {
          s.hidden = j !== i;
          if (j === i) { s.classList.remove("is-entering"); void s.offsetWidth; s.classList.add("is-entering"); }
        });
        dots.forEach(function (d, j) { d.setAttribute("aria-pressed", String(j === i)); });
      }
      dots.forEach(function (d, i) { d.addEventListener("click", function () { show(i); }); });
    });
  }

  /* ---------- Horizontal scroll gallery ---------- */
  function initScrollers() {
    $$("[data-scroller]").forEach(function (root) {
      var track = root.querySelector("[data-track]");
      var prev = root.querySelector("[data-prev]");
      var next = root.querySelector("[data-next]");
      if (!track) return;
      function update() {
        var atStart = track.scrollLeft <= 4;
        var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        if (prev) prev.disabled = atStart;
        if (next) next.disabled = atEnd;
        track.classList.toggle("is-end", atEnd);
      }
      function by(dir) {
        var card = track.querySelector("li");
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        track.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
      }
      if (prev) prev.addEventListener("click", function () { by(-1); });
      if (next) next.addEventListener("click", function () { by(1); });
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  /* ---------- Client-side filtering (gallery chips, directory search) ---------- */
  function initFilters() {
    $$("[data-filter-scope]").forEach(function (scope) {
      var chips = $$("[data-filter]", scope);
      var search = scope.querySelector("[data-filter-search]");
      var items = $$("[data-category]", scope);
      var empty = scope.querySelector("[data-filter-empty]");
      var status = scope.querySelector("[data-filter-status]");
      var active = "All";
      function apply() {
        var q = search ? search.value.trim().toLowerCase() : "";
        var shown = 0;
        items.forEach(function (it) {
          var okCat = active === "All" || it.getAttribute("data-category") === active;
          var okText = !q || it.textContent.toLowerCase().indexOf(q) >= 0;
          it.hidden = !(okCat && okText);
          if (!it.hidden) shown++;
        });
        if (empty) empty.hidden = shown > 0;
        if (status) status.textContent = shown + (shown === 1 ? " result" : " results");
      }
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          var value = chip.getAttribute("data-filter");
          active = active === value && value !== "All" ? "All" : value;
          chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === active)); });
          apply();
        });
      });
      if (search) search.addEventListener("input", apply);
    });
  }

  /* ---------- Geohomz family (homepage section) — rendered from config ---------- */
  function initFamily() {
    var mount = doc.querySelector("[data-geohomz-family]");
    if (!mount || !CFG.GEOHOMZ_FAMILY) return;
    mount.innerHTML = CFG.GEOHOMZ_FAMILY.map(function (b, i) {
      var img =
        '<picture><source srcset="/assets/brand/' + b.logo + '.webp" type="image/webp">' +
        '<img src="/assets/brand/' + b.logo + '.png" alt="' + b.name + " logo" + '" width="' + b.width + '" height="' + b.height +
        '"' + (b.tile ? ' class="is-tile"' : "") + ' loading="lazy" decoding="async"></picture>';
      var inner =
        '<span class="family-card__plate">' + img + "</span>" +
        '<span class="family-card__name">' + b.name + "</span>" +
        '<span class="family-card__caption">' + b.caption + "</span>";
      var attrs = ' class="family-card reveal" style="--delay:' + i * 90 + 'ms"';
      return "<li>" + (b.url
        ? "<a" + attrs + ' href="' + b.url + '" target="_blank" rel="noopener">' + inner +
          '<span class="sr-only"> (opens in a new tab)</span></a>'
        : "<div" + attrs + ">" + inner + "</div>") + "</li>";
    }).join("");
  }

  /* Placeholder links (href="#") stay as in the original design but must not
     jump the page to the top while their real destinations are pending. */
  function initPlaceholderLinks() {
    doc.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href="#"]');
      if (a) e.preventDefault();
    });
  }

  function init() {
    initPlaceholderLinks();
    hydrateContacts();
    initFamily();
    initReveal();
    initAccordions();
    initCountUp();
    initSliders();
    initScrollers();
    initFilters();
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init);
  else init();
})();
