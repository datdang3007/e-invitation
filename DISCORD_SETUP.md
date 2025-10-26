# Setup Discord Webhook - ĐỠN GIẢN NHẤT! (30 giây)

## 🎯 Vì sao Discord tốt hơn tất cả?

✅ **Setup 30 giây** - Nhanh nhất!  
✅ **Không cần authentication** - Chỉ cần 1 URL  
✅ **Real-time notifications** - Nhận ngay trên Discord  
✅ **Hoàn toàn miễn phí** - Không giới hạn  
✅ **Không có lỗi CORS** - Simple HTTP request  
✅ **Không cần EmailJS, Gmail, Apps Script** - Chỉ cần Discord

## Setup trong 30 giây!

### Bước 1: Tạo Discord Server (nếu chưa có)

1. Mở Discord
2. Tạo server mới hoặc dùng server có sẵn

### Bước 2: Tạo Webhook (20 giây)

1. Vào Server Settings (Right-click server > Server Settings)
2. Chọn **Integrations** > **Webhooks**
3. Click **"New Webhook"**
4. Đặt tên: `Wedding RSVP`
5. Chọn channel để nhận notifications
6. Click **"Copy Webhook URL"**

URL có dạng:

```
https://discord.com/api/webhooks/123456789/AbCdEfGhIjKlMnOpQrStUvWxYz
```

### Bước 3: Thêm vào .env (10 giây)

Tạo file `.env` trong root directory:

```env
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/123456789/AbCdEfGhIjKlMnOpQrStUvWxYz
```

### Bước 4: Test ngay!

```bash
npm run dev
```

Điền form RSVP → Xem Discord channel → Nhận notification!

## 🎉 XONG!

Giờ mọi RSVP sẽ được gửi vào Discord channel của bạn với embed đẹp!

---

## Preview

Bạn sẽ nhận message dạng như này trong Discord:

```
🎉 Wedding RSVP Notification

👤 Tên: Nguyễn Văn A
📅 Tham dự: ✅ Có
💑 Đi cùng người thương: ✅ Có
⏰ Thời gian: 01/01/2024 10:30 AM

Wedding Invitation
```

---

## So sánh tất cả phương pháp

| Method              | Setup Time        | Complexity              | Cost | Good?       |
| ------------------- | ----------------- | ----------------------- | ---- | ----------- |
| **Discord Webhook** | ⭐⭐⭐⭐⭐ 30s    | ⭐ Siêu đơn giản        | Free | ✅✅✅ Best |
| Telegram Bot        | ⭐⭐⭐⭐ 2 phút   | ⭐⭐ Đơn giản           | Free | ✅✅ Good   |
| Formsubmit.co       | ⭐⭐⭐⭐⭐ 1 phút | ⭐ Siêu đơn giản        | Free | ✅✅ Good   |
| EmailJS             | ⭐⭐⭐ 5 phút     | ⭐⭐⭐ Phức tạp         | Free | ✅ OK       |
| Google Sheets       | ⭐ 30 phút        | ⭐⭐⭐⭐⭐ Rất phức tạp | Free | ❌ No       |

## Discord > Telegram > Formsubmit > EmailJS > Google Sheets
