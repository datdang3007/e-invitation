/**
 * Google Apps Script Code - Copy và paste vào Apps Script editor
 *
 * IMPORTANT: Sau khi paste, nhớ:
 * 1. Click "Deploy > New deployment"
 * 2. Chọn "Web app"
 * 3. Set "Who has access" = "Anyone"
 * 4. Click "Deploy"
 */

function doPost(e) {
  try {
    // Log để debug
    Logger.log("Received POST request");

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Kiểm tra nếu chưa có header, thêm header
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Attending", "With Partner"]);
      // Format header
      const headerRange = sheet.getRange(1, 1, 1, 4);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#fef1f2");
    }

    // Thêm data vào sheet
    const now = new Date();
    const vietnamTime = Utilities.formatDate(
      now,
      Session.getScriptTimeZone(),
      "dd/MM/yyyy HH:mm:ss"
    );

    sheet.appendRow([
      vietnamTime,
      data.name || "",
      data.isAttending ? "Yes" : "No",
      data.isWithPartner ? "Yes" : "No",
    ]);

    // Return success với CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function doGet(e) {
  return HtmlService.createHtmlOutput(
    "<h1>Google Apps Script is running!</h1>" +
      "<p>Deploy successful. CORS should work now.</p>"
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
