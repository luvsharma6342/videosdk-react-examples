import { useEffect, useRef, useState } from "react";

import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";

import { FaDesktop } from "react-icons/fa";

const token = import.meta.env.VITE_VIDEOSDK_TOKEN;

// Create meeting API
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

function ScreenShareView({ participantId }) {
  const { screenShareStream, screenShareOn } = useParticipant(participantId);

  const videoRef = useRef(null);

  useEffect(() => {
    if (screenShareOn && screenShareStream && videoRef.current) {
      const mediaStream = new MediaStream();

      mediaStream.addTrack(screenShareStream.track);

      videoRef.current.srcObject = mediaStream;

      videoRef.current.play();
    }
  }, [screenShareStream]);

  if (!screenShareOn) {
    return <div className="text-zinc-400">No screen being shared</div>;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-full rounded-xl border border-zinc-700 object-contain bg-black"
    />
  );
}

function MeetingView() {
  const { join, participants, enableScreenShare } = useMeeting();

  useEffect(() => {
    join();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-8">Screen Share Demo</h1>

      <button
        onClick={() => enableScreenShare()}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl mb-8"
      >
        <FaDesktop />
        Share Screen
      </button>

      <div className="w-full max-w-5xl">
        {[...participants.keys()].map((participantId) => (
          <ScreenShareView key={participantId} participantId={participantId} />
        ))}
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
        name: "Luv",
      }}
      token={token}
    >
      <MeetingView />
    </MeetingProvider>
  );
}
