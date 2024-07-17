import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CursorEffect from '../Cursor/CursorEffect';
export default function Social() {
  return (
    <div className='fixed z-50 md:left-0 md:top-0 bottom-0 md:w-8 md:ml-10 md:h-full text-[#57585A] flex md:flex-col max-md:flex-row max-md:px-20 max-md:py-1 max-md:w-full items-center md:justify-center max-md:justify-around max-md:border-t-4 max-md:bg-[#F1F3F5]'>
        
      <CursorEffect><Link to={"https://www.linkedin.com/in/biman707/"} ><BsLinkedin className='scale-150 my-3 hover:scale-[1.8] duration-150'/></Link></CursorEffect>
      <CursorEffect><Link to={"https://github.com/bimanTheCoderBoy"}><BsGithub className='scale-150 my-3 hover:scale-[2] duration-150'/></Link></CursorEffect>
      <CursorEffect><Link to={"https://x.com/BimanDas125028"}><FaTwitter className='scale-150 my-3 hover:scale-[2] duration-150'/></Link></CursorEffect>


    </div>
  )
}
