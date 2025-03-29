import React, { useState } from "react";
import { Eye } from "lucide-react"; // Ensure lucide-react is installed

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-700 p-4 shadow-xl flex items-center justify-center gap-3 rounded-b-2xl">
        <Eye size={40} className="text-white animate-pulse" />
        <h1 className="text-4xl font-bold text-center">Deepfake Detection System</h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xl bg-gray-800 p-6 shadow-lg rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Upload an Image for Analysis</h2>
          <p className="text-gray-400 mb-6">
            Our AI will analyze the image and determine if it’s real or deepfake.
          </p>

          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="mb-4 text-white"
          />

          {/* Display Selected Image Preview */}
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="w-40 h-40 object-cover mt-4 rounded-lg shadow-md mx-auto"
            />
          )}

          {/* Upload Button */}
          <button
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all"
          >
            Analyze Image
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-r from-gray-900 to-black p-4 text-center text-gray-300 rounded-t-2xl">
        &copy; {new Date().getFullYear()} Deepfake Detection System. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
