"use client"
import React, { useMemo, useState } from 'react'
import {Link as ScrollLink} from "react-scroll"
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

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
  return (
    <div className='px-4 md:px-8 py-8' id="header">
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-[24px] md:text-[32px]'>Mohamed Ghareeb</h1>
            </div>
            <div className='hidden lg:flex items-center gap-4'>
                {links.map((link , index)=>{
                    return <ScrollLink smooth={true} duration={1000} className='text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0  before:bg-black hover:before:w-full before:transition-all before:duration-500' key={index} to={link.href}>{link.label}</ScrollLink> 
                })}
            </div>

            <div onClick={()=> setShowNav(true)} className='lg:hidden cursor-pointer'>
                <HiBars3 className='text-4xl'/>
            </div>


            <div className={`${showNav ? "translate-y-0" : "-translate-y-full"} lg:hidden transition-all duration-700 fixed w-full h-screen bg-white top-0 left-0`}>
                <div onClick={()=> setShowNav(false)} className="cursor-pointer absolute top-5 right-5">
                    <IoCloseSharp className='text-4xl'/> 
                </div>
                <div className='flex flex-col justify-center h-full items-center gap-4'>
                    {links.map((link , index)=>{
                        return <ScrollLink onClick={()=> setShowNav(false)} className='text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0  before:bg-black hover:before:w-full before:transition-all before:duration-500' key={index} to={link.href}>{link.label}</ScrollLink> 
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
