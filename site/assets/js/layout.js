/*
 * Femme Stalls — shared header and footer. Single source of truth.
 *
 * Each page has <div id="site-header"></div> as the first element in <body>,
 * followed immediately by config.js and this script (both synchronous), so the
 * header is in the DOM before anything below it paints. The footer is injected
 * into <div id="site-footer"></div> on DOMContentLoaded.
 */
(function () {
  "use strict";

  var doc = document;
  doc.documentElement.classList.add("js");

  var CFG = window.FS_CONFIG;
  var ICONS = "/assets/icons.svg";
  var path = location.pathname.replace(/index\.html$/, "");
  if (path.charAt(path.length - 1) !== "/") path += "/";

  function ico(name, cls) {
    return '<svg class="icon' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="' + ICONS + "#" + name + '"></use></svg>';
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function isActive(href) {
    return href === "/" ? path === "/" : path.indexOf(href) === 0;
  }

  /* Brand — swap this one function for a horizontal lockup later. */
  function brand(cls) {
    return (
      '<a class="brand' + (cls ? " " + cls : "") + '" href="/" aria-label="Femme Stalls — home">' +
      '<picture><source srcset="/assets/brand/femme-mark.webp" type="image/webp">' +
      '<img class="brand__mark" src="/assets/brand/femme-mark.png" alt="" width="192" height="102"></picture>' +
      '<span class="brand__word" aria-hidden="true">Femme Stalls</span></a>'
    );
  }

  /* ---------------- Navigation data ---------------- */
  var NAV = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/", children: [
      ["Vision & Mission", "/about/#vision-mission"], ["Our Story", "/about/#history"], ["Executive Committee", "/about/#committee"]] },
    { label: "Members", href: "/members/", children: [
      ["Why Join?", "/members/#why-join"], ["Benefits", "/members/#benefits"], ["Register", "/members/#register"], ["Member Directory", "/members/#directory"]] },
    { label: "Femme Stalls", href: "/femme-stalls/", children: [
      ["About Stalls", "/femme-stalls/#about"], ["Register a Stall", "/femme-stalls/#register"], ["Bye-Laws", "/femme-stalls/#bye-laws"], ["Event History", "/femme-stalls/#history"]] },
    { label: "Programmes", href: "/programmes/", children: [
      ["Training", "/programmes/#training"], ["Get Organised", "/programmes/#get-organised"], ["Group Activities", "/programmes/#activities"]] },
    { label: "Events", href: "/events/" },
    { label: "Opportunities", href: "/opportunities/", children: [
      ["FEMMEI Investors", "/opportunities/#investors"], ["Collaborators", "/opportunities/#collaborators"], ["Business", "/opportunities/#business"], ["Finance Info", "/opportunities/#finance"]] },
    { label: "Partners", href: "/partners/" },
    { label: "Media", href: "/media/" },
    { label: "Transparency", href: "/transparency/" },
    { label: "Contact", href: "/contact/" },
  ];

  /* Desktop: the logo is the home link, and the two lowest-traffic links fold
     into "More" so every item fits between 1024 and 1280px without overflow. */
  var MORE = ["Media", "Transparency"];
  var desktopNav = NAV.filter(function (n) { return n.label !== "Home" && MORE.indexOf(n.label) < 0; });
  desktopNav.splice(desktopNav.length - 1, 0, {
    label: "More", href: "/media/", alignRight: true,
    children: NAV.filter(function (n) { return MORE.indexOf(n.label) >= 0; }).map(function (n) { return [n.label, n.href]; }),
  });

  function desktopItem(item, i) {
    var active = item.children
      ? item.children.some(function (c) { return isActive(c[1].split("#")[0]); }) || isActive(item.href)
      : isActive(item.href);
    if (item.label === "More") active = item.children.some(function (c) { return isActive(c[1]); });
    var current = !item.children && active ? ' aria-current="page"' : "";
    var linkCls = "nav__link" + (active ? " is-active" : "");
    if (!item.children) {
      return '<div class="nav__item"><a class="' + linkCls + '" href="' + item.href + '"' + current + ">" + esc(item.label) + "</a></div>";
    }
    var id = "menu-" + i;
    var menu = item.children.map(function (c) { return '<li><a href="' + c[1] + '">' + esc(c[0]) + "</a></li>"; }).join("");
    var head = item.label === "More"
      ? '<button type="button" class="' + linkCls + ' nav__more" aria-expanded="false" aria-controls="' + id + '">More</button>'
      : '<a class="' + linkCls + '" href="' + item.href + '"' + (path === item.href ? ' aria-current="page"' : "") + ">" + esc(item.label) + "</a>";
    return (
      '<div class="nav__item nav__item--menu">' + head +
      '<button type="button" class="nav__toggle" aria-expanded="false" aria-controls="' + id + '" aria-label="' + esc(item.label) + ' menu">' + ico("chevron-down") + "</button>" +
      '<ul class="nav__menu' + (item.alignRight ? " nav__menu--right" : "") + '" id="' + id + '">' + menu + "</ul></div>"
    );
  }

  function drawerItem(item) {
    var active = isActive(item.href);
    if (!item.children) {
      return '<a class="drawer__link' + (active ? " is-active" : "") + '" href="' + item.href + '"' + (active ? ' aria-current="page"' : "") + ">" + esc(item.label) + "</a>";
    }
    var subs = item.children.map(function (c) { return '<a href="' + c[1] + '">' + esc(c[0]) + "</a>"; }).join("");
    return (
      "<details><summary" + (active ? ' class="is-active"' : "") + ">" + esc(item.label) + ico("chevron-down") + "</summary>" +
      '<div class="drawer__sub"><a class="drawer__all" href="' + item.href + '">View all ' + esc(item.label) + " &rarr;</a>" + subs + "</div></details>"
    );
  }

  /* ---------------- Header ---------------- */
  function renderHeader() {
    var mount = doc.getElementById("site-header");
    if (!mount) return;
    mount.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header" id="siteHeader"><div class="site-header__bar">' +
      brand() +
      '<nav class="nav" aria-label="Main">' + desktopNav.map(desktopItem).join("") + "</nav>" +
      '<a class="header-cta" href="/contact/#join">' + ico("sparkles") + "Join Us</a>" +
      '<div class="header-mobile"><a class="btn btn--pink btn--sm" href="/contact/#join">Join Us</a>' +
      '<button type="button" class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">' + ico("menu") + "</button></div>" +
      "</div></header>" +
      '<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden="true">' +
      '<div class="drawer__overlay" data-close></div>' +
      '<div class="drawer__panel"><div class="drawer__top">' +
      '<div class="drawer__head">' + brand("brand--drawer") +
      '<button type="button" class="drawer__close" data-close aria-label="Close menu">' + ico("x", "icon--md") + "</button></div>" +
      '<nav class="drawer__nav" aria-label="Mobile">' + NAV.map(drawerItem).join("") + "</nav></div>" +
      '<div class="drawer__foot"><p class="font-script">Organise the Unorganised</p>' +
      '<a class="btn btn--pink btn--block" href="/members/#register">' + ico("heart-handshake") + "Join Femme Stalls</a>" +
      "<small>An initiative of <strong>Geohomz</strong></small></div>" +
      "</div></div>";
  }

  /* ---------------- Header behaviour ---------------- */
  function initHeader() {
    var header = doc.getElementById("siteHeader");
    if (!header) return;

    // Shrink on scroll
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle("is-scrolled", window.scrollY > 20);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    // First check waits for load so it does not force an early layout mid-parse.
    window.addEventListener("load", onScroll);

    // Desktop dropdowns: hover (CSS) + full keyboard support
    var items = header.querySelectorAll(".nav__item--menu");
    function closeAll(except) {
      items.forEach(function (it) {
        if (it === except) return;
        it.classList.remove("is-open");
        it.querySelectorAll("[aria-expanded]").forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
      });
    }
    function setOpen(item, open) {
      closeAll(open ? item : null);
      item.classList.toggle("is-open", open);
      item.querySelectorAll("[aria-expanded]").forEach(function (b) { b.setAttribute("aria-expanded", String(open)); });
    }
    items.forEach(function (item) {
      var links = function () { return Array.prototype.slice.call(item.querySelectorAll(".nav__menu a")); };
      item.querySelectorAll("[aria-expanded]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          setOpen(item, !item.classList.contains("is-open"));
        });
      });
      item.addEventListener("keydown", function (e) {
        var list = links();
        var idx = list.indexOf(doc.activeElement);
        if (e.key === "Escape") {
          setOpen(item, false);
          item.querySelector(".nav__toggle").focus();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setOpen(item, true);
          list[idx < 0 ? 0 : (idx + 1) % list.length].focus();
        } else if (e.key === "ArrowUp" && idx >= 0) {
          e.preventDefault();
          list[(idx - 1 + list.length) % list.length].focus();
        }
      });
      item.addEventListener("focusout", function (e) {
        if (!item.contains(e.relatedTarget)) setOpen(item, false);
      });
    });
    doc.addEventListener("click", function (e) {
      if (!e.target.closest || !e.target.closest(".nav__item--menu")) closeAll(null);
    });

    // Mobile drawer: focus trap, Esc, scroll lock
    var drawer = doc.getElementById("drawer");
    var menuBtn = doc.getElementById("menuBtn");
    var panel = drawer.querySelector(".drawer__panel");
    function focusables() {
      return Array.prototype.slice.call(
        panel.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')
      ).filter(function (el) { return el.offsetParent !== null; });
    }
    function openDrawer() {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      menuBtn.setAttribute("aria-expanded", "true");
      doc.body.classList.add("is-locked");
      setTimeout(function () { drawer.querySelector(".drawer__close").focus(); }, 50);
    }
    function closeDrawer(restore) {
      if (!drawer.classList.contains("is-open")) return;
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      menuBtn.setAttribute("aria-expanded", "false");
      doc.body.classList.remove("is-locked");
      if (restore !== false) menuBtn.focus();
    }
    menuBtn.addEventListener("click", openDrawer);
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) closeDrawer();
      else if (e.target.closest("a[href]")) closeDrawer(false);
    });
    drawer.addEventListener("keydown", function (e) {
      if (e.key === "Escape") return closeDrawer();
      if (e.key !== "Tab") return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (mq) {
      if (mq.matches) closeDrawer(false);
    });
  }

  /* ---------------- Footer ---------------- */
  var QUICK = [["About Us", "/about/"], ["Members & Benefits", "/members/"], ["Femme Stalls Expo", "/femme-stalls/"], ["Programmes & Training", "/programmes/"], ["Events & History", "/events/"], ["Bye-Laws & Transparency", "/transparency/"]];
  var INVOLVED = [["Join as Member", "/members/#register"], ["Partner with Us", "/opportunities/#collaborators"], ["FEMMEI Investors", "/opportunities/#investors"], ["Our Partners", "/partners/"], ["Media & News", "/media/"], ["Contact Support", "/contact/"]];

  function linkList(list) {
    return '<ul class="footer-links">' + list.map(function (l) { return '<li><a href="' + l[1] + '">' + esc(l[0]) + "</a></li>"; }).join("") + "</ul>";
  }

  function picture(stem, alt, w, h, cls) {
    return (
      '<picture><source srcset="/assets/brand/' + stem + '.webp" type="image/webp">' +
      '<img src="/assets/brand/' + stem + '.png" alt="' + esc(alt) + '" width="' + w + '" height="' + h + '"' +
      (cls ? ' class="' + cls + '"' : "") + ' loading="lazy" decoding="async"></picture>'
    );
  }

  function familyStrip() {
    var chips = CFG.GEOHOMZ_FAMILY.map(function (b) {
      var img = picture(b.logo, b.name + " — " + b.caption, b.width, b.height, b.tile ? "is-tile" : "");
      return b.url
        ? '<li><a class="family-chip" href="' + b.url + '" target="_blank" rel="noopener" aria-label="' + esc(b.name) + ' (opens in a new tab)">' + img + "</a></li>"
        : '<li><span class="family-chip">' + img + "</span></li>";
    }).join("");
    return (
      '<div class="family-strip"><div class="family-strip__inner">' +
      '<p class="family-strip__label">Part of the Geohomz family</p>' +
      '<ul class="family-strip__logos">' + chips + "</ul></div></div>"
    );
  }

  function renderFooter() {
    var mount = doc.getElementById("site-footer");
    if (!mount) return;
    var C = CFG.CONTACT, S = CFG.SOCIAL_LINKS;
    var isHome = path === "/";
    var socials = [
      ["WhatsApp", C.whatsappLink(CFG.WHATSAPP_MESSAGES.general), "message-circle", "#25D366"],
      ["Instagram", S.instagram, "instagram", "#E91E8B"],
      ["Facebook", S.facebook, "facebook", "#1877F2"],
      ["YouTube", S.youtube, "youtube", "#FF0000"],
    ].map(function (s) {
      return '<li><a class="social-btn" style="--c:' + s[3] + '" href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + ico(s[2]) + "</a></li>";
    }).join("");

    var cta = isHome ? "" :
      '<div class="footer-cta"><div class="footer-cta__inner"><div>' +
      '<span class="footer-cta__script">Empowering Kilakarai &amp; Beyond</span>' +
      "<h2>Ready to grow with Femme Stalls?</h2>" +
      "<p>Join hundreds of women entrepreneurs creating vibrant stalls, businesses, and communities.</p></div>" +
      '<div class="footer-cta__actions"><a class="btn btn--white" href="/members/#register">Register as Member' + ico("arrow-right") + "</a>" +
      '<a class="btn btn--white-outline" href="/femme-stalls/#register">Book a Stall</a></div></div></div>';

    mount.innerHTML =
      '<footer class="site-footer">' + cta +
      '<div class="footer-main"><div class="footer-grid">' +
      '<div class="footer-brand"><a class="logo-plate" href="/" aria-label="Femme Stalls — home">' +
      picture("femme-logo", "", 400, 432) + "</a>" +
      "<p>Femme Stalls is a women-led grassroots community platform from Kilakarai, Tamil Nadu. We empower aspiring and established women entrepreneurs to showcase talents, launch micro-enterprises, and achieve financial independence.</p>" +
      '<p class="initiative-pill"><span>An initiative of</span><strong>GEOHOMZ</strong></p></div>' +
      '<div class="footer-col footer-col--desktop"><h3>Quick Links</h3>' + linkList(QUICK) + "</div>" +
      '<div class="footer-col footer-col--desktop"><h3>Get Involved</h3>' + linkList(INVOLVED) + "</div>" +
      '<div class="footer-acc"><details><summary>Quick Links' + ico("chevron-down") + "</summary>" + linkList(QUICK) + "</details>" +
      "<details><summary>Get Involved" + ico("chevron-down") + "</summary>" + linkList(INVOLVED) + "</details></div>" +
      '<div class="footer-col"><h3>Connect With Us</h3><ul class="footer-contact">' +
      "<li>" + ico("map-pin") + "<span>" + esc(C.address) + "</span></li>" +
      "<li>" + ico("mail") + '<a href="' + C.mailtoLink() + '">' + esc(C.email) + "</a></li>" +
      "<li>" + ico("phone") + '<a href="' + C.telLink + '">' + esc(C.phone) + "</a></li></ul>" +
      '<span class="footer-social-label">Social Media</span><ul class="social-row">' + socials + "</ul></div>" +
      "</div></div>" +
      familyStrip() +
      '<div class="footer-bar"><div class="footer-bar__inner">' +
      "<p>&copy; " + new Date().getFullYear() + " Femme Stalls. All rights reserved.</p>" +
      '<p class="footer-bar__mid">' + ico("sparkles") + "<span>An initiative backed by <strong>Geohomz</strong></span></p>" +
      '<p class="footer-bar__tag">Organise the Unorganised</p>' +
      "</div></div></footer>";
  }

  renderHeader();
  initHeader();
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", renderFooter);
  else renderFooter();
})();
