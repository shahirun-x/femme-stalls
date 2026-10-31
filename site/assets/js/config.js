/*
 * Femme Stalls — site configuration. Single source of truth.
 *
 * Every phone number, email, WhatsApp link and social URL on the site is read
 * from here at runtime (see ui.js `hydrateContacts`). Changing a detail is a
 * one-line edit in this file. Loaded synchronously before layout.js.
 */
(function () {
  "use strict";

  var PHONE_RAW = "919500850116";
  var EMAIL = "femmestalls@gmail.com";

  window.FS_CONFIG = {
    SITE_URL: "https://www.femmestalls.com",

    CONTACT: {
      phone: "+91 95008 50116", // display format
      phoneRaw: PHONE_RAW, // digits only, country code first
      email: EMAIL,
      address: "Kilakarai, Ramanathapuram District, Tamil Nadu, India",
      whatsappBase: "https://wa.me/" + PHONE_RAW,
      telLink: "tel:+" + PHONE_RAW,
      whatsappLink: function (message) {
        return message
          ? "https://wa.me/" + PHONE_RAW + "?text=" + encodeURIComponent(message)
          : "https://wa.me/" + PHONE_RAW;
      },
      mailtoLink: function (subject) {
        return subject ? "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) : "mailto:" + EMAIL;
      },
    },

    /* Prefilled WhatsApp messages, keyed for data-wa="…" attributes. */
    WHATSAPP_MESSAGES: {
      general: "Hi, I'd like to know more about Femme Stalls",
      membership: "Hi, I'd like to know more about becoming a member",
      stallRegistration: "Hi, I'd like to know more about registering a stall",
      sponsorship: "Hi, I'd like to know more about sponsorship opportunities",
      press: "Hi, I'd like to know more about press and media enquiries",
    },

    /* NOTE: placeholder handles — the client still needs to confirm the real
       profile URLs. Update here once supplied. */
    SOCIAL_LINKS: {
      facebook: "https://facebook.com/femmestalls",
      instagram: "https://instagram.com/femmestalls",
      youtube: "https://youtube.com/@femmestalls",
      whatsapp: "https://wa.me/" + PHONE_RAW,
    },

    /* Google Apps Script web-app URL for the membership and partner forms.
       Paste the deployed /exec URL here (see backend/google-apps-script). While
       empty, forms fall back to a prefilled WhatsApp message — never a fake
       success. */
    SHEETS_ENDPOINT: "",

    /* The Geohomz family — sister ventures, not sponsors. Add a `url` to make a
       card link out (opens in a new tab). `tile: true` marks logos that carry
       their own background, so they keep rounded corners inside the plate. */
    GEOHOMZ_FAMILY: [
      { name: "Geo Homz", caption: "Homestays, Kilakarai", logo: "geohomz", width: 142, height: 142, tile: true, url: "" },
      { name: "Geohomz Kottaram", caption: "Beach Community", logo: "geohomz-kottaram", width: 560, height: 191, url: "" },
      { name: "Geofudz", caption: "Diner, Kilakarai", logo: "geofudz-diner", width: 427, height: 280, tile: true, url: "" },
      { name: "Keelai Snacks", caption: "Handmade snacks by Geofudz", logo: "keelai-snacks", width: 280, height: 280, url: "https://www.keelaisnacks.com" },
    ],
  };
})();
