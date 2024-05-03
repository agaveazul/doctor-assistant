import { useState } from "react";
import AudioRecorderPlayer from "../components/AudioRecorderPlayer";
import TranscriptionSummary from "../components/TranscriptionSummary";

export default function RecordingPage() {
  const [recordingUploaded, setRecordingUploaded] = useState(false);
  const [transcription, setTranscription] = useState(null);
  const [summary, setSummary] = useState("");

  return (
    <div>
      <AudioRecorderPlayer
        recordingUploaded={recordingUploaded}
        setRecordingUploaded={setRecordingUploaded}
        summary={summary}
      />
      {recordingUploaded && (
        <TranscriptionSummary
          summary={summary}
          transcription={transcription}
          setSummary={setSummary}
          setTranscription={setTranscription}
        />
      )}
    </div>
  );
}
