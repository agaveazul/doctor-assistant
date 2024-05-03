import { useState } from "react";
import AudioRecorderPlayer from "../components/AudioRecorderPlayer";
import TranscriptionSummary from "../components/TranscriptionSummary";

export default function RecordingPage() {
  interface SummaryType {
    raw_summary: string;
    parsed_summary: any;
  }

  const [recordingUploaded, setRecordingUploaded] = useState<boolean>(false);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [summary, setSummary] = useState<SummaryType | null>(null);

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
