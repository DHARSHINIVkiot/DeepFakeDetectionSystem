import { useLocation } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const image = location.state?.image || null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Deepfake Analysis Results</h2>
      {image ? (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="w-64 h-64 object-cover mb-4"
          />
          <p className="text-green-500 font-semibold">Deepfake Analysis Results</p>
        </div>
      ) : (
        <p className="text-red-500">No image provided.</p>
      )}
    </div>
  );
}

export default ResultsPage;
