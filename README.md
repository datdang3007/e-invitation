# Wedding Invitation 💒

A beautiful wedding invitation website built with React + TypeScript + Vite.

## ✨ Features

- 🎨 Beautiful and modern UI
- 📱 Fully responsive design
- 💬 Multiple notification methods (Discord, Telegram, Formsubmit)
- 🎵 Background music support
- 📸 Photo gallery
- 📅 Event calendar
- 🎁 Gift registry

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Notifications (CHOOSE ONE)

#### 🏆 Option 1: Discord Webhook (Khuyến nghị - 30 giây!)

Xem [DISCORD_SETUP.md](./DISCORD_SETUP.md)

```bash
# In .env
VITE_DISCORD_WEBHOOK_URL=your_webhook_url
```

#### 📧 Option 2: Formsubmit (1 phút)

Xem [FORMSUBMIT_SETUP.md](./FORMSUBMIT_SETUP.md)

```bash
# In .env
VITE_RECIPIENT_EMAIL=your-email@gmail.com
```

#### 💬 Option 3: Telegram Bot (2 phút)

Xem [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md)

```bash
# In .env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 📚 Documentation

- [CHOOSE_METHOD.md](./CHOOSE_METHOD.md) - So sánh tất cả phương thức
- [DISCORD_SETUP.md](./DISCORD_SETUP.md) - Setup Discord (30s)
- [FORMSUBMIT_SETUP.md](./FORMSUBMIT_SETUP.md) - Setup Formsubmit (1m)
- [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) - Setup Telegram (2m)
- [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Google Sheets (legacy)

## 💡 Which Method to Choose?

**Chưa biết chọn gì?** → Xem [CHOOSE_METHOD.md](./CHOOSE_METHOD.md)

**Tóm tắt nhanh:**

- 🏆 **Discord** - Nhanh nhất (30s), real-time
- 📧 **Formsubmit** - Gửi email đẹp (1 phút)
- 💬 **Telegram** - Popular ở VN (2 phút)

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Discord Webhook** - Notifications (default)
- **React Router** - Routing

## 📝 License

MIT
