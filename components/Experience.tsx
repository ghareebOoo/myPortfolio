"use client"
import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
import {motion} from "framer-motion"
export default function Experience() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative' id='experience'>
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 top-10' to={"projects"}>
            <MdOutlineKeyboardDoubleArrowDown className='text-6xl'/>
        </ScrollLink> 
        <h2 className='text-center font-bold text-[32px] md:text-[48px]'>Experience</h2>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-8 gap-4'>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.2}} className='col-sapn-1 xl:col-span-4 p-4 w-full border-[1] border-black rounded-md'>
                <h3 className='text-[#555555] text-2xl font-semibold'>Languages</h3>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>HTML</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>CSS</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>JavaScript</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Bootstrap</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>jQuery</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Tailwind</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>React</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>SASS</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>TypeScript</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Next.js</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.4}} className='col-sapn-1 xl:col-span-2 p-4 w-full border-[1] border-black rounded-md'>
                <h3 className='text-[#555555] text-2xl font-semibold'>Developer Tools</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>VS Code</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Shadcn</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.6}} className='col-sapn-1 xl:col-span-2 p-4 w-full border-[1] border-black rounded-md'>
                <h3 className='text-[#555555] text-2xl font-semibold'>Technologies</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>GitHub</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PiSealCheckFill className='text-2xl'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Git</h3>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
