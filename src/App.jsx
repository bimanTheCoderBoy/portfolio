import Home from "./pages/Home";
import Self from "./pages/Self";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router className="w-screen h-screen">
        <Navbar />
        <div className="flex flex-row mt-16">
          <div className="md:basis-[7%]"><Social /></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/self" element={<Self />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
