# VideoSDK React Examples

A collection of standalone React examples demonstrating different features of the VideoSDK React SDK.

These examples are designed to help developers quickly understand and integrate realtime communication features into their applications using VideoSDK.

---

# Examples Included

## 1. Screen Share Demo

A minimal React application demonstrating how to:

- Create and join VideoSDK meetings
- Start screen sharing
- Render shared screen streams in realtime
- Use `useMeeting()` and `useParticipant()` hooks

### Features

- One-click screen sharing
- Realtime screen stream rendering
- Minimal and beginner-friendly implementation
- Responsive UI

---

## 2. Realtime Chat Demo

A standalone React chat application demonstrating how to:

- Use VideoSDK PubSub
- Send realtime messages
- Receive realtime messages
- Synchronize chat between participants

### Features

- Realtime chat
- PubSub integration
- Instant message broadcasting
- Minimal and easy-to-understand code structure

---

# Tech Stack

- React
- Vite
- TailwindCSS
- VideoSDK React SDK

---

# Project Structure

```txt
videosdk-react-examples/
│
├── screen-share-demo/
│
├── chat-demo/
│
└── README.md
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/luvsharma6342/videosdk-react-examples.git
```

---

## 2. Navigate into any example

Example:

```bash
cd screen-share-demo
```

or

```bash
cd chat-demo
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file in the root directory.

Add your VideoSDK token:

```env
VITE_VIDEOSDK_TOKEN=your_videosdk_token
```

You can generate your token from the VideoSDK Dashboard.

---

## 5. Start the development server

```bash
npm run dev
```

Application will start on:

```txt
http://localhost:5173
```

---

# VideoSDK Features Demonstrated

- Meeting Creation
- Meeting Joining
- Screen Sharing
- PubSub Messaging
- Realtime Communication
- Media Stream Rendering

---

# Why These Examples?

These examples are intentionally designed to be:

- Small and focused
- Easy to understand
- Beginner-friendly
- Reusable in real applications
- Helpful for developers learning VideoSDK

---

# Future Improvements

- Video Calling Example
- Active Speaker Detection
- Recording Example
- Livestream Example
- Authentication Flow
- Mobile Responsive Improvements

---

# Screenshots

## Screen Share Demo

<img width="1607" height="553" alt="image" src="https://github.com/user-attachments/assets/4ea3ee73-6733-49d1-8e4f-8e5d417b8cef" />
<img width="958" height="848" alt="image" src="https://github.com/user-attachments/assets/4be102ba-5b62-44b3-add7-abee5048d176" />
<img width="1552" height="893" alt="image" src="https://github.com/user-attachments/assets/4ec651cc-54a3-4765-be74-7847ab57bc6a" />

---

## Chat Demo

<img width="972" height="887" alt="image" src="https://github.com/user-attachments/assets/064d8670-46bb-45aa-b5bc-b88a1ffa5e07" />

---

# Useful Links

- VideoSDK Documentation: https://docs.videosdk.live/
- VideoSDK Dashboard: https://app.videosdk.live/

---
