/*
 * Femme Stalls — shared page behaviour (vanilla JS, no dependencies):
 * contact links, scroll reveal, accordions. Page-specific code lives in
 * home.js (homepage) and filters.js (media, members).
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
    initReveal();
    initAccordions();
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init);
  else init();
})();
