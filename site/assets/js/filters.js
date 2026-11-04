/* Femme Stalls — client-side filtering for the media gallery and member directory. */
(function () {
  "use strict";

  var doc = document;
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };

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

  initFilters();
})();
