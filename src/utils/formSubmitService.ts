/**
 * Utility functions for sending to Formsubmit
 *
 * Setup Instructions (1 phút):
 *
 * Cách đơn giản nhất - KHÔNG CẦN config gì cả!
 *
 * 1. Tạo email bạn muốn nhận RSVP
 * 2. Thêm vào .env:
 *    VITE_RECIPIENT_EMAIL=your-email@gmail.com
 *
 * XONG! Không cần bot, không cần webhook!
 */

interface RSVPData {
  name: string;
  isAttending: boolean;
  isWithPartner: boolean;
}

export const sendToFormSubmit = async (data: RSVPData): Promise<boolean> => {
  try {
    const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL;

    if (!recipientEmail) {
      console.warn("FormSubmit chưa được cấu hình. Sử dụng fallback mode.");
      return true;
    }

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const attendance = data.isAttending ? "Có" : "Không";
    const withPartner = data.isWithPartner ? "Có" : "Không";

    const formData = new URLSearchParams();
    formData.append("name", data.name);
    formData.append("attendance", attendance);
    formData.append("with_partner", withPartner);
    formData.append("timestamp", timestamp);
    formData.append("_replyto", recipientEmail);

    const response = await fetch("https://formsubmit.co/" + recipientEmail, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    // FormSubmit không trả về response, nhưng nếu không có error thì success
    if (response.ok) {
      return true;
    } else {
      console.error("FormSubmit error:", response.status);
      return false;
    }
  } catch (error) {
    console.error("Error sending to FormSubmit:", error);
    return false;
  }
};
