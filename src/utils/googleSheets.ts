/**
 * Utility functions for sending data to Google Sheets
 *
 * Setup Instructions:
 * 1. Tạo Google Sheet mới
 * 2. Tạo Script: Extensions > Apps Script
 * 3. Paste code sau vào script (QUAN TRỌNG: Code này có CORS headers):
 *
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     const data = JSON.parse(e.postData.contents);
 *
 *     // Add headers if first row is empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow(['Timestamp', 'Name', 'Attending', 'With Partner']);
 *     }
 *
 *     // Add data
 *     const now = new Date();
 *     const vietnamTime = Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
 *
 *     sheet.appendRow([
 *       vietnamTime,
 *       data.name || '',
 *       data.isAttending ? 'Yes' : 'No',
 *       data.isWithPartner ? 'Yes' : 'No'
 *     ]);
 *
 *     return ContentService.createTextOutput(JSON.stringify({success: true}))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 *
 * // Thêm function này để test CORS
 * function doGet(e) {
 *   return HtmlService.createHtmlOutput("Google Apps Script is running!")
 *     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
 * }
 *
 * 4. Deploy as Web App: Deploy > New deployment > Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - IMPORTANT: Check "Enable CORS" nếu có option
 * 5. Copy Web App URL và thay thế GOOGLE_SCRIPT_URL trong .env
 */

interface RegisterData {
  name: string;
  isAttending: boolean;
  isWithPartner: boolean;
}

const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

export const sendToGoogleSheets = async (
  data: RegisterData
): Promise<boolean> => {
  try {
    // Sửa: Bỏ mode: "no-cors" để có thể đọc response
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    });

    // Đọc response để kiểm tra kết quả
    const result = await response.json();

    if (result.success) {
      return true;
    } else {
      console.error("Google Sheets error:", result.error);
      return false;
    }
  } catch (error) {
    console.error("Error sending to Google Sheets:", error);
    return false;
  }
};
