import React from 'react'
import PDFViewer from '../components/pdf/PDFViewer'
import { MdDownloadForOffline } from "react-icons/md"
import { Link } from 'react-router-dom'
export default function Resume() {
  return (
   <div className='w-full flex flex-col justify-center items-center'>
    <PDFViewer/>
    <a href='https://cloudpdf.io/download/sKGBGg2uC' download={'BimanResume.pdf'}><div className='fixed text-[#57585A] bottom-20 left-8'><MdDownloadForOffline className='hover:text-gray-800 duration-500 text-[2.4rem]'/></div></a>
   </div>
  )
}
