import React from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CursorEffect from "../components/Cursor/CursorEffect";

const ImgContainer = styled.div`
   perspective: 800px;
   @media(min-width: 1200px){
   width: 37rem;
   }
   
  //  height: 25rem;
  //  perspective-origin: left;
`;

const ImgLeft=styled.img`
@media(min-width: 1000px){
margin-right:1rem;
  transform:rotateX(4deg) rotateY(29deg) rotateZ(-2deg) translateY(2rem);
  &:hover{
 transform:rotateX(4deg) rotateY(-30deg) rotateZ(2deg) translateX(-.5rem) translateY(-1.5rem);
  }
}
`

const ImgRight=styled.img`
@media(min-width: 1000px){
margin-right:1rem;
  transform:rotateX(4deg) rotateY(-29deg) rotateZ(2deg) translateY(-2rem);
  &:hover{
 transform:rotateX(4deg) rotateY(30deg) rotateZ(-2deg) translateX(-2rem) translateY(1.5rem);
  }
}
`

// const demo=[1,1,1,4,5];


export default function Works() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
      <div className="flex flex-col w-full  max-md:mt-10 max-md:mb-10">
        <div className="w-full  h-32 flex flex-col justify-center items-center   relative md:right-10">
          <CursorEffect>
          <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
            {"<"} 
            <span className="text-5xl font-kanit">Works</span>
            <span className="text-yellow-500">/</span>
            {">"}
          </h2>
          </CursorEffect>
          <p className="text-center mt-6 text-lg text-deepg">
          Here you will find various personal and client projects,
          <br /> &nbsp; &nbsp;
          each with its own detailed case study.
          </p>
        </div>
        <div className="w-full flex flex-col mt-16 justify-center ">
          {data.map((project,index)=>{
            if((index%2==1) && (window.innerWidth >= 1000)){
              return(
                <div className="flex flex-row  p-8 mx-10 rounded-lg max-lg:flex-wrap max-lg:justify-center justify-center md:pr-[5rem] lg:mb-10">
                
                <div className="md:pl-12 pt-8 ">
                  <h2 className="font-extrabold font-roboto text-3xl text-[#2e2e2e] drop-shadow-lg mb-7">
                    {project.title}
                  </h2>
                  <p className="max-w-[28rem] text-[1.1rem] text-deepg">
                    {project.description}
                  </p>
                  <div className="border-2 rounded-lg flex flex-row   mt-5 max-w-[28rem] shadow-inner shadow-slate-500">
                    <div className="px-5 self-center text-[1.1rem] text-lightg font-[700] drop-shadow-sm  min-h-16 min-w-20  flex justify-center items-center ">
                      TOOLS
                    </div>

                    <div className="w-full flex flex-row flex-wrap max-w-[28rem] border-l-2 border-gray-400 items-center">
                      {project.tools.map((tool, i) => {
                          return (
                            <span className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                              <p className="text-[70%]">{"</>"}</p>
                              {tool}
                            </span>
                          );
                        })}
                    </div>

                  </div>
                  <Link to={"#"}>
                    <div className="w-44 h-14 hover:-translate-y-2 hover:shadow-c-button bg-[#2e2e2e] text-zinc-200 flex justify-center items-center mt-6 rounded-md  shadow-lg shadow-slate-400 text-xl font-[600] font-roboto tracking-wide duration-200">
                      {" "}
                      <span className="drop-shadow-lg ">Take a look &nbsp;{'→'}</span>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center lg:translate-x-28">
                  <ImgContainer>
                    <ImgRight
                      src={project.pic}
                      className="w-[33.5rem] lg:hover:w-[40rem] lg:shadow-c-img-card-gray lg:hover:shadow-c-img-card-gray-hover max-lg:shadow-c-img-card rounded-lg transition-all duration-[800ms] "
                      alt="project pic"
                    />
                  
                 </ImgContainer>
                </div>
              </div>
              )
            }
            else{
              return(
                <div className="flex flex-row  p-8 md:mx-10 rounded-lg max-lg:flex-wrap max-lg:justify-center justify-center md:pr-[5rem] lg:mb-10">
                <div className="flex flex-row justify-center items-center ">
                  <ImgContainer>
                    <ImgLeft
                      src={project.pic}
                      className="w-[33.5rem] lg:hover:w-[40rem] lg:shadow-c-img-card-gray lg:hover:shadow-c-img-card-gray-hover max-lg:shadow-c-img-card rounded-lg transition-all duration-[800ms] "
                      alt="project pic"
                    />
                  
                 </ImgContainer>
                </div>
                <div className="md:pl-12 pt-8 ">
                  <h2 className="font-extrabold font-roboto text-3xl text-[#2e2e2e] drop-shadow-lg mb-7">
                    {project.title}
                  </h2>
                  <p className="max-w-[28rem] text-[1.1rem] text-deepg">
                    {project.description}
                  </p>
                  <div className="border-2 rounded-lg flex flex-row   mt-5 max-w-[28rem] shadow-inner shadow-slate-500">
                    <div className="px-5 self-center text-[1.1rem] text-lightg font-[700] drop-shadow-sm  min-h-16 min-w-20  flex justify-center items-center ">
                      TOOLS
                    </div>

                    <div className="w-full flex flex-row flex-wrap max-w-[28rem] border-l-2 border-gray-400 items-center">
                      {project.tools.map((tool, i) => {
                          return (
                            <span className="p-1  rounded-sm h-7 shadow-md font-lato text-center  bg-zinc-200 font-[600] m-2 text-lightg text-sm">
                              <p className="text-[70%]">{"</>"}</p>
                              {tool}
                            </span>
                          );
                        })}
                    </div>

                  </div>
                  <Link to={"#"}>
                    <div className="w-44 h-14 hover:-translate-y-2 hover:shadow-c-button bg-[#2e2e2e] text-zinc-200 flex justify-center items-center mt-6 rounded-md  shadow-lg shadow-slate-400 text-xl font-[600] font-roboto tracking-wide duration-200">
                      {" "}
                      <span className="drop-shadow-lg ">Take a look &nbsp;{'→'}</span>
                    </div>
                  </Link>
                </div>
              </div>
              )
            }
          })
            
          }
        </div>
      </div>
    </>
  );
}
