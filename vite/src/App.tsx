import { Routes, Route, Link } from "react-router-dom";
import { HealthCheck } from "./pages/HealthCheck";
import { Home } from "./pages/Home";
import { Status } from "./pages/Status";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/health" className="text-gray-300 hover:text-white transition-colors">
            Health
          </Link>
          <Link to="/status" className="text-gray-300 hover:text-white transition-colors">
            Status
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<HealthCheck />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
