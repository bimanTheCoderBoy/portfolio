import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as test } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Self() {
  const codeString = `class BimanDas{

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

    skills(){
        return [
            'C' , 'C++' , 'Core Java' , 'HTML' , 'CSS' , 'JavaScript' ,
            'Tailwind CSS' , 'Adv JavaScript' , 'Bootstrap' , 'React.js' ,
            'Node.js' , 'Express.js' , 'Next.js' , 'SQL' , 'MongoDb' , 'Mongoose' ,
            'DSA' , 'JDBC' , 'Shell Script' , 'Git' , 'GitHub' , 'GitLab' , 'Postman' ,
            'Firebase' , 'Cloudinary' , 'Developing rest APIs' , 'OAuth 2.0' , 'JWT' ,
            'GraphQL' , 'Docker' , 'GitHub Actions' , 'Digital Ocean Functions' ,
            'Servlet' , 'Jsp' , 'Spring' , 'Spring Boot' , 'Flutter'
        ]
    }

    achievements(){
        return [
            'Selected for College level E-commerce Business Project' ,
            'Solved 500+ coding problems in different coding platforms' ,
            'Best UI Award in Hackathon'
        ]
    }

}
  `;
  const ADDED = [1, 10,18,30];
  const REMOVED = [6,14,23,33];
  return (
    // <div>
    <>
    <div className="flex flex-col w-full max-md:mt-5">
      <div className="w-full  flex flex-col justify-center items-center  relative md:right-10 ">
        <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
          {"<"}
          <span className="text-5xl font-kanit">Self</span>
          <span className="text-yellow-500">/</span>
          {">"}
        </h2>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={test}
        customStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          // marginLeft: "-1.2rem",
          fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
    color: '#333',
    padding: '20px',
          // width:"100vw"
        }}
        showLineNumbers={true}
        wrapLongLines={true}
        wrapLines={true}
        codeTagProps={ { backgroundColor: 'black',width:"100px", hight:"100px" }}
        lineNumberStyle={{
          // backgroundColor:"red",
          borderRight:"3px solid #6a6b6dca",
          marginRight:"1rem",
          paddingRight:"1rem"
        }}
        lineProps={lineNumber => {
          let style = { display: 'block' };
          if (ADDED.includes(lineNumber)) {
            style.backgroundColor = '#dbffdb';
          } else if (REMOVED.includes(lineNumber)) {
            style.backgroundColor = '#ffecec';
          }
          return { style};
        }}
        >
        {codeString}
      </SyntaxHighlighter>
      </div>
      </>
  );
}