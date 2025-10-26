/**
 * Utility functions for sending notifications to Discord
 *
 * Setup Instructions - SIÊU ĐỠN GIẢN (30 giây):
 *
 * 1. Tạo Discord server mới (hoặc dùng server có sẵn)
 * 2. Vào Server Settings > Integrations > Webhooks
 * 3. Click "New Webhook"
 * 4. Đặt tên: "Wedding RSVP"
 * 5. Chọn channel để nhận thông báo
 * 6. Copy "Webhook URL"
 * 7. Thêm vào file .env:
 *    VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxxxx
 *
 * XONG! Không cần EmailJS, không cần Google, không cần authentication!
 */

interface RSVPData {
  name: string;
  isAttending: boolean;
  isWithPartner: boolean;
}

export const sendToDiscord = async (data: RSVPData): Promise<boolean> => {
  try {
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn(
        "Discord webhook chưa được cấu hình. Sử dụng fallback mode."
      );
      return true; // Return true để app vẫn chạy được
    }

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const attendance = data.isAttending ? "✅ Có" : "❌ Không";
    const withPartner = data.isWithPartner ? "✅ Có" : "❌ Không";

    // Create embed message
    const embed = {
      title: "🎉 Wedding RSVP Notification",
      color: data.isAttending ? 0x00ff00 : 0xff0000, // Green if attending, red if not
      fields: [
        {
          name: "👤 Tên",
          value: data.name,
          inline: true,
        },
        {
          name: "📅 Tham dự",
          value: attendance,
          inline: true,
        },
        {
          name: "💑 Đi cùng người thương",
          value: withPartner,
          inline: false,
        },
        {
          name: "⏰ Thời gian",
          value: timestamp,
          inline: false,
        },
      ],
    };

    // Gửi cả embed và một object json "thường"
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
        content: `\`\`\`${JSON.stringify(data)}\`\`\``,
      }),
    });

    if (response.ok) {
      return true;
    } else {
      console.error("Discord error:", await response.text());
      return false;
    }
  } catch (error) {
    console.error("Error sending to Discord:", error);
    return false;
  }
};
