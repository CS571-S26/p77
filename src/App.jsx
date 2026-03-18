import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import MoodChecker from "./components/MoodChecker";
import Issues from "./components/Issues";
import LetsTalk from "./components/LetsTalk";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/thrive-mind"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<MoodChecker />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/talk" element={<LetsTalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;