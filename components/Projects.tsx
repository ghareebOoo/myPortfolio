"use client"
import Link from 'next/link'
import React from 'react'
import projectOne from "../public/src/image/one.jpg"
import projectTwo from "../public/src/image/two.png"
import projectThree from "../public/src/image/three.png"
import Image from 'next/image'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
import {motion} from "framer-motion"
export default function Projects() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative' id='projects'>
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 top-10' to={"contact"}>
            <MdOutlineKeyboardDoubleArrowDown className='text-6xl transition-colors duration-500 hover:text-main'/>
        </ScrollLink> 
        <h2 className='text-center text-main font-bold text-[32px] md:text-[48px]'>Projects</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.2}} className='p-4 w-full border-[1] border-main rounded-md'>
                <div>
                    <Image src={projectOne} alt='projectOne' width={200} height={300}  className='w-full h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/009"} target="blank" className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-main cursor-pointer transition-all duration-500 hover:bg-main hover:text-second'>
                        Github
                    </Link>
                    <Link href={"https://009-delta.vercel.app/"} target="blank" className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-main bg-main text-second cursor-pointer transition-all duration-500 hover:bg-primary hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.4}} className='p-4 w-full border-[1] border-main rounded-md'>
                <div>
                    <Image src={projectTwo} alt='projectTwo' width={200} height={300}  className='w-full  h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/shopanza"} target="blank" className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-main cursor-pointer transition-all duration-500 hover:bg-main hover:text-second'>
                        Github
                    </Link>
                    <Link href={"https://shopanza-blush.vercel.app/"} target="blank" className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-main bg-main text-second cursor-pointer transition-all duration-500 hover:bg-primary hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </motion.div>
            <motion.div initial={{y: -100 , opacity: 0}} whileInView={{y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear" , delay: 0.6}} className='p-4 w-full border-[1] border-main rounded-md'>
                <div>
                    <Image src={projectThree} alt='projectThree' width={200} height={300}  className='w-full h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/foodie"} target="blank" className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-main cursor-pointer transition-all duration-500 hover:bg-main hover:text-second'>
                        Github
                    </Link>
                    <Link href={"https://foodie-five-rho.vercel.app/"} target="blank" className='flex items-center justify-center rounded-md w-full text-second p-2.5 border-[1] border-main bg-main cursor-pointer transition-all duration-500 hover:bg-primary hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
