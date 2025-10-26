/**
 * Utility functions for sending notifications to Telegram
 *
 * Setup Instructions (2 phút):
 *
 * 1. Mở Telegram, tìm @BotFather
 * 2. Gửi lệnh: /newbot
 * 3. Đặt tên bot: "Wedding RSVP Bot"
 * 4. Đặt username: "YourWeddingRSVP_bot"
 * 5. Copy Bot Token (ví dụ: 123456:ABC-DEF...)
 * 6. Gửi message đầu tiên cho bot để lấy chat_id:
 *    - Tìm bot trong Telegram
 *    - Click Start
 *    - Mở: https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
 *    - Tìm "chat":{"id":123456789}
 * 7. Thêm vào .env:
 *    VITE_TELEGRAM_BOT_TOKEN=your_bot_token
 *    VITE_TELEGRAM_CHAT_ID=your_chat_id
 */

interface RSVPData {
  name: string;
  isAttending: boolean;
  isWithPartner: boolean;
}

export const sendToTelegram = async (data: RSVPData): Promise<boolean> => {
  try {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram bot chưa được cấu hình. Sử dụng fallback mode.");
      return true;
    }

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const emoji = data.isAttending ? "✅" : "❌";
    const attendance = data.isAttending ? "Có" : "Không";
    const withPartner = data.isWithPartner ? "Có" : "Không";

    const message = `🎉 *Wedding RSVP Notification*

👤 *Tên:* ${data.name}
${emoji} *Tham dự:* ${attendance}
💑 *Đi cùng người thương:* ${withPartner}
⏰ *Thời gian:* ${timestamp}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error("Telegram error:", await response.text());
      return false;
    }
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
};
