import React from 'react'
import { Tilt } from 'react-tilt'
export default function Works() {
  return (
    <>
    <div className='flex flex-col w-full  max-md:mt-10'>
    <div className='w-full  h-32 flex flex-col justify-center items-center   relative md:right-10'>
    <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
          {"<"}<span className="text-5xl font-kanit">Works</span><span className="text-yellow-500">/</span>
          {">"}
        </h2>
        <p className='text-center mt-6 text-lg text-deepg '>Here you will find some of the personal and clients projects that I created with each project <br/>containing its own case study</p>
    </div>
    <div className='w-full flex flex-col mt-16 justify-center'>
      {
        <div className='flex flex-row  p-8 mx-10 rounded-lg max-lg:flex-wrap max-lg:justify-center'>
          <div className='flex flex-row justify-center items-center '  >
          <img src="https://www.rammaheshwari.com/assets/jpeg/dopefolio.jpeg" className='w-[37rem]' alt="" />
          </div>
          <div className='pl-12 pt-8'>
          <h2 className='font-extrabold font-roboto text-3xl text-[#2e2e2e] drop-shadow-lg mb-7'>Dopefolio</h2>
          <p className='max-w-[28rem] text-[1.1rem] text-deepg'>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
          <div className='border-2 rounded-lg flex flex-row   mt-5 max-w-[28rem]'>
            <div className='px-5 self-center text-[1.1rem] text-lightg font-[700] drop-shadow-sm  min-h-16 min-w-20  flex justify-center items-center '>TOOLS</div>
            <div className='w-full flex flex-row flex-wrap max-w-[28rem] border-l-2 border-gray-400 items-center'>
              <div className='p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm'>HTML</div>
              <div className='p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm'>CSS</div>
              <div className='p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm'>REACT</div>
              <div className='p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm'>NODE</div>
              <div className='p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm'>EXPRESS</div>
             
            </div>
          </div>
          <div>Button</div>
          </div>
          
        </div>
      }
    </div>
    </div>
    </>
  )
}
