"use client"
import React from 'react'
import { MdOutlineMail , MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import {motion} from "framer-motion"

import Link from 'next/link';

export default function Contact() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 overflow-hidden' id='contact'>
        <h2 className='text-center text-main font-bold text-[32px] md:text-[48px]'>Contact Me</h2>
        <div className="mt-8 w-full p-4 border-[1] border-main rounded-md grid grid-cols-4 md:grid-cols-2 gap-4">
            <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.2}}>
                <Link href={"mailto:ghareebmohamed406@gmail.com"} className='w-full flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full bg-black60 flex items-center justify-center'>
                        <MdOutlineMail className='text-2xl text-white'/>
                    </div>
                    <div className='hidden md:block text-base font-semibold transition-colors duration-500 hover:text-main'>ghareebmohamed406@gmail.com</div>
                </Link>
            </motion.div>
            <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.4}}>
                <Link href={"https://www.linkedin.com/in/mohamed-ghareeb-0ab082334/"} target='blank' className='w-full flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full bg-black60 flex items-center justify-center'>
                        <FaLinkedinIn className='text-2xl text-white'/>
                    </div>
                    <div className='hidden md:block text-base font-semibold transition-colors duration-500 hover:text-main'>LinkedIn</div>
                </Link>
            </motion.div>
            <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.6}}>
                <Link href={"https://wa.me/201140872874"} target='blank' className='w-full flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full bg-black60 flex items-center justify-center'>
                        <FaWhatsapp className='text-2xl text-white'/>
                    </div>
                    <div className='hidden md:block text-base font-semibold transition-colors duration-500 hover:text-main'>Whatsapp</div>
                </Link>
            </motion.div>
            <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.8}}>
                <Link href={"tel:01140872874"} className='w-full flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full bg-black60 flex items-center justify-center'>
                        <MdOutlineLocalPhone className='text-2xl text-white'/>
                    </div>
                    <div className='hidden md:block text-base font-semibold transition-colors duration-500 hover:text-main'>01140872874</div>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}
