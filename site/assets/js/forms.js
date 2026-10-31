/*
 * Femme Stalls — membership and partner forms → Google Sheets.
 *
 * Markup contract: <form data-form="member|partner" novalidate> inside a
 * [data-form-wrap] that also holds the [data-form-success] thank-you card.
 * Submits to FS_CONFIG.SHEETS_ENDPOINT (Apps Script web app, see
 * backend/google-apps-script). If the endpoint is empty or the request fails,
 * the visitor gets a WhatsApp link prefilled with their answers — never a
 * fake success.
 */
(function () {
  "use strict";

  var CFG = window.FS_CONFIG || {};
  var TIMEOUT_MS = 15000;
  var INTROS = {
    member: "Hi, I'd like to register as a Femme Stalls member.",
    partner: "Hi, I'd like to discuss a partnership with Femme Stalls.",
  };
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function labelFor(form, el) {
    var l = form.querySelector('label[for="' + el.id + '"]');
    return l ? l.textContent.replace("*", "").trim() : el.name;
  }

  function setError(form, el, msg) {
    var id = el.id + "-error";
    var existing = document.getElementById(id);
    if (!msg) {
      el.removeAttribute("aria-invalid");
      if (existing) existing.remove();
      el.removeAttribute("aria-describedby");
      return;
    }
    el.setAttribute("aria-invalid", "true");
    if (!existing) {
      existing = document.createElement("p");
      existing.className = "field-error";
      existing.id = id;
      el.insertAdjacentElement("afterend", existing);
    }
    existing.textContent = msg;
    el.setAttribute("aria-describedby", id);
  }

  function validate(form) {
    var firstBad = null;
    form.querySelectorAll("[required]").forEach(function (el) {
      var v = el.value.trim();
      var msg = !v
        ? labelFor(form, el) + " is required."
        : el.type === "email" && !EMAIL_RE.test(v)
        ? "Please enter a valid email address."
        : "";
      setError(form, el, msg);
      if (msg && !firstBad) firstBad = el;
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  /* Field values keyed by name; multi-selects (checkbox groups) become arrays. */
  function collect(form) {
    var data = {};
    var fd = new FormData(form);
    fd.forEach(function (value, key) {
      var multi = form.querySelectorAll('[name="' + key + '"][type="checkbox"]').length > 0;
      if (multi) (data[key] = data[key] || []).push(value);
      else data[key] = String(value).trim();
    });
    form.querySelectorAll('[type="checkbox"][name]').forEach(function (cb) {
      if (!data[cb.name]) data[cb.name] = [];
    });
    // Disabled inputs (e.g. WhatsApp when "same as mobile") aren't in FormData.
    form.querySelectorAll("input:disabled[name]").forEach(function (el) { data[el.name] = el.value.trim(); });
    return data;
  }

  function summary(form, type, data) {
    var lines = [INTROS[type] || "Hi, Femme Stalls!"];
    form.querySelectorAll("[name]").forEach(function (el) {
      if (el.name === "website" || el.type === "checkbox") return;
      var v = data[el.name];
      if (v) lines.push(labelFor(form, el) + ": " + v);
    });
    var multi = {};
    form.querySelectorAll('[type="checkbox"][name]').forEach(function (cb) { multi[cb.name] = true; });
    Object.keys(multi).forEach(function (k) {
      if (data[k] && data[k].length) {
        var legend = form.querySelector('[name="' + k + '"]').closest("fieldset");
        var title = legend && legend.querySelector("legend") ? legend.querySelector("legend").textContent.trim() : k;
        lines.push(title + ": " + data[k].join(", "));
      }
    });
    return lines.join("\n");
  }

  function showStatus(form, message, waText) {
    var box = form.querySelector("[data-form-status]");
    box.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = message;
    box.appendChild(p);
    if (CFG.CONTACT) {
      var a = document.createElement("a");
      a.className = "btn btn--whatsapp";
      a.href = CFG.CONTACT.whatsappLink(waText);
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = '<svg class="icon" aria-hidden="true"><use href="/assets/icons.svg#message-circle"></use></svg>Send on WhatsApp instead';
      box.appendChild(a);
    }
    box.hidden = false;
  }

  function setBusy(btn, busy) {
    if (!btn.dataset.label) btn.dataset.label = btn.textContent;
    btn.disabled = busy;
    btn.setAttribute("aria-busy", String(busy));
    btn.textContent = busy ? "Sending…" : btn.dataset.label;
  }

  function send(payload) {
    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, TIMEOUT_MS);
    return fetch(CFG.SHEETS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // simple request: no CORS preflight
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined,
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (json) {
        if (!json || json.ok !== true) throw new Error((json && json.error) || "Rejected");
        return json;
      })
      .finally(function () { clearTimeout(timer); });
  }

  function init(form) {
    var type = form.getAttribute("data-form");
    var wrap = form.closest("[data-form-wrap]");
    var success = wrap && wrap.querySelector("[data-form-success]");
    var btn = form.querySelector("[data-submit]");
    var status = form.querySelector("[data-form-status]");

    // "Same as mobile" sync
    form.querySelectorAll("[data-same-as]").forEach(function (cb) {
      var src = form.querySelector("#" + cb.getAttribute("data-same-as"));
      var dst = form.querySelector("#" + cb.getAttribute("data-target"));
      function sync() { if (cb.checked) dst.value = src.value; }
      cb.addEventListener("change", function () { dst.disabled = cb.checked; sync(); });
      src.addEventListener("input", sync);
    });

    // Clear an error as soon as the field is corrected
    form.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.value.trim()) setError(form, e.target, "");
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.hidden = true;
      if (!validate(form)) return;

      var data = collect(form);
      var waText = summary(form, type, data);

      if (!CFG.SHEETS_ENDPOINT) {
        console.warn("[forms] SHEETS_ENDPOINT is empty in config.js — showing the WhatsApp fallback instead of submitting.");
        showStatus(form, "Online sign-up is being set up. Please send your details to us on WhatsApp — we've filled them in for you.", waText);
        return;
      }

      var payload = Object.assign({ formType: type, page: location.pathname }, data);
      setBusy(btn, true);
      send(payload)
        .then(function () {
          form.hidden = true;
          if (success) { success.hidden = false; success.focus(); }
        })
        .catch(function (err) {
          console.error("[forms] submission failed:", err);
          showStatus(form, "Sorry — we couldn't send your details just now. Please try again in a moment, or send them to us on WhatsApp.", waText);
        })
        .finally(function () { setBusy(btn, false); });
    });
  }

  function start() { document.querySelectorAll("form[data-form]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
