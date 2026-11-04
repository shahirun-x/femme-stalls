/*
 * Femme Stalls — homepage-only behaviour: Geohomz family, count-up stats,
 * testimonial slider and the discover scroller. Loaded before ui.js so the
 * family cards exist when ui.js sets up scroll reveal.
 */
(function () {
  "use strict";

  var doc = document;
  var CFG = window.FS_CONFIG || {};
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };

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

  initFamily();
  initCountUp();
  initSliders();
  initScrollers();
})();
