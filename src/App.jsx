import Home from "./pages/Home";
import Self from "./pages/Self";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Navbar from "./components/Navbar/Navbar";
import Social from "./components/Social/Social";
import DraggableImage from "./components/DragableItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomCursor from "./components/Cursor/CursorPointer";
import { useState } from "react";
import Loader from "./components/Loader";
import Test from "./components/Test";

function App() {
  const [mainLoading, setMainLoading] = useState(false);
  setInterval(()=>{
    
    window.addEventListener("load",()=>setMainLoading(false))
    setTimeout(()=>{
      setMainLoading(false)
    },1000)
    
  },4000)

  return (
    <>
      <CustomCursor />
      {mainLoading ? (
        <Loader />
      ) : (
        <Router className="w-screen h-screen">
          <Navbar />
          <div className="flex flex-row mt-16">
            <div className="md:basis-[7%]">
              <Social />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/self" element={<Self />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/test" element={<Test/>} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
