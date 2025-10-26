# Setup Telegram Bot - Dễ dàng! (2 phút)

## Vì sao chọn Telegram?

✅ **Phổ biến ở VN** - Nhiều người dùng  
✅ **Setup 2 phút** - Đơn giản  
✅ **Real-time** - Nhận notification ngay  
✅ **Hoàn toàn miễn phí** - Không giới hạn

## Setup trong 2 phút

### Bước 1: Tạo Telegram Bot (1 phút)

1. Mở Telegram
2. Tìm và chat với **@BotFather**
3. Gửi lệnh: `/newbot`
4. Đặt tên bot: `Wedding RSVP Bot`
5. Đặt username: `YourWeddingRSVP_bot`
6. **Copy Bot Token** (ví dụ: `123456789:ABC-DEF...`)

### Bước 2: Lấy Chat ID (30 giây)

1. Tìm bot vừa tạo trong Telegram
2. Click **"Start"**
3. Mở link: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
   - Thay `<BOT_TOKEN>` bằng token bạn vừa copy
4. Tìm `"chat":{"id":123456789}`
5. Copy **Chat ID**

### Bước 3: Cấu hình .env (30 giây)

Tạo file `.env`:

```env
VITE_TELEGRAM_BOT_TOKEN=123456789:ABC-DEF...
VITE_TELEGRAM_CHAT_ID=123456789
```

### XONG! 🎉

Test ngay:

```bash
npm run dev
```

## Preview

Bạn sẽ nhận message dạng:

```
🎉 Wedding RSVP Notification

👤 Tên: Nguyễn Văn A
✅ Tham dự: Có
💑 Đi cùng người thương: Có
⏰ Thời gian: 01/01/2024 10:30 AM
```

## So sánh

|               | Telegram      | Discord         |
| ------------- | ------------- | --------------- |
| Setup         | 2 phút        | 30 giây         |
| Popularity VN | ✅✅✅ Cao    | ✅ Cao          |
| Phức tạp      | ⭐⭐ Đơn giản | ⭐ Rất đơn giản |
