"use client"
import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
import {motion} from "framer-motion"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";


export default function Experience() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative' id='experience'>
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 top-10' to={"projects"}>
            <MdOutlineKeyboardDoubleArrowDown className='text-6xl text-black60 transition-colors duration-500 hover:text-main'/>
        </ScrollLink> 
        <h2 className='text-center text-main font-bold text-[32px] md:text-[48px]'>Experience</h2>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-8 gap-4'>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.2}} className='col-sapn-1 xl:col-span-4 p-4 w-full border-[1] border-main rounded-md'>
                <h3 className='text-main text-2xl font-semibold'>Languages</h3>
                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className='flex items-center gap-2'>
                        <FaHtml5 className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>HTML</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCss3Alt className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>CSS</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoLogoJavascript className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>JavaScript</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaBootstrap className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Bootstrap</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <DiJqueryLogo className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>jQuery</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiTailwindCssFill className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Tailwind</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaReact className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>React</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaSass className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>SASS</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <SiTypescript className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>TypeScript</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <RiNextjsFill className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Next.js</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.4}} className='col-sapn-1 xl:col-span-2 p-4 w-full border-[1] border-main rounded-md'>
                <h3 className='text-main text-2xl font-semibold'>Developer Tools</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className='flex items-center gap-2'>
                        <VscCode className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>VS Code</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.6}} className='col-sapn-1 xl:col-span-2 p-4 w-full border-[1] border-main rounded-md'>
                <h3 className='text-main text-2xl font-semibold'>Technologies</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className='flex items-center gap-2'>
                        <FaGithub className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>GitHub</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaGitSquare className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Git</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <SiShadcnui className='text-2xl text-main'/>
                        <h3 className='text-[14px] sm:text-base md:text-xl font-semibold'>Shadcn</h3>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
