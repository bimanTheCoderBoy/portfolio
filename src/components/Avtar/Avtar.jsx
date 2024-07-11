import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import React from "react";
// import  RingLoader  from "react-spinners/RingLoader";


function Avtar() {
  return (
    // <div className="h-32 w-32 ">
    <>
     
     {/* <ClipLoader/> */}
      <Canvas camera={{ position: [0, 0, 6], fov: 10 }}
     className=""
  
      
      >
      {/* <Canvas shadows camera={{ position: [0, 0, 7], fov: 10 }}> */}
        {/* <color attach="background" args={["#ececec"]} /> */}
        
        <Experience />
      </Canvas>
        
     
    </>

    //  </div>
  );
}

export default Avtar;
