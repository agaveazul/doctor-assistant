import { useEffect, useState, CSSProperties } from "react";
import { useVoiceVisualizer, VoiceVisualizer } from "react-voice-visualizer";
import { Button } from "./button";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";
import ClipLoader from "react-spinners/ClipLoader";
const VITE_SERVER_API_BASE_URL = import.meta.env.VITE_SERVER_API_BASE_URL;

const AudioRecorderPlayer = ({
  recordingUploaded,
  setRecordingUploaded,
  summary,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const displayUploadIcon = () => {
    return isLoading ? (
      <ClipLoader color="white" loading={true} size={20} />
    ) : (
      <ArrowUpCircleIcon />
    );
  };
  // Initialize the recorder controls using the hook
  const recorderControls = useVoiceVisualizer({
    onStopRecording: () => console.log("stopped"),
  });

  const { recordedBlob, error, audioRef } = recorderControls;

  // Get the recorded audio blob
  useEffect(() => {
    if (!recordedBlob) return;
  }, [recordedBlob]);

  // Get the error when it occurs
  useEffect(() => {
    if (!error) return;
    console.error(error);
  }, [error]);

  // Function to handle uploading the audio
  const handleUploadAudio = async () => {
    if (!recordedBlob) {
      console.error("No recorded audio to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("audioFile", recordedBlob, "audio.webm");
      setRecordingUploaded(true);
      setIsLoading(true);
      const response = await fetch(
        VITE_SERVER_API_BASE_URL + "audio/recording",

        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Failed to upload audio.");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <>
      {!summary && (
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <VoiceVisualizer
              fullscreen
              ref={audioRef}
              controls={recorderControls}
            />
            {recordedBlob && (
              <div className="flex justify-center items-center">
                <Button color="indigo" onClick={handleUploadAudio}>
                  {displayUploadIcon()}
                  Upload Audio
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AudioRecorderPlayer;
