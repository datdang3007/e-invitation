/**
 * Utility functions for sending data to Google Sheets
 *
 * Setup Instructions:
 * 1. Tạo Google Sheet mới
 * 2. Tạo Script: Extensions > Apps Script
 * 3. Paste code sau vào script:
 *
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *
 *   // Add headers if first row is empty
 *   if (sheet.getLastRow() === 0) {
 *     sheet.appendRow(['Timestamp', 'Name', 'Attending', 'With Partner']);
 *   }
 *
 *   // Add data
 *   const now = new Date();
 *   sheet.appendRow([
 *     now.toLocaleString('vi-VN'),
 *     data.name,
 *     data.isAttending ? 'Yes' : 'No',
 *     data.isWithPartner ? 'Yes' : 'No'
 *   ]);
 *
 *   return ContentService.createTextOutput(JSON.stringify({success: true}))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * 4. Deploy as Web App: Deploy > New deployment > Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
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
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Error sending to Google Sheets:", error);
    return false;
  }
};
