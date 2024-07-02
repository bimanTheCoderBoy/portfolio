import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import reactIcon from "../assets/react.png";
import { Link } from "react-router-dom";
function DraggableImage() {
  
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
       
    <Draggable handle=".handle">
      
          <img
            src={reactIcon}
            className="handle w-20 absolute left-28 top-28 rotate-12 hover:drop-shadow-c-green duration-200"
            alt=""
            draggable={false}
            // onClick={()=>{window.open("https://www.w3schools.com/mongodb/","_blank").focus()}}
            onDrag={()=>{console.log("draging");}}
            onClickCapture={()=>{window.open("https://www.w3schools.com/mongodb/","_blank").focus()}}
          />
      </Draggable>
    
        </div>

  );
}

export default DraggableImage;
