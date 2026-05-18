# VideoSDK Screen Share Demo

A minimal React application demonstrating how to implement realtime screen sharing using the VideoSDK React SDK.

This example shows how developers can:
- Start screen sharing
- Render shared screen streams in realtime
- Use VideoSDK hooks for media stream handling

---

# Features

- Realtime screen sharing
- Dynamic meeting creation
- Shared screen rendering
- Responsive UI
- Minimal and beginner-friendly implementation

---

# Tech Stack

- React
- Vite
- TailwindCSS
- VideoSDK React SDK

---

# How It Works

The application first creates a VideoSDK meeting dynamically using the REST API.

After joining the meeting:
- users can start screen sharing
- VideoSDK captures the shared screen stream
- the shared media stream is rendered inside a `<video>` element

The application uses:

## `useMeeting()`

Used for:
- joining meetings
- enabling screen sharing
- accessing meeting-level actions

Example:

```js
const {
  join,
  enableScreenShare,
} = useMeeting();
```

---

## `useParticipant()`

Used for:
- accessing participant media streams
- detecting whether screen sharing is active
- rendering shared screen video

Example:

```js
const {
  screenShareStream,
  screenShareOn,
} = useParticipant(participantId);
```

---

# Project Structure

```txt
screen-share-demo/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── README.md
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/luvsharma6342/videosdk-react-examples.git
```

---

## 2. Navigate to the project

```bash
cd screen-share-demo
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Configure environment variables

Create a `.env` file:

```env
VITE_VIDEOSDK_TOKEN=your_videosdk_token
```

---

## 5. Run the application

```bash
npm run dev
```

Application will run on:

```txt
http://localhost:5173
```

---

# VideoSDK APIs Used

| API / Hook | Purpose |
|---|---|
| `MeetingProvider` | Provides meeting context |
| `useMeeting()` | Meeting actions |
| `useParticipant()` | Access participant streams |
| `enableScreenShare()` | Starts screen sharing |

---

# Future Improvements

- Multi-user screen sharing
- Screen share recording
- Screen share controls
- Better participant layouts

---

# Screenshot

<img width="882" height="421" alt="Screenshot 2026-05-18 074326" src="https://github.com/user-attachments/assets/abc3b10e-ab6c-41bb-abce-d0c440e5ecfc" />
<img width="958" height="848" alt="Screenshot 2026-05-18 074357" src="https://github.com/user-attachments/assets/e75efa35-c457-488f-9344-eb5fd916c118" />
<img width="1552" height="893" alt="Screenshot 2026-05-18 074441" src="https://github.com/user-attachments/assets/c1a1822b-648f-4518-aa42-4d6959c11456" />

---

# Useful Links

- VideoSDK Documentation: https://docs.videosdk.live/
- VideoSDK Dashboard: https://app.videosdk.live/
