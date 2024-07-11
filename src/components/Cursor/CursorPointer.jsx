import React, { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../../Context/CursorContext'
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
    const pointerRef=useRef()

    const {hoveredValue}=useContext(CursorContext);


  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      pointerRef.current.classList.remove("hidden");
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave',()=>{
        pointerRef.current.classList.add("hidden");
    })
    document.addEventListener('mouseenter',(event)=>{


        pointerRef.current.classList.remove("hidden");
        setPosition({ x: event.clientX, y: event.clientY });

        
        
    })
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed flex flex-row justify-center items-center pointer-events-none z-50 w-${hoveredValue} h-${hoveredValue}  min-h-8 rounded-full border-slate-500 border-4 bg-transparent transform -translate-x-1/2 -translate-y-1/2 duration-[.0s] overflow-hidden`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }
    }
    ref={pointerRef}
    >
        <div className='w-1 h-1 bg-slate-500 rounded-full '></div>
        <div className="absolute w-[200%] h-[200%] transform  bg-transparent bg-local"></div>
    </div>
  );
};

export default CustomCursor;
