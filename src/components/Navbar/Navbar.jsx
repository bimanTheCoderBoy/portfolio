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
export default function Navbar() {
  const menuRef = useRef();
  const navRef = useRef();
  const [menuState, setMenuState] = useState(true);
  const menuHandler = (e) => {
    console.log(e.target);
    navRef.current.classList.toggle("flex-col");
    menuRef.current.classList.toggle("max-md:hidden");
    menuRef.current.classList.toggle("justify-around");
    menuRef.current.classList.toggle("border-t-4");
    menuRef.current.classList.toggle("py-2");
    // menuRef.current.classList.toggle("h-12")

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
      className="w-full px-5 max-md:h-12 h-14 bg-white flex flex-row items-center  fixed top-0 justify-between"
      ref={navRef}>
      <div className="flex flex-row items-center w-full max-h-12">
        <div className="basis-1/6 h-full flex flex-row items-center">
          <Link
            to={"/"}
            onClick={() => {
              menuItemClickHandler(false);
            }}>
            <img src={logo} alt="B/D" className=" scale-110 mx-5 mr-8  w-8" />
          </Link>
        </div>

        <div className="cursor-pointer basis-1/4  text-[#57585A]  h-full flex  flex-row items-center font-sans font-semibold text-base p-4">
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
        className="max-md:hidden basis-1/2 h-full w-full flex flex-row items-center text-[#57585A] text-sm font-sans font-medium justify-end px-5"
        ref={menuRef}>
          
        <Link to={"/works"}>
          <span
            onClick={menuItemClickHandler}
            className="menuu  flex flex-row items-center mx-2 cursor-pointer">
            <MdOutlineWork className="scale-125 " />
            &nbsp;<span className="text-[#6a6b6ddb] ">Works</span>
          </span>
        </Link>
        <Link to={"/skills"}>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer">
            <FaFileCode className="scale-110 " />
            &nbsp;<span className="text-[#6a6b6ddb] ">Skills</span>
          </span>
        </Link>
        <Link to={"/resume"}>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer">
            <IoIosPerson className="scale-150 " />
            &nbsp;<span className="text-[#6a6b6ddb] ">Resume</span>
          </span>
        </Link>
        <Link to={"/self"}>
          <span
            onClick={menuItemClickHandler}
            className="menuu flex flex-row items-center mx-2 cursor-pointer">
            <PiNotebookFill className="scale-125 " />
            &nbsp;<span className="text-[#6a6b6ddb] ">Self</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
