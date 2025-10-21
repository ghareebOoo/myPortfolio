import React from 'react'
import { MdOutlineMail , MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


import Link from 'next/link';

export default function Contact() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5' id='contact'>
        <h2 className='text-center font-bold text-[32px] md:text-[48px]'>Contact Me</h2>
        <div className="mt-8 w-full p-4 border-[1] border-black rounded-md grid grid-cols-4 md:grid-cols-2 gap-4">
            <Link href={"mailto:ghareebmohamed406@gmail.com"} className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <MdOutlineMail className='text-2xl text-white'/>
                </div>
                <div className='hidden md:block text-base font-semibold'>ghareebmohamed406@gmail.com</div>
            </Link>
            <Link href={"https://www.linkedin.com/in/mohamed-ghareeb-0ab082334/"} target='blank' className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <FaLinkedinIn className='text-2xl text-white'/>
                </div>
                <div className='hidden md:block text-base font-semibold'>LinkedIn</div>
            </Link>
            <Link href={"https://wa.me/201140872874"} target='blank' className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <FaWhatsapp className='text-2xl text-white'/>
                </div>
                <div className='hidden md:block text-base font-semibold'>Whatsapp</div>
            </Link>
            <Link href={"tel:01140872874"} className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                    <MdOutlineLocalPhone className='text-2xl text-white'/>
                </div>
                <div className='hidden md:block text-base font-semibold'>01140872874</div>
            </Link>
        </div>
    </div>
  )
}
