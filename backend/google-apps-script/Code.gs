const NOTIFY_EMAIL = 'femmestalls@gmail.com';
const FORMS = {
  member: {
    sheet: 'Members',
    fields: ['fullName','mobile','whatsapp','location','businessName','category','products','experience','interests','heardFrom','message'],
  },
  partner: {
    sheet: 'Partner Enquiries',
    fields: ['name','organisation','partnershipType','email','phone','message'],
  },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse(e.postData.contents);
    if (data.website) return json({ ok: true }); // honeypot: bots fill it, humans never see it
    const form = FORMS[data.formType];
    if (!form) return json({ ok: false, error: 'Unknown form' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(form.sheet);
    if (!sheet) {
      sheet = ss.insertSheet(form.sheet);
      sheet.appendRow(['Timestamp', ...form.fields, 'Page']);
      sheet.setFrozenRows(1);
    }
    const values = form.fields.map(f => clean(data[f]));
    sheet.appendRow([new Date(), ...values, clean(data.page)]);

    try {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New submission: ' + form.sheet,
        form.fields.map((f, i) => f + ': ' + values[i]).join('\n'));
    } catch (mailErr) {} // never fail a submission because of email quota

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function clean(v) {
  if (Array.isArray(v)) v = v.join(', ');
  v = String(v == null ? '' : v).trim().slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // blocks spreadsheet formula injection
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
