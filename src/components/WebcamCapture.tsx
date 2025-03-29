import { useRef, useState } from "react";
import Webcam from "react-webcam";

function WebcamCapture({ onCapture }: { onCapture: (imageSrc: string) => void }) {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const capture = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      setImageSrc(screenshot);
      onCapture(screenshot);
    }
  };

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Capture Photo
      </button>
      {imageSrc && <img src={imageSrc} alt="Captured" className="mt-2 w-64 h-64" />}
    </div>
  );
}

export default WebcamCapture;
