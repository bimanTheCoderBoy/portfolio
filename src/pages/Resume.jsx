import React from 'react'
import PDFViewer from '../components/pdf/PDFViewer'
import { MdDownloadForOffline } from "react-icons/md"
import { Link } from 'react-router-dom'
import CursorEffect from '../components/Cursor/CursorEffect'
import { ClipLoader } from 'react-spinners'
export default function Resume() {
  return (
   <div className='w-full flex flex-col justify-center items-center'>
    <React.Suspense fallback={<ClipLoader/>}>
    <PDFViewer/>
    </React.Suspense>
    <CursorEffect>
    <a href='https://cloudpdf.io/download/K7lBwJTOv' download={'BimanResume.pdf'}><div className='fixed text-[#57585A] bottom-20 left-8 z-50 hover:scale-[1.15] duration-150'><MdDownloadForOffline className='hover:text-gray-800 duration-500 text-[2.4rem]'/></div></a>
    </CursorEffect>
   </div>
  )
}
