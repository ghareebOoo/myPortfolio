"use client"
import React from 'react'
import myImage from "../public/src/image/2.png"
import Image from 'next/image'
import { FaMedal } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {Link as ScrollLink} from "react-scroll"
import {motion} from "framer-motion"
export default function About() {
  return (
    <div className='px-4 md:px-8 py-8 mt-5 relative overflow-hidden' id="about">
        <ScrollLink smooth={true} duration={500} className='cursor-pointer absolute right-0 top-10' to={"experience"}>
            <MdOutlineKeyboardDoubleArrowDown className='text-6xl'/>
        </ScrollLink> 
        <h2 className='text-center font-bold text-[32px] md:text-[48px]'>About Me</h2>
        <div className='mt-8 flex flex-col xl:flex-row gap-8 items-center'>
            <motion.div initial={{x: -100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear"}} className='max-w-[300px] xl:max-w-full w-full'>
                <Image  src={myImage} width={400} height={200} alt='myImage' className='w-full h-[300px] xl:h-[550px] object-cover rounded-md'/>
            </motion.div>
            <motion.div initial={{x: 100 , opacity: 0}} whileInView={{x: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 0.7 , ease: "linear"}} className='w-full'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <div className="w-full border-[1] border-black rounded-md p-4 flex flex-col items-center gap-3">
                        <FaMedal className='text-2xl'/>
                        <h3 className='text-xl font-semibold'>Experience</h3>
                        <p className='text-base text-[#555555]'>1+ years</p>
                        <p className='text-base text-[#555555]'>Frontend Development</p>
                    </div>
                    <div className="w-full border-[1] border-black rounded-md p-4 flex flex-col items-center gap-3">
                        <ImUsers className='text-2xl'/>
                        <h3 className='text-xl font-semibold'>Education</h3>
                        <p className='text-base text-[#555555] text-center'>B.Com – Faculty of Commerce</p>
                        <p className='text-base text-[#555555] text-center'>Front-End Diploma – Route</p>
                    </div>
                </div>
                <p className='text-[14px] md:text-base text-[#555555] mt-8'>
                    I have worked in various roles before I started learning programming, which has helped me develop strong
                    problem-solving and communication skills. These experiences taught me the value of hard work, responsibility, 
                    and the ability to work under pressure. Since transitioning to front-end development, 
                    I have focused on continuously improving my skills and gaining hands-on experience with modern 
                    technologies. I am now able to leverage my diverse background to tackle challenges in the tech 
                    industry with a strong work ethic and a keen eye for detail.
                </p>
            </motion.div>
        </div>
    </div>
  )
}
