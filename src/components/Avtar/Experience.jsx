import { OrbitControls } from "@react-three/drei";
import { AvtarModel } from "./AvtarModel";
import React, { useRef, useEffect, useState } from 'react';
export const Experience = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={2}/>
      <pointLight position={[10, 10, 10]} />
      <group position-y={-1.37}>
      <AvtarModel mouse={mouse}/>
      </group>
     
    </>
  );
};