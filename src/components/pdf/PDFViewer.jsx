import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

export default function PDFViewer() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "6b6772bb-4de7-4c57-9573-fbcd37f441fc",
        darkMode: false,
        disableToolbar: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return <div className="viewer w-full h-screen" ref={viewer}></div>;
}
