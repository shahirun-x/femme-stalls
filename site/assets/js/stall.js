/*
 * Femme Stalls — client stall pages.
 *
 * Each stall page is a thin HTML shell:
 *   <div id="stall-root" class="stall" data-slug="magalir-mattum" data-page="intro"></div>
 * data-page is "intro" | "products" | "orders" | "directory". Content comes from
 * /data/stalls/{slug}.json; the directory reads /data/stalls/index.json.
 * A page renders only if the client's pagesEnabled allows it
 * (intro >= 1, products >= 2, orders >= 3).
 */
(function () {
  "use strict";

  var ICONS = "/assets/icons.svg";
  var root = document.getElementById("stall-root");
  if (!root) return;

  var NEED = { intro: 1, products: 2, orders: 3 };
  var CATEGORY_LABELS = {
    clothes: "Clothing & Apparel", food: "Food & Snacks", jewellery: "Jewellery & Accessories",
    handicrafts: "Handicrafts & Art", tailoring: "Tailoring & Stitching", beauty: "Beauty & Wellness",
    teaching: "Teaching & Classes", "home-products": "Home Products", other: "Other",
  };
  var CATEGORY_ICON = {
    clothes: "shirt", food: "utensils-crossed", jewellery: "gem", handicrafts: "palette", tailoring: "scissors",
    beauty: "sparkles", teaching: "graduation-cap", "home-products": "home", other: "package",
  };
  var ORDER_METHODS = {
    whatsapp: ["message-circle", "Order on WhatsApp"], phone: ["phone", "Call to order"],
    visit: ["map-pin", "Visit us in person"], event: ["calendar", "Find us at community stalls"],
    delivery: ["truck", "Home delivery available"],
  };
  var SIZES = ["S", "M", "L", "XL", "XXL", "Custom"];

  function ico(name, cls) {
    return '<svg class="icon' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="' + ICONS + "#" + name + '"></use></svg>';
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function wa(phone, msg) { return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg); }
  function price(n) { return "₹" + Number(n).toLocaleString("en-IN"); }

  /* Image with a themed icon placeholder. Empty src = photo not supplied yet
     (no request is made); a broken src swaps to the placeholder. */
  function img(src, alt, icon) {
    var ph = '<span class="s-ph" role="img" aria-label="' + esc(alt) + '">' + ico(icon) + "</span>";
    if (!src) return '<span class="s-img">' + ph + "</span>";
    var webp = /\.(png|jpe?g)$/i.test(src) ? src.replace(/\.(png|jpe?g)$/i, ".webp") : "";
    return (
      '<span class="s-img">' +
      (webp ? '<picture><source srcset="' + esc(webp) + '" type="image/webp">' : "") +
      '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async" data-fallback>' +
      (webp ? "</picture>" : "") + "</span>"
    );
  }
  function wireFallbacks(scope, icon) {
    scope.querySelectorAll("img[data-fallback]").forEach(function (im) {
      im.addEventListener("error", function () {
        var holder = im.closest(".s-img");
        holder.innerHTML = '<span class="s-ph" role="img" aria-label="' + esc(im.alt) + '">' + ico(icon) + "</span>";
      }, { once: true });
    });
  }

  function header(c) {
    return (
      '<header class="stall-header"><div class="stall-header__bar">' +
      '<a class="stall-back" href="/stalls/" aria-label="Back to Femme Stalls">' + ico("arrow-left") + "</a>" +
      '<div class="stall-header__id"><span class="stall-header__logo">' + img(c.logo, c.name + " logo", CATEGORY_ICON[c.category]) + "</span>" +
      '<span class="stall-header__name">' + esc(c.name) + "</span></div>" +
      '<span class="stall-header__hint">Back to Femme Stalls</span></div></header>'
    );
  }

  function footer() {
    return (
      '<footer class="s-footer"><div class="s-footer__inner">' +
      '<a class="logo-plate" href="/" aria-label="Femme Stalls — home"><picture><source srcset="/assets/brand/femme-logo.webp" type="image/webp">' +
      '<img src="/assets/brand/femme-logo.png" alt="" width="400" height="432" loading="lazy" decoding="async"></picture></a>' +
      "<p>Powered by Femme Stalls</p>" +
      '<div class="s-footer__cta"><p>Want a page like this for YOUR business?</p>' +
      '<a class="btn btn--pink" href="/members/#register">Get Your Free Femme Stalls Page</a></div>' +
      "</div></footer>"
    );
  }

  function pageNav(back, fwd) {
    return (
      '<nav class="s-pagenav" aria-label="Stall page navigation">' +
      (back ? '<a class="s-pagenav__back" href="' + back[1] + '">' + ico("arrow-left") + esc(back[0]) + "</a>" : "<span></span>") +
      (fwd ? '<a class="s-pagenav__fwd" href="' + fwd[1] + '">' + esc(fwd[0]) + ico("arrow-right") + "</a>" : "") +
      "</nav>"
    );
  }

  function contactCard(c) {
    var msg = "Hi! I saw your page on Femme Stalls. I'd like to know more about your products.";
    var rows = [];
    if (c.phone) rows.push('<li><a href="tel:+91' + esc(c.phone) + '">' + ico("phone") + "<span>+91 " + esc(c.phone) + "</span></a></li>");
    rows.push("<li>" + ico("map-pin") + "<span>" + (c.address ? esc(c.address) + ", " : "") + esc(c.location) + "</span></li>");
    if (c.businessHours) rows.push("<li>" + ico("clock") + "<span>" + esc(c.businessHours) + "</span></li>");
    if (c.instagram) rows.push('<li><a href="https://instagram.com/' + esc(c.instagram) + '" target="_blank" rel="noopener">' + ico("instagram") + "<span>@" + esc(c.instagram) + "</span></a></li>");
    return (
      '<div class="s-contact"><a class="s-wa s-wa--xl" href="' + wa(c.whatsapp, msg) + '" target="_blank" rel="noopener">' + ico("message-circle") + "Chat on WhatsApp</a>" +
      "<ul>" + rows.join("") + "</ul></div>"
    );
  }

  function intro(c) {
    var methods = c.orderMethods.map(function (m) {
      var x = ORDER_METHODS[m];
      return x ? "<li>" + ico(x[0]) + esc(x[1]) + "</li>" : "";
    }).join("");
    var base = "/stalls/" + c.slug + "/";
    var next = c.pagesEnabled === 1
      ? '<section class="s-sec s-sec--alt s-sec--tight"><p class="s-upsell">' + ico("sparkles") + "Want to see our products? Coming soon!</p></section>"
      : '<section class="s-sec s-sec--alt"><div class="s-wrap s-navcards">' +
        '<a class="s-navcard" href="' + base + 'products/">Our Products' + ico("arrow-right") + "</a>" +
        (c.pagesEnabled >= 3 ? '<a class="s-navcard" href="' + base + 'orders/">Reviews &amp; Orders' + ico("arrow-right") + "</a>" : "") +
        "</div></section>";
    return (
      '<section class="s-sec s-sec--alt s-hero"><div class="s-wrap s-fade">' +
      '<div class="s-hero__logo">' + img(c.logo, c.name + " logo", CATEGORY_ICON[c.category]) + "</div>" +
      "<h1>" + esc(c.name) + "</h1><p>" + esc(c.tagline) + "</p></div></section>" +
      '<section class="s-sec"><div class="s-wrap s-about"><h2 class="s-h2 mb-s">About Us</h2>' +
      "<p>" + esc(c.description) + "</p>" +
      '<p class="s-founder">Founded by <strong>' + esc(c.ownerName) + "</strong></p></div></section>" +
      '<section class="s-sec s-sec--alt"><div class="s-wrap s-stack"><h2 class="s-h2">What We Offer</h2>' +
      '<span class="s-cat">' + esc(CATEGORY_LABELS[c.category] || "Other") + "</span>" +
      (c.acceptsCustomOrders ? '<div class="s-custom">' + ico("sparkles") + "We take custom orders!</div>" : "") +
      '<div class="s-buy"><p>How to buy:</p><ul>' + methods + "</ul></div></div></section>" +
      '<section class="s-sec"><div class="s-wrap"><h2 class="s-h2 mb-m">Contact &amp; Location</h2>' + contactCard(c) + "</div></section>" +
      next
    );
  }

  function productCard(p, c) {
    var msg = "Hi! I saw " + p.name + " (₹" + p.price + ") on Femme Stalls. I'm interested!";
    var off = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    return (
      '<li class="s-product" data-category="' + esc(p.category || "") + '">' +
      '<div class="s-product__img">' + img(p.image, p.name, CATEGORY_ICON[c.category]) +
      (p.isBestSeller ? '<span class="s-badge s-badge--best">Best Seller</span>' : p.isNew ? '<span class="s-badge">New</span>' : "") +
      "</div>" +
      '<div class="s-product__body"><h3>' + esc(p.name) + "</h3>" +
      '<div class="s-price"><strong>' + price(p.price) + "</strong>" +
      (p.originalPrice ? "<s>" + price(p.originalPrice) + "</s><span>" + off + "% off</span>" : "") + "</div>" +
      "<p>" + esc(p.description) + "</p>" +
      '<a class="s-wa" href="' + wa(c.whatsapp, msg) + '" target="_blank" rel="noopener">' + ico("message-circle") + "Enquire on WhatsApp</a>" +
      "</div></li>"
    );
  }

  function products(c) {
    var cats = ["All"].concat(c.productCategories || []);
    var base = "/stalls/" + c.slug + "/";
    var chips = cats.length > 1
      ? '<div class="s-filters" role="group" aria-label="Filter products">' + cats.map(function (k, i) {
          return '<button type="button" class="s-filter" data-cat="' + esc(k) + '" aria-pressed="' + (i === 0) + '">' + esc(k) + "</button>";
        }).join("") + "</div>"
      : "";
    var custom = c.acceptsCustomOrders
      ? '<section class="s-sec s-sec--alt s-sec--pad12"><div class="s-card"><p class="s-card__lead">' + ico("ruler") +
        esc(c.customOrderNote || "Want something custom? We take custom orders!") + "</p>" +
        '<a class="s-wa s-wa--inline" href="' + wa(c.whatsapp, "Hi! I'd like to discuss a custom order with " + c.name + " — I saw your page on Femme Stalls.") +
        '" target="_blank" rel="noopener">' + ico("message-circle") + "Discuss Custom Order</a></div></section>"
      : "";
    return (
      '<section class="s-products-head"><h1>' + esc(c.name) + "</h1><h2>Our Products</h2>" + chips + "</section>" +
      '<section><ul class="s-grid s-wrap--wide mx-auto" data-products>' + c.products.map(function (p) { return productCard(p, c); }).join("") + "</ul></section>" +
      '<p class="sr-only" aria-live="polite" data-product-status></p>' +
      custom +
      pageNav(["Back to Intro", base], c.pagesEnabled >= 3 ? ["Reviews & Orders", base + "orders/"] : null)
    );
  }

  function wireProducts() {
    var buttons = root.querySelectorAll(".s-filter");
    var items = root.querySelectorAll("[data-products] > li");
    var status = root.querySelector("[data-product-status]");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var cat = b.getAttribute("data-cat");
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        var shown = 0;
        items.forEach(function (li) {
          li.hidden = !(cat === "All" || li.getAttribute("data-category") === cat);
          if (!li.hidden) shown++;
        });
        if (status) status.textContent = shown + " products shown";
      });
    });
  }

  function stars(n) {
    var out = "";
    for (var i = 0; i < 5; i++) out += ico("star", i < n ? "is-on" : "");
    return '<div class="s-stars" role="img" aria-label="' + n + ' out of 5 stars">' + out + "</div>";
  }

  function orders(c) {
    var base = "/stalls/" + c.slug + "/";
    var reviews = c.testimonials.map(function (t) {
      return '<li class="s-review"><div class="s-review__who">' +
        (t.customerImage ? '<span class="stall-header__logo">' + img(t.customerImage, t.customerName, "user") + "</span>" : '<span class="s-review__avatar" aria-hidden="true">' + esc(t.customerName.charAt(0)) + "</span>") +
        "<span>" + esc(t.customerName) + "</span></div>" + (t.rating ? stars(t.rating) : "") + "<p>" + esc(t.review) + "</p></li>";
    }).join("");
    var photos = (c.customerPhotos || []).length
      ? '<section class="s-sec s-sec--alt"><div class="s-wrap s-wrap--3xl"><h2 class="s-h2 s-h2--center mb-l">Our Happy Customers</h2><ul class="s-photos">' +
        c.customerPhotos.map(function (src, i) { return "<li>" + img(src, c.name + " customer " + (i + 1), "user") + "</li>"; }).join("") +
        "</ul></div></section>"
      : "";
    var story = c.founderStory
      ? '<section class="s-sec s-sec--alt"><div class="s-wrap text-center"><h2 class="s-h2 mb-m">Our Story</h2>' +
        (c.founderImages && c.founderImages[0] ? '<div class="s-hero__logo mb-m">' + img(c.founderImages[0], c.ownerName, "user") + "</div>" : "") +
        '<p class="s-story">' + esc(c.founderStory) + "</p></div></section>"
      : "";
    var offer = c.specialOffer
      ? '<section class="s-sec s-sec--pad12"><div class="s-offer"><p>' + esc(c.specialOffer) + "</p>" +
        '<a class="s-wa s-wa--inline" href="' + wa(c.whatsapp, "Hi! I'd like to grab your special offer — I saw it on Femme Stalls.") + '" target="_blank" rel="noopener">' +
        ico("message-circle") + "Grab This Offer</a></div></section>"
      : "";
    var options = c.products.map(function (p) { return "<option>" + esc(p.name) + "</option>"; }).join("") + "<option>Custom Order</option><option>Other</option>";
    var sizeField = c.category === "clothes"
      ? '<div><label class="label" for="order-size">Your Size</label><div class="select-wrap"><select class="select" id="order-size" name="size">' +
        SIZES.map(function (s) { return "<option>" + s + "</option>"; }).join("") + "</select>" + ico("chevron-down") + "</div></div>"
      : "";
    return (
      '<section class="s-sec"><div class="s-wrap s-wrap--3xl"><h1 class="s-h2 s-h2--center mb-l">What Our Customers Say</h1><ul class="s-reviews">' + reviews + "</ul></div></section>" +
      photos + story + offer +
      '<section class="s-sec"><div class="s-wrap"><h2 class="s-h2 s-h2--center mb-m">Quick Order</h2>' +
      '<form class="s-form" data-order>' +
      '<div><label class="label" for="order-name">Your Name</label><input class="input" id="order-name" name="name" placeholder="Enter your name" autocomplete="name"></div>' +
      '<div><label class="label" for="order-product">Product you want</label><div class="select-wrap"><select class="select" id="order-product" name="product">' + options + "</select>" + ico("chevron-down") + "</div></div>" +
      '<div><label class="label" for="order-qty">Quantity</label><input class="input" id="order-qty" name="qty" type="number" min="1" value="1" inputmode="numeric"></div>' +
      sizeField +
      '<div><label class="label" for="order-message">Any message (optional)</label><textarea class="textarea" id="order-message" name="message" rows="3" placeholder="Tell us anything else about your order"></textarea></div>' +
      '<button type="submit" class="s-wa s-wa--xl">' + ico("message-circle") + "Send Order on WhatsApp</button>" +
      "</form></div></section>" +
      pageNav(["Back to Products", base + "products/"], ["Back to Intro", base])
    );
  }

  function wireOrder(c) {
    var form = root.querySelector("[data-order]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var qty = Math.max(1, parseInt(f.qty.value, 10) || 1);
      var lines = [
        "Hi! I'd like to place an order with " + c.name + " (via Femme Stalls).",
        f.name.value.trim() && "Name: " + f.name.value.trim(),
        "Product: " + f.product.value,
        "Quantity: " + qty,
        f.size && "Size: " + f.size.value,
        f.message.value.trim() && "Message: " + f.message.value.trim(),
      ].filter(Boolean);
      window.open(wa(c.whatsapp, lines.join("\n")), "_blank", "noopener,noreferrer");
    });
  }

  function missing(title, text, href, label) {
    root.innerHTML =
      '<div class="stall-missing"><h1>' + esc(title) + "</h1><p>" + esc(text) + "</p>" +
      '<a class="btn btn--pink" href="' + href + '">' + esc(label) + "</a></div>";
  }

  function directory(list) {
    if (!list.length) {
      root.querySelector("[data-dir]").outerHTML = '<p class="text-center text-muted">New stalls are joining soon — check back shortly!</p>';
      return;
    }
    root.querySelector("[data-dir]").innerHTML = list.map(function (c) {
      return '<li><a class="dir-card" href="/stalls/' + esc(c.slug) + '/">' +
        '<span class="dir-card__logo">' + img(c.logo, c.name + " logo", "store") + "</span>" +
        "<h2>" + esc(c.name) + "</h2><p>" + esc(c.tagline) + "</p>" +
        '<span class="dir-card__loc">' + ico("map-pin") + esc(c.location) + "</span>" +
        '<span class="dir-card__cat">' + esc(CATEGORY_LABELS[c.category] || "Other") + "</span>" +
        '<span class="dir-card__go">Visit Stall' + ico("arrow-right") + "</span></a></li>";
    }).join("");
    wireFallbacks(root, "store");
  }

  function getJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(url + " " + r.status);
      return r.json();
    });
  }

  var page = root.getAttribute("data-page");

  if (page === "directory") {
    getJSON("/data/stalls/index.json")
      .then(function (slugs) { return Promise.all(slugs.map(function (s) { return getJSON("/data/stalls/" + s + ".json"); })); })
      .then(function (clients) { directory(clients.filter(function (c) { return c.pagesEnabled >= 1; })); })
      .catch(function () { directory([]); });
    return;
  }

  var slug = root.getAttribute("data-slug");
  getJSON("/data/stalls/" + slug + ".json")
    .then(function (c) {
      if (c.pagesEnabled < (NEED[page] || 1)) {
        missing("Coming soon", c.name + " hasn't opened this page yet.", "/stalls/" + c.slug + "/", "Visit " + c.name);
        return;
      }
      var k = c.colors;
      root.style.cssText = "--client-primary:" + k.primary + ";--client-secondary:" + k.secondary + ";--client-accent:" + k.accent +
        ";--client-bg:" + k.background + ";--client-text:" + k.text + ";--client-text-secondary:" + k.textSecondary;
      var body = page === "products" ? products(c) : page === "orders" ? orders(c) : intro(c);
      root.innerHTML = header(c) + body + footer();
      wireFallbacks(root, CATEGORY_ICON[c.category]);
      if (page === "products") wireProducts();
      if (page === "orders") wireOrder(c);
    })
    .catch(function () {
      missing("Stall not found", "We couldn't find this stall. It may have moved.", "/stalls/", "Browse all stalls");
    });
})();
