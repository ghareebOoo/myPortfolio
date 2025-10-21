"use client"
import React, { useMemo, useState } from 'react'
import {Link as ScrollLink} from "react-scroll"
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { motion , AnimatePresence , Variants  } from 'framer-motion';

export default function Header() {

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

    const [showNav , setShowNav] = useState(false)

    const myVariant: Variants = {
        initial:{
            y:"100%",
            opacity: 0
        },
        animate:(i:number)=>({
            y:"0",
            opacity:1,
            transition:{
                duration: 1 , ease: "linear" , delay: i * 0.05
            } 
        }),
        exit:(i:number)=>({
            y:"100%",
            opacity:0,
            transition:{
                duration: 1 , ease: "linear" , delay: i * 0.02
            } 
        }),
    }


    const getLetter = (text: string)=>{
        return text.split("").map((char: string , index: number)=>(
            <motion.span variants={myVariant} initial="initial" animate="animate" exit="exit" custom={index} key={index} className="inline-block">{char}</motion.span>
        ))
    }
  return (
    <div className='px-4 md:px-8 py-8' id="header">
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-[24px] md:text-[32px]'>Mohamed Ghareeb</h1>
            </div>
            <div className='hidden lg:flex items-center gap-4'>
                {links.map((link , index)=>{
                    return <motion.div initial={{y: -100 , opacity: 0}} animate={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: index * 0.2}}  key={index}>
                        <ScrollLink smooth={true} duration={1000} className='text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0  before:bg-black hover:before:w-full before:transition-all before:duration-500' to={link.href}>{link.label}</ScrollLink>
                    </motion.div>  
                })}
            </div>

            <div onClick={()=> setShowNav(true)} className='lg:hidden cursor-pointer'>
                <HiBars3 className='text-4xl'/>
            </div>


            <div className={`${showNav ? "translate-y-0" : "-translate-y-full"} lg:hidden transition-transform duration-1000 fixed z-50 w-full h-screen flex flex-col justify-center items-center gap-4 bg-white top-0 left-0`}>
                <div onClick={()=> setShowNav(false)} className="cursor-pointer absolute top-8 right-4">
                    <IoCloseSharp className='text-4xl'/> 
                </div>
                <AnimatePresence>
                    {showNav && links.map((link , index)=>{
                        return <ScrollLink onClick={()=> setShowNav(false)} className='overflow-hidden text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0  before:bg-black hover:before:w-full before:transition-all before:duration-500' key={index} to={link.href}>{getLetter(link.label)}</ScrollLink> 
                    })}
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}
