import React, { useEffect, useRef, useState } from "react";
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
  // nav change section
  const navOneData = {
    top: 0,
    navbarLeft: 0,
    bg: "rgba(0,0,0,0)",
    shadow: "none",
    backdrop: "none",
    height:14,
    textColorDeep:'#57585A',
    textColorLight:'#6a6b6ddb'
  };
  const navTwoData = {
    top: 8,
    navbarLeft: 72,
    bg: "rgba(87,88,90,.7)",
    shadow: "xl",
    backdrop: "sm",
    height:16,
    textColorDeep:'',
    textColorLight:''
  };
  const [defNav, setDefNav] = useState(false);
  const [navTransform, setNavTransform] = useState(navOneData);

  useEffect(() => {
    if (defNav) {
      setNavTransform(navOneData);
    } else {
      setNavTransform(navTwoData);
    }
  }, [defNav]);

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
      className={`left-${navTransform.navbarLeft} right-0 md:px-5  h-${navTransform.height}  flex flex-row items-center  fixed top-${navTransform.top} justify-between z-50 max-md:mb-5 max-md:border-b-4 max-md:bg-[#F1F3F5] md:bg-[${navTransform.bg}] md:shadow-${navTransform.shadow} backdrop-blur-${navTransform.backdrop} `}
      ref={navRef}>
      {!defNav && (
        <div className="w-10 bg-transparent h-16 absolute -translate-x-[3.75rem] overflow-hidden">
          <div className="w-12 h-12  absolute rotate-45 translate-x-4 translate-y-2 bg-[rgba(87,88,90,.7)]  "></div>
        </div>
      )}
      <div className="flex flex-row items-center w-full max-h-12">
        <div className="basis-1/6 h-full flex flex-row items-center">
          <Link
            to={"/"}
            onClick={() => {
              menuItemClickHandler(false);
            }}>
            <CursorEffect>
              <img src={logo} alt="B/D" className=" scale-110 mx-5 mr-8  w-8" />
            </CursorEffect>
          </Link>
        </div>

        <div className="cursor-pointer basis-1/4  text-[${}]  h-full flex  flex-row items-center font-sans font-semibold text-base p-4">
          <Link to={"mailto:daskumarbiman2020@gmail.com"}>
            <span className="flex flex-row items-center">
              <IoIosMail className="scale-150 " />
              &nbsp;&nbsp;
              <span className="text-[#6a6b6ddb] ">
                daskumarbiman2020gmail.com
              </span>
            </span>
          </Link>
        </div>

        <div className="md:hidden flex flex-row items-center text-[#57585A] justify-end mx-5 basis-1/2 cursor-pointer">
          {menuState ? (
            <GiHamburgerMenu className="scale-125" onClick={menuHandler} />
          ) : (
            <RxCross2 className="scale-125" onClick={menuHandler} />
          )}
        </div>
      </div>
      <div
        className="max-md:hidden basis-1/2 h-full w-full flex flex-row items-center text-[#57585A] text-sm font-sans font-medium justify-end md:px-5 max-md:bg-[#F1F3F5]"
        ref={menuRef}>
        <Link to={"/works"}>
          <CursorEffect>
            <span
              onClick={menuItemClickHandler}
              className="menuu  flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
              <MdOutlineWork className="scale-125 " />
              &nbsp;<span className="text-[#6a6b6ddb] ">Works/{">"}</span>
            </span>
          </CursorEffect>
        </Link>
        <Link to={"/skills"}>
          <CursorEffect>
            <span
              onClick={menuItemClickHandler}
              className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
              <FaFileCode className="scale-110 " />
              &nbsp;<span className="text-[#6a6b6ddb] ">Skills/{">"}</span>
            </span>
          </CursorEffect>
        </Link>
        <Link to={"/resume"}>
          <CursorEffect>
            <span
              onClick={menuItemClickHandler}
              className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110  hover:font-bold duration-200">
              <IoIosPerson className="scale-150 " />
              &nbsp;<span className="text-[#6a6b6ddb] ">Resume/{">"}</span>
            </span>
          </CursorEffect>
        </Link>
        <Link to={"/self"}>
          <CursorEffect>
            <span
              onClick={menuItemClickHandler}
              className="menuu flex flex-row items-center mx-2 cursor-pointer hover:scale-110 hover:font-bold duration-200">
              <PiNotebookFill className="scale-125 " />
              &nbsp;<span className="text-[#6a6b6ddb] ">Self/{">"}</span>
            </span>
          </CursorEffect>
        </Link>
      </div>
    </div>
  );
}
