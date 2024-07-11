import React from 'react'
import { RingLoader } from 'react-spinners'
import Typed from 'typed.js';

export default function Loader() {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Biman Kumar Das'],
        typeSpeed: 50,
        loop:true,
        showCursor:false,
        backSpeed:50

      });
  
      return () => {
        
        typed.destroy();
      };
    }, []);
  return (
    <div className='w-screen h-screen fixed flex flex-row justify-center items-center'>
      <RingLoader
      color="#64748b"
      loading={true}
      size={90}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      <br/>
      <span ref={el} className='text-3xl text-[#414c5c] font-kanit'></span>
    </div>
  )
}
