import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Deepfake Detector</h1>
      <nav>
        <Link to="/" className="text-white px-2">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
