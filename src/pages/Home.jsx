import React from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import DragableItem from "../components/DragableItem";
import Intro from "../components/Intro";
import Avtar from "../components/Avtar/Avtar";
import AvtarTool01 from "../assets/AvtarTool01.png";
import AvtarEffect01 from "../assets/AvtarEffect01.png";
import AvtarEffect from "../assets/AvtarEffect.png";
import AvtarEffect02 from "../assets/AvtarEffect02.png";
import AvtarEffect03 from "../assets/AvtarEffect03.png";

import reactIcon from "../assets/react.png";
import mongoIcon from "../assets/mongo.png";
import sqlIcon from "../assets/sql.png";
import gitIcon from "../assets/git.png";
import nodeIcon from "../assets/node.png";
import javaIcon from "../assets/java.png";
import jsIcon from "../assets/js.png";
import dsaIcon from "../assets/dsa.png";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";
import ClipLoader from "react-spinners/ClipLoader";
export default function Home() {
  return (
    <>
      <div className="text-black text-3xl w-full  flex flex-row">
        <div className="lg:basis-[40%] max-lg:basis-[100%]">
          <Intro />
        </div>

        <div className="max-lg:hidden lg:basis-[60%] mt-14">
        
         <Avtar />
         
          <div className="absolute   w-[53%] bottom-0 top-16 select-none">
            <div className="absolute  w-full top-0 bottom-0  overflow-hidden">
              <img
                src={AvtarEffect}
                className="w-5/6 overflow-hidden absolute right-[3rem] bottom-[-15rem]  "
                alt=""
              />
            </div>
            <Draggable >
              <img
                src={reactIcon}
                className="w-16 absolute right-0 top-5  hover:drop-shadow-c-gray duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/mongodb/", "_blank")
                    .focus();
                }}
                draggable={false}
                cursor={"move"}
                alt=""
              />
            </Draggable>

            <Draggable>
              <img
                src={mongoIcon}
                className="w-20 absolute left-[20%] top-28 rotate-12 hover:drop-shadow-c-green duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/mongodb/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
            </Draggable>

      

            <Draggable>
              <img
                src={gitIcon}
                className="w-14 absolute left-[-3rem] top-[-3rem] -rotate-6 z-10 hover:drop-shadow-c-gray duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://github.com/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
             </Draggable>

             <Draggable>
              <img
                src={sqlIcon}
                className="w-20 absolute right-[14%] top-28 -rotate-6 hover:drop-shadow-c-blue duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/sql/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
            </Draggable>

            <Draggable>
              <img
                src={nodeIcon}
                className="w-40 absolute left-[-36rem] bottom-16 -rotate-12 hover:drop-shadow-c-green duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://nodejs.org/docs/latest/api/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
            </Draggable>

            <Draggable>
              <img
                src={javaIcon}
                className={`w-16 absolute right-[43%] top-[-3rem] -rotate-6 hover:drop-shadow-c-gray duration-200 cursor-pointer`}
                onDoubleClick={() => {
                  window
                    .open("https://www.w3schools.com/java/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable>

           <Draggable>
              <img
                src={jsIcon}
                className="w-12 absolute right-0 bottom-6 rotate-6 hover:drop-shadow-c-yellow duration-200 cursor-pointer" onDoubleClick={() => {
                  window
                    .open("https://bimandas.notion.site/JavaScript-f064011bb98b4283b511ed955289f118", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable>

           <Draggable >
              <img
                src={dsaIcon}
                className="w-24 absolute left-0 top-[50%] rotate-45 hover:drop-shadow-c-gray duration-200 cursor-pointer"
                onDoubleClick={() => {
                  window
                    .open("https://leetcode.com/studyplan/top-interview-150/", "_blank")
                    .focus();
                }}
                draggable={false}
                alt=""
              />
           </Draggable>
          </div>
        </div>
      </div>
    </>
  );
}
