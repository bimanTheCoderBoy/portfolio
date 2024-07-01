import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

function Avtar() {
  return (
    // <div className="h-32 w-32 ">
    <>
     
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
