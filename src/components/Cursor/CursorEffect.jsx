import React, { useContext, useState } from 'react'
import { CursorContext } from '../../Context/CursorContext'
export default function CursorEffect(props) {

    const {setIsHovered } = useContext(CursorContext)

  return (
    <div onMouseEnter={()=>{setIsHovered(12)}} onMouseLeave={()=>{setIsHovered(8)}} >
      {props.children}
    </div>
  )
}
