import React from "react";
import { IoIosMail } from "react-icons/io";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import logo from "./../../assets/folio.png";
export default function Navbar() {
  return (
    <div className="w-full h-14 bg-white flex flex-row items-center fixed justify-between">
      <div className="basis-1/8 h-full flex flex-row items-center">
        <img src={logo} alt="B/D" className="mx-5 h-8 " />
      </div>

      <div className="basis-1/3 text-[#57585A] h-full flex flex-row items-center font-sans font-semibold text-base p-4">
        <span className="flex flex-row items-center">
          <IoIosMail className="scale-150 " />
          &nbsp;&nbsp;daskumarbiman2020gmail.com
        </span>
      </div>

      <div className="basis-1/2 h-full flex flex-row  items-center text-[#57585A] text-sm font-sans font-medium justify-end px-5">
        <span className="flex flex-row items-center mx-2">
          <MdOutlineWork className="scale-125 " />
          &nbsp;Works
        </span>
        <span className="flex flex-row items-center mx-2">
          <FaFileCode className="scale-110 " />
          &nbsp;Skills
        </span>
        <span className="flex flex-row items-center mx-2">
          <IoIosPerson className="scale-150 " />
          &nbsp;Resume
        </span>
        <span className="flex flex-row items-center mx-2">
          <PiNotebookFill className="scale-125 " />
          &nbsp;Self
        </span>
      </div>
    </div>
  );
}
