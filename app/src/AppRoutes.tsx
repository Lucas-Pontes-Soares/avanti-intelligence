import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import MakePrediction from "./pages/MakePrediction.tsx";
import Authors from "./pages/Authors.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/make-prediction" element={<MakePrediction />} />
      <Route path="/authors" element={<Authors />} />

      {/* Catch-all route for 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
