# Hướng dẫn Setup Google Sheets để lưu RSVP

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo một Sheet mới với tên "Wedding RSVP"
3. Đặt tên Sheet 1 thành "RSVP"

## Bước 2: Tạo Apps Script

1. Trong Google Sheets, chọn: **Extensions > Apps Script**
2. Xóa code mặc định và paste code sau:

```javascript
function doPost(e) {
  try {
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

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Google Apps Script is running" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Lưu script (Ctrl+S) với tên "WeddingRSVP"

## Bước 3: Deploy Web App

1. Click vào **Deploy > New deployment**
2. Chọn type: **Web app**
3. Settings:
   - **Execute as**: Me
   - **Who has access**: Anyone (cần thiết cho public access)
4. Click **Deploy**
5. Cho phép permissions:
   - Click **Authorize access**
   - Chọn Google account
   - Click **Advanced > Go to [project name] (unsafe)**
   - Click **Allow**
6. Copy **Web App URL** (trông như: `https://script.google.com/macros/s/...`)

## Bước 4: Setup Environment Variable

1. Trong project, tạo file `.env` trong root directory:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Thay thế `YOUR_SCRIPT_ID` bằng URL bạn vừa copy
3. Tạo file `.env.example`:

```env
VITE_GOOGLE_SCRIPT_URL=your_google_apps_script_url_here
```

## Bước 5: Update Register Component

Mở `src/components/Wedding/Register.tsx` và cập nhật `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (loading || !name || isWithPartner === null || isAttending === null)
    return;

  setLoading(true);
  setError(null);

  try {
    const success = await sendToGoogleSheets({
      name,
      isAttending: isAttending === true,
      isWithPartner: isWithPartner === true,
    });

    if (success) {
      setLoading(false);
      setAnimate(true);
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    } else {
      throw new Error("Failed to submit");
    }
  } catch (err) {
    console.error("Submission error:", err);
    setError("Có lỗi xảy ra, vui lòng thử lại!");
    setLoading(false);
  }
};
```

Thêm import ở đầu file:

```typescript
import { sendToGoogleSheets } from "../../utils/googleSheets";
```

## Bước 6: Test

1. Chạy `yarn dev`
2. Điền form RSVP và submit
3. Kiểm tra Google Sheet để thấy data mới

## Security Notes

- URL này sẽ PUBLIC - chỉ dùng để thêm data, không expose sensitive info
- Google Sheets sẽ tự động backup
- Có thể set up notification khi có data mới: Extensions > Apps Script > Triggers

## Customization

Bạn có thể thêm các field khác trong Register component và update code Apps Script tương ứng:

1. Update interface trong `src/utils/googleSheets.ts`
2. Update Apps Script để handle fields mới
3. Update Google Sheet schema

## Troubleshooting

**Lỗi CORS**: Bỏ qua, Google Apps Script đã handle CORS.

**Không thấy data**:

- Kiểm tra URL trong `.env`
- Kiểm tra Console trong Apps Script editor
- Đảm bảo deployed với permissions "Anyone"

**Permission denied**:

- Click lại Deploy > Manage deployments > Edit > Redeploy với permissions mới
