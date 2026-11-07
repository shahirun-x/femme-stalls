# Google Sheets form backend

Receives the membership form (`/members/#register`) and the partner enquiry
form (`/contact/#partner`) from the static site and appends each submission as
a row in a Google Sheet, then emails a summary to `femmestalls@gmail.com`.

## Deploy (one-time, ~5 minutes)

1. Create a Google Sheet (e.g. "Femme Stalls — Submissions") in the Femme
   Stalls Google account. You don't need to create tabs; the script creates
   `Members` and `Partner Enquiries` with header rows on first submission.
2. In the sheet: **Extensions → Apps Script**. Replace the default code with
   the contents of `Code.gs` in this folder and save.
3. **Deploy → New deployment** → type **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorise when prompted (Sheets + Gmail send permissions).
5. Copy the web-app URL (ends in `/exec`) and paste it into
   `site/assets/js/config.js`:

   ```js
   SHEETS_ENDPOINT: "https://script.google.com/macros/s/…/exec",
   ```

6. Submit each form once on the live site and check that a row appears.

When you change `Code.gs` later, use **Deploy → Manage deployments → Edit →
New version** so the URL stays the same.

## How the site talks to it

- `forms.js` POSTs `JSON.stringify({ formType, page, ...fields })` with
  `Content-Type: text/plain;charset=utf-8`. That keeps it a "simple" request,
  so the browser skips the CORS preflight Apps Script can't answer.
- A hidden `website` field is a honeypot; filled-in submissions are silently
  accepted but never written.
- Values are trimmed, capped at 2,000 characters, and any value starting with
  `= + - @` is prefixed with `'` so it can't run as a spreadsheet formula.
- While `SHEETS_ENDPOINT` is empty the forms never fake success — they show a
  WhatsApp link prefilled with the visitor's answers instead.
