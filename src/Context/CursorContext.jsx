// src/HoverContext.js
import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [hoveredValue, setIsHovered] = useState(8);

  return (
    <CursorContext.Provider value={{ hoveredValue, setIsHovered }}  >
      {children}
    </CursorContext.Provider>
  );
};
