"use client"
import Link from 'next/link'
import React from 'react'
import projectOne from "../public/src/image/one.jpg"
import projectTwo from "../public/src/image/two.png"
import projectThree from "../public/src/image/three.png"
import Image from 'next/image'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
export default function Projects() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative' id='projects'>
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 top-10' to={"contact"}>
            <MdOutlineKeyboardDoubleArrowDown className='text-6xl'/>
        </ScrollLink> 
        <h2 className='text-center font-bold text-[32px] md:text-[48px]'>Projects</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <div className='p-4 w-full border-[1] border-black rounded-md'>
                <div>
                    <Image src={projectOne} alt='projectOne' width={200} height={300}  className='w-full h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/009"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Github
                    </Link>
                    <Link href={"https://009-delta.vercel.app/"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </div>
            <div className='p-4 w-full border-[1] border-black rounded-md'>
                <div>
                    <Image src={projectTwo} alt='projectTwo' width={200} height={300}  className='w-full  h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/shopanza"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Github
                    </Link>
                    <Link href={"https://shopanza-blush.vercel.app/"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </div>
            <div className='p-4 w-full border-[1] border-black rounded-md'>
                <div>
                    <Image src={projectThree} alt='projectThree' width={200} height={300}  className='w-full h-auto md:h-[300px] object-cover rounded-md'/>
                </div>
                <div className="mt-5 w-full flex items-center gap-4">
                    <Link href={"https://github.com/ghareebOoo/foodie"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Github
                    </Link>
                    <Link href={"https://foodie-five-rho.vercel.app/"} className='flex items-center justify-center rounded-md w-full p-2.5 border-[1] border-black cursor-pointer transition-all duration-500 hover:bg-black hover:text-white'>
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
