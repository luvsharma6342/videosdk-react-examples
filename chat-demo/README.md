# VideoSDK Realtime Chat Demo

A minimal React application demonstrating how to build a realtime chat system using the VideoSDK React SDK and PubSub messaging.

This example shows how developers can:
- Send realtime chat messages
- Receive realtime messages instantly
- Use VideoSDK PubSub for communication between participants

---

# Features

- Realtime messaging
- Dynamic meeting creation
- Instant message synchronization
- PubSub-based communication
- Responsive and beginner-friendly UI

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
- participants can send messages
- messages are broadcasted in realtime using VideoSDK PubSub
- all connected participants instantly receive updates

The application uses:

## `useMeeting()`

Used for:
- joining meetings
- accessing participant information

Example:

```js
const {
  join,
  localParticipant,
} = useMeeting();
```

---

## `usePubSub()`

Used for:
- publishing messages
- subscribing to realtime events
- receiving incoming chat messages

Example:

```js
const { publish } = usePubSub(
  "CHAT",
  {
    onMessageReceived: (data) => {
      console.log(data);
    },
  }
);
```

Messages are sent over the `"CHAT"` topic and automatically delivered to all connected participants.

---

# Project Structure

```txt
chat-demo/
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
cd chat-demo
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
| `usePubSub()` | Realtime messaging |
| `publish()` | Sends chat messages |

---

# Realtime Messaging Flow

1. User joins the VideoSDK meeting
2. User types a message
3. Message is published using `publish()`
4. VideoSDK PubSub broadcasts the message
5. All participants receive the message instantly

---

# Screenshot

<img width="972" height="887" alt="Screenshot 2026-05-18 074559" src="https://github.com/user-attachments/assets/efb4c5d2-9804-4799-9448-a7a668008b40" />


---

# Useful Links

- VideoSDK Documentation: https://docs.videosdk.live/
- VideoSDK Dashboard: https://app.videosdk.live/
