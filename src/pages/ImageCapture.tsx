import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ImageCapture() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleProceed = () => {
    if (selectedImage) {
      navigate("/results", { state: { image: selectedImage } });
    } else {
      alert("Please upload an image first.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload or Capture an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div className="mt-2">
          <p>Selected Image: {selectedImage.name}</p>
        </div>
      )}
      <button
        onClick={handleProceed}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Proceed
      </button>
    </div>
  );
}

export default ImageCapture;
