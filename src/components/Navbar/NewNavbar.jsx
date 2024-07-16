import React, { useRef, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "./../../assets/folio.png";
import { Link } from "react-router-dom";


import CursorEffect from "../Cursor/CursorEffect";
export default function Navbar() {
  const menuRef = useRef();
  const navRef = useRef();
  const [menuState, setMenuState] = useState(true);



  const menuHandler = (e) => {
    console.log(e.target);
    navRef.current.classList.toggle("flex-col");
    menuRef.current.classList.toggle("max-md:hidden");
    menuRef.current.classList.toggle("justify-around");
    // menuRef.current.classList.toggle("items-center");
    menuRef.current.classList.toggle("border-b-4");
    menuRef.current.classList.toggle("py-4");
  

    setMenuState((prev) => !prev);
  };

  const menuItemClickHandler = (e) => {
    let items = document.getElementsByClassName("menuu");
    // console.log(items);
    for (let i = 0; i < items.length; i++) {
      // ele.classList.remove("font-bold");
      items[i].classList.remove("scale-110");
      items[i].classList.remove("font-bold");
      console.log(items[i]);
    }

    // ele.classList.remove("scale-110");

    if (e) {
      e.target.parentElement.classList.add("scale-110");
      e.target.parentElement.classList.add("font-bold");
    }
    // e.target.classList.add("scale-110");
    // e.target.classList.add("font-bold");
  };
  return (
    <div
      className="left-72 right-0 md:px-5  h-16  flex flex-row items-center shadow-xl fixed top-8 justify-between z-50 max-md:mb-5 max-md:border-b-4 bg-[rgba(87,88,90,.7)] backdrop-blur-sm "
      ref={navRef}>
        <div className="w-10 bg-transparent h-16 absolute -translate-x-[3.75rem] overflow-hidden">
        <div className="w-12 h-12  absolute rotate-45 translate-x-4 translate-y-2 bg-[rgba(87,88,90,.7)]  "></div>
        </div>
      <div className="flex flex-row items-center w-full max-h-12">
        <div className="basis-1/6 h-full flex flex-row items-center">
          <Link
            to={"/"}
            onClick={() => {
              menuItemClickHandler(false);
            }}>
            <CursorEffect><img src={logo} alt="B/D" className="scale-110 mx-5 mr-8 w-8" /></CursorEffect>
          </Link>
        </div>
        
        <div className="cursor-pointer basis-1/4  text-[#ffffff]  h-full flex  flex-row items-center font-sans font-semibold text-base p-4">
          <Link to={"mailto:daskumarbiman2020@gmail.com"}>
            <span className="flex flex-row items-center">
              <IoIosMail className="scale-150 " />
              &nbsp;&nbsp;
              <span className="text-[#ffffffdb] ">
                daskumarbiman2020gmail.com
              </span>
            </span>
          </Link>
        </div>

        <div className="md:hidden flex flex-row items-center text-[#fefefe] justify-end mx-5 basis-1/2 cursor-pointer">
          {menuState ? (
            <GiHamburgerMenu className="scale-125" onClick={menuHandler} />
          ) : (
            <RxCross2 className="scale-125" onClick={menuHandler} />
          )}
        </div>
      </div>
      <div
        className="max-md:hidden basis-1/2 h-full w-full flex flex-row items-center text-[#ffffff] text-sm font-sans font-medium justify-end md:px-5 max-md:bg-[#F1F3F5]"
        ref={menuRef}>
          
        <Link to={"/works"}>
        <CursorEffect>
          <span
            onClick={menuItemClickHandler}
            className="menuu  flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
            <MdOutlineWork className="scale-125 " />
            &nbsp;<span className="text-[#feffff] ">Works/{">"}</span>
          </span>
          </CursorEffect>
        </Link>
        <Link to={"/skills"}>
        <CursorEffect>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
            <FaFileCode className="scale-110 " />
            &nbsp;<span className="text-[#ffffff] ">Skills/{">"}</span>
          </span>
          </CursorEffect>
        </Link>
        <Link to={"/resume"}>
        <CursorEffect>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110  hover:font-bold duration-200">
            <IoIosPerson className="scale-150 " />
            &nbsp;<span className="text-[#ffffff] ">Resume/{">"}</span>
          </span>
          </CursorEffect>
        </Link>
        <Link to={"/self"}>
        <CursorEffect>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
            <PiNotebookFill className="scale-125 " />
            &nbsp;<span className="text-[#ffffff] ">Self/{">"}</span>
          </span>
          </CursorEffect>
        </Link>
      </div>
    </div>
  );
}
