import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro'
import Avtar from '../components/Avtar/Avtar'
import AvtarTool01 from "../assets/AvtarTool01.png"
import AvtarEffect01 from "../assets/AvtarEffect01.png"
import AvtarEffect from "../assets/AvtarEffect.png"
import AvtarEffect02 from "../assets/AvtarEffect02.png"
import AvtarEffect03 from "../assets/AvtarEffect03.png"



import reactIcon from "../assets/react.png"
import mongoIcon from "../assets/mongo.png"
import sqlIcon from "../assets/sql.png"
import gitIcon from "../assets/git.png"
import nodeIcon from "../assets/node.png"
import javaIcon from "../assets/java.png"
import jsIcon from "../assets/js.png"
import dsaIcon from "../assets/dsa.png"
export default function Home() {

  
  return (
   <div className='text-black text-3xl w-full  flex flex-row'>
    <div className='lg:basis-[40%] max-lg:basis-[100%]'><Intro/></div>

    
    <div className='max-lg:hidden lg:basis-[60%] mt-14'>
      <Avtar/>
      <div className='absolute   w-[53%] bottom-0 top-16 '>

      <div className='absolute  w-full top-0 bottom-0  overflow-hidden'>
      {/* <img src={AvtarEffect01} className="w-5/6 absolute right-[3rem] bottom-[-13rem]  " alt="" /> */}
      <img src={AvtarEffect} className="w-5/6 overflow-hidden absolute right-[3rem] bottom-[-15rem]  " alt="" />
      {/* <img src={AvtarEffect02} className="w-5/6 absolute right-[3rem] left-0 bottom-[-22rem]  " alt="" /> */}
      {/* <img src={AvtarEffect03} className="w-5/6 absolute right-[3rem] bottom-[-15rem]  " alt="" /> */}
      </div>


      {/* icons */}
     
      <Link to={"https://react.dev/" } target="_blank" rel="noopener noreferrer"> <img src={reactIcon} className="w-14 absolute right-0 top-5 hover:drop-shadow-c-gray" alt="" /></Link>

      <Link to={"https://www.w3schools.com/mongodb/"} target="_blank" rel="noopener noreferrer">
      <img src={mongoIcon} className="w-20 absolute left-[20%] top-28 rotate-12 hover:drop-shadow-c-green" alt="" /></Link>


      <Link to={"https://github.com/"} target="_blank" rel="noopener noreferrer">
      <img src={gitIcon} className="w-14 absolute left-[-3rem] top-[-3rem] -rotate-6 z-10 hover:drop-shadow-c-gray" alt="" /></Link>



      <Link to={"https://www.w3schools.com/sql/"} target="_blank" rel="noopener noreferrer"><img src={sqlIcon} className="w-20 absolute right-[14%] top-28 -rotate-6 hover:drop-shadow-c-blue" alt="" /></Link>

      <Link to={"https://nodejs.org/docs/latest/api/"} target="_blank" rel="noopener noreferrer">
      <img src={nodeIcon} className="w-40 absolute left-[-36rem] bottom-16 -rotate-12 hover:drop-shadow-c-green" alt="" /></Link>


      <Link to={"https://www.w3schools.com/java/"} target="_blank" rel="noopener noreferrer">
      <img src={javaIcon} className={`w-16 absolute right-[43%] top-[-3rem] -rotate-6 hover:drop-shadow-c-gray`} alt="" /></Link>


      <Link to={"https://bimandas.notion.site/JavaScript-f064011bb98b4283b511ed955289f118"} target="_blank" rel="noopener noreferrer">
      <img src={jsIcon} className="w-12 absolute right-0 bottom-6 rotate-6 hover:drop-shadow-c-yellow" alt="" /></Link>


      <Link to={"https://leetcode.com/studyplan/top-interview-150/"} target="_blank" rel="noopener noreferrer">
      <img src={dsaIcon} className="w-24 absolute left-0 top-[50%] rotate-45 hover:drop-shadow-c-gray" alt="" /></Link>
      {/* <img src={reactIcon} className="w-20 absolute right-0 top-5  " alt="" />
      <img src={reactIcon} className="w-20 absolute right-0 top-5  " alt="" /> */}

      </div>
      </div>

   </div>
  )
}
