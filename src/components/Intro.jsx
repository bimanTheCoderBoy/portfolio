import React from "react";
import { Link } from "react-router-dom";
import intro from "../assets/intro.png"
import CursorEffect from "../components/Cursor/CursorEffect"

export default function Intro() {
  return (
    <div className="">
        <div className="flex flex-row">
      <div className=" mt-10 mb-4 flex flex-row justify-end basis-[38%]">
        <img src={intro} alt="" className="w-32" />
      </div>
      </div>
      <div className="flex flex-row">
      <CursorEffect>
        <div className="basis-[56%] flex flex-row justify-end font-kanit font-[700] text-6xl text-[#57585A] leading-[2.8rem] ">
          Biman
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das
        </div>
        </CursorEffect>
      </div>

      <div className="flex flex-row">
      <CursorEffect>
        <div className="basis-10/12 flex flex-row font-kanit font-[600]  text-lg justify-center text-[#6a6b6dca] leading-[2.5rem] ">
          Software Developer
        </div>
        </CursorEffect>
      </div>

      <div className="flex flex-row mx-10 md:px-5 mt-6">
        <div className=" flex flex-row  justify-center text-[#6a6b6dca] text-sm text-start leading-[1.17rem]">
          👋 Hi, I'm Biman Kumar Das, a third-year Computer Science Engineering
          student with a strong background in software development and data
          structures. As an enthusiastic coder and team leader, I have solved
          over 500 DSA questions and worked extensively with technologies like
          React, Node.js, Spring Boot, and Docker. I'm eager to leverage my
          skills in a Software Engineering position to contribute to innovative
          projects and deliver high-quality solutions.
        </div>
      </div>

      <div className="flex flex-row justify-center mt-10">
        <div className="w-28 h-28 rounded-full bg-yellow-200 flex flex-row justify-center items-center">
          <Link to={"/"}>
            {" "}
            <div className=" w-20 h-20 rounded-full bg-yellow-500 flex flex-row justify-center items-center">
              <div className="basis-10/12 flex flex-row font-playfr font-[400]  text-lg justify-center text-white leading-[1.2rem] ">
                Let's
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;talk
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
