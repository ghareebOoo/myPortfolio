"use client"
import React, { useMemo } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
import {motion} from "framer-motion"
export default function Footer() {
        const links = useMemo(()=>
            [
                {
                    label:"About",
                    href:"about",
                },
                {
                    label:"Experience",
                    href:"experience",
                },
                {
                    label:"Projects",
                    href:"projects",
                },
                {
                    label:"Contact",
                    href:"contact",
                },
            ]
        ,[])
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative'>
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 bottom-5' to={"header"}>
            <MdOutlineKeyboardDoubleArrowUp className='text-6xl transition-colors duration-500 hover:text-main'/>
        </ScrollLink> 
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            {links.map((link , index)=>{
                return <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: index * 0.2}}  key={index}>
                    <ScrollLink smooth={true} duration={1000} className='text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0  before:bg-main hover:before:w-full before:transition-all before:duration-500' to={link.href}>{link.label}</ScrollLink>
                </motion.div>  
            })}
        </div>
        <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear"}} className='mt-5 text-center text-base'>Copyright © 2025 Mohamed Ghareeb. All Rights Reserved.</motion.div>
    </div>
  )
}
