import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair as test } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Skills() {
  const codeString = `
  function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:code-segment
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
  
  `;
  return (
    <div>
      <div className="w-full   flex flex-col justify-center items-center   relative md:right-10">
        <h2 className="text-7xl font-[600] font-playfr text-deepg flex items-center">
          {"<"}<span className="text-5xl font-kanit">Skills</span><span className="text-yellow-500">/</span>
          {">"}
        </h2>
      
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={test}
        customStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          marginLeft: "5rem",
          fontSize: "1.2rem",
        }}
        showLineNumbers={true}
        wrapLongLines={true}
        codeTagProps={[]}
        lineNumberStyle={{
          // backgroundColor:"red",
          margin: ".3rem",
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
