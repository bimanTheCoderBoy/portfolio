import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

export default function PDFViewer() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "37d2c4df-0154-427c-b129-d3f31db36591",
        darkMode: false,
        disableToolbar:true
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return <div className="viewer w-full h-screen" ref={viewer}></div>;
}
