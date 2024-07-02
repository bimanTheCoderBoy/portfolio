import React from "react";
import Draggable from "react-draggable";
export default function DragableItem(props) {
  return (
    <Draggable>
         <div style={{ width: 'fit-content', cursor: 'move' }}>
              {props.children}
              </div>
    </Draggable>
  );
}
