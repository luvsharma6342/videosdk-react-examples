import { useEffect, useState } from "react";

import {
  MeetingProvider,
  useMeeting,
  usePubSub,
} from "@videosdk.live/react-sdk";

const token = import.meta.env.VITE_VIDEOSDK_TOKEN;

// Create meeting
async function createMeeting() {
  const response = await fetch("https://api.videosdk.live/v2/rooms", {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data.roomId;
}

function ChatView() {
  const { join, localParticipant } = useMeeting();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    join();
  }, []);

  const { publish } = usePubSub("CHAT", {
    onMessageReceived: (data) => {
      setMessages((prev) => [...prev, data]);
    },
  });

  const sendMessage = () => {
    if (!message.trim()) return;

    publish(message);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <h1 className="text-3xl font-bold">Realtime Chat Demo</h1>

          <p className="text-zinc-400 mt-1">
            Connected as {localParticipant?.displayName}
          </p>
        </div>

        {/* Messages */}
        <div className="h-[70vh] overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className="bg-zinc-800 rounded-xl p-3">
              <p className="text-sm text-zinc-400 mb-1">{msg.senderName}</p>

              <p>{msg.message}</p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-800 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-zinc-800 rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [meetingId, setMeetingId] = useState(null);

  useEffect(() => {
    createMeeting().then((id) => setMeetingId(id));
  }, []);

  if (!meetingId) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Creating Meeting...
      </div>
    );
  }

  return (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: false,
        webcamEnabled: false,
        name: "User-" + Math.floor(Math.random() * 1000),
      }}
      token={token}
    >
      <ChatView />
    </MeetingProvider>
  );
}
