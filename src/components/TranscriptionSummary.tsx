import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
const VITE_SOCKET_API_KEY = import.meta.env.VITE_SOCKET_API_KEY;
const VITE_SOCKET_BASE_URL = import.meta.env.VITE_SOCKET_BASE_URL;

interface SummaryType {
  raw_summary: string;
  parsed_summary: any;
}

interface TranscriptionSummaryProps {
  transcription: string | null;
  setTranscription: React.Dispatch<React.SetStateAction<string | null>>;
  summary: SummaryType | null;
  setSummary: React.Dispatch<React.SetStateAction<SummaryType | null>>;
}

function TranscriptionSummary({
  transcription,
  setTranscription,
  summary,
  setSummary,
}: TranscriptionSummaryProps) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket(
      VITE_SOCKET_BASE_URL +
        "?api_key=" +
        VITE_SOCKET_API_KEY +
        "&notify_self=1"
    );
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        switch (messageData.type) {
          case "transcription_finished":
            setTranscription(messageData.transcription);
            break;
          case "summary_finished":
            console.log(messageData);
            const { raw_summary, parsed_summary } = messageData;
            setSummary({ raw_summary, parsed_summary });
            break;
          default:
            console.log("Unhandled message type:", messageData.type);
        }
      };

      socket.onerror = (event) => {
        console.error("WebSocket error:", event);
      };
    }
  }, [socket]);

  return (
    <div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Purpose of appointment
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {summary ? (
            summary.parsed_summary.why_seeking
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          History of symptoms
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {summary ? (
            summary.parsed_summary.symptoms_history.map((symptom: string) => (
              <li key={symptom}>{symptom}</li>
            ))
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Other information
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {summary ? (
            summary.parsed_summary.other_info.map((info: string) => (
              <li key={info}>{info}</li>
            ))
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Next Steps
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {summary ? (
            summary.parsed_summary.next_steps.map((step: string) => (
              <li key={step}>{step}</li>
            ))
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Full Summary
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {summary ? (
            summary.raw_summary
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
      <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Transcription
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {transcription ? (
            transcription
          ) : (
            <Skeleton className="h-10 w-full" times={2} />
          )}
        </dd>
      </div>
    </div>
  );
}

export default TranscriptionSummary;
