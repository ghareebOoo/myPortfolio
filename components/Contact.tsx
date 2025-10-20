import React from 'react'
import { MdOutlineMail , MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";


import Link from 'next/link';

export default function Contact() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5' id='contact'>
        <h2 className='text-center font-bold text-[32px] md:text-[48px]'>Contact Me</h2>
        <div className="mt-8 w-full lg:max-w-[80%] mx-auto p-4 border-[1] border-black rounded-md flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
            <Link href={"mailto:ghareebmohamed406@gmail.com"} className='w-full flex md:justify-center items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <MdOutlineMail className='text-2xl text-white'/>
                </div>
                <div className='text-base md:text-lg font-semibold line-clamp-1'>ghareebmohamed406@gmail.com</div>
            </Link>
            <Link href={"https://www.linkedin.com/in/mohamed-ghareeb-0ab082334/"} target='blank' className='w-full flex md:justify-center items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <FaLinkedinIn className='text-2xl text-white'/>
                </div>
                <div className='text-base md:text-lg font-semibold'>LinkedIn</div>
            </Link>
            <Link href={"tel:01140872874"} className='w-full flex md:justify-center items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <MdOutlineLocalPhone className='text-2xl text-white'/>
                </div>
                <div className='text-base md:text-lg font-semibold'>01140872874</div>
            </Link>
        </div>
    </div>
  )
}
