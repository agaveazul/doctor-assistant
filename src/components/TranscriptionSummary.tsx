import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
const VITE_SOCKET_API_KEY = import.meta.env.VITE_SOCKET_API_KEY;
const VITE_SOCKET_BASE_URL = import.meta.env.VITE_SOCKET_BASE_URL;

function TranscriptionSummary({
  transcription,
  setTranscription,
  summary,
  setSummary,
}) {
  const [socket, setSocket] = useState(null);

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

  const displayTranscription = () => {
    return (
      <div className=" border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Transcription
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
          {transcription}
        </dd>
      </div>
    );
  };

  const displaySummary = () => {
    return (
      <>
        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Purpose of appointment
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            {summary.why_seeking}
          </dd>
        </div>
        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            History of symptoms
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            {summary.symptoms_history.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </dd>
        </div>
        <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Other information
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            {summary.other_info.map((info) => (
              <li key={info}>{info}</li>
            ))}
          </dd>
        </div>
      </>
    );
  };

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
            summary.parsed_summary.symptoms_history.map((symptom) => (
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
            summary.parsed_summary.other_info.map((info) => (
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
            summary.parsed_summary.next_steps.map((step) => (
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
