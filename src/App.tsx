import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageCapture from "./pages/ImageCapture";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<ImageCapture />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
