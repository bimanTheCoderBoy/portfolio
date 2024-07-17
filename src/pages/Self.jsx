import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight as test } from "react-syntax-highlighter/dist/esm/styles/prism";
import reactIcon from "../assets/react.png";
import mongoIcon from "../assets/mongo.png";
import sqlIcon from "../assets/sql.png";
import gitIcon from "../assets/git.png";
import nodeIcon from "../assets/node.png";
import javaIcon from "../assets/java.png";
import jsIcon from "../assets/js.png";
import dsaIcon from "../assets/dsa.png";


export default function Self() {
  const codeString = `class BimanDas{

    // I am constantly innovating and integrating new technologies to deliver top-notch solutions.
    // I thrive on adapting to new challenges, using them as stepping stones to expand my expertise and achieve success.
    // I value teamwork and collaboration, and I'm eager to support my colleagues in achieving our goals & celebrating our collective success.

    constructor(){
        this.name = 'Biman Das';
        this.dob = '16-05-2003';
        this.contactNumber = '+91 7076316977';
        this.email = 'daskumarbiman2020@gmail.com'
    }

    education(){
        return [
            { '2019' : 'Secondary - Churaman P.C High School , Grade-[82.90 %]' },
            { '2021' : 'Higher Secondary(Science) - Raiganj Sri Sri Ramkrishna vidya bhaban , Grade-[76 %]' },
            { '2021-2025' : 'B.Tech - Academy Of Technology(Computer Science & Engineering) , Grade-[8.60]' }
        ]
    }

    achievements(){
        return [
            'Selected for College level E-commerce Business Project',
            'Solved 500+ coding problems in different coding platforms',
            'Best UI Award in Hackathon'
        ]
    }

    languagesKnown(){
        return [
            'English' , 'Hindi' , 'Bengali'
        ]
    }

}
  `;
  const ADDED = [1, 10, 18, 30];
  const REMOVED = [6, 14, 23, 33];


 
  return (
    // <div>
    <>
      <div className="flex flex-col w-full max-md:mt-5 mb-14 ">
        <div className="w-full  flex flex-col justify-center items-center  relative md:right-10 ">
          <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
            {"<"}
            <span className="text-5xl font-kanit">Self</span>
            <span className="text-yellow-500">/</span>
            {">"}
          </h2>
        </div>

        {/* //extra added absolute */}
        <div className="w-full h-full max-lg:hidden">
          <img src={mongoIcon} alt=""  className="w-[18%] absolute top-[7%] left-[70%]"/>
          <img src={reactIcon} alt=""  className="w-[18%] absolute bottom-[-60%] left-[72%]"/>
          <img src={nodeIcon} alt=""  className="w-[18%] absolute top-[100%] left-[30%]"/>
        </div >
        
        <div className=" bg-[rgba(0,0,0,.05)] lg:-translate-x-4 rounded-lg backdrop-blur-[8px] mx-5 mt-2 mb-10 ">
        <SyntaxHighlighter
          language="javascript"
          style={test}
          customStyle={{
            backgroundColor: "rgba(0,0,0,0)",
            // position:"absolute"
            // marginLeft: "-1.2rem",
            fontSize: "1.15rem",
            fontWeight:"500",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)'
            // width:"100vw"
          }}
          showLineNumbers={true}
          wrapLongLines={true}
          wrapLines={true}
          codeTagProps={{
            backgroundColor: "black",
            width: "100px",
            hight: "100px",
          }}
          lineNumberStyle={{
            // backgroundColor:"red",
            borderRight: "3px solid #6a6b6dca",
            marginRight: "1rem",
            paddingRight: "1rem",
          }}
          lineProps={(lineNumber) => {
            let style = {
              display: "block",
              fontFamily: "JetBrains Mono, monospace",
              
            };
            if (ADDED.includes(lineNumber)) {
              // style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              //  style.fontFamily='Roboto, sans-serif'
            } else if (REMOVED.includes(lineNumber)) {
              // style.backgroundColor = "rgba(0, 0, 0, 0.15)";
            }
            return { style };
          }}>
          {codeString}
        </SyntaxHighlighter>
        </div>
       
      </div>
    </>
  );
}
