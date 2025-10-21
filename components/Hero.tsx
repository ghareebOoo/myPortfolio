import React from 'react'
import myImage from "../public/src/image/1.png"
import Image from 'next/image'
import { FaLinkedinIn , FaGithub  } from "react-icons/fa";
import Link from 'next/link';

export default function Hero() {

  return (
    <div className='px-4 md:px-8 py-8 mt-5' >
        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center w-full lg:max-w-[80%] mx-auto'>
            <div className='w-full lg:max-w-[50%] lg:flex justify-end'>
                <Image src={myImage} alt='myImage' width={350} height={350} className='rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover mx-auto lg:mx-0'/>
            </div>
            <div className='w-full lg:max-w-[50%] flex flex-col gap-5'>
                <div>
                    <p className='text-xl text-[#555555] text-center font-semibold'>Hello, I{`'`}m</p>
                    <h2 className='my-1 font-bold text-[28px] md:text-[35px] text-center leading-[40px]'>Mohamed Ghareeb</h2>
                    <p className='text-[28px] text-[#555555] text-center font-semibold'>Frontend Developer</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 justify-center'>
                    <Link href={"/mohamed ghareeb.pdf"}  target="blank" className="px-6 py-2 border-[1] border-black rounded-full cursor-pointer transition-all duration-500 hover:bg-black hover:text-white">Download CV</Link>
                    <button className="px-8 py-2 border-[1] border-black bg-black text-white rounded-full cursor-pointer transition-all duration-500 hover:bg-white hover:text-black">Contact Info</button>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <Link href={"https://www.linkedin.com/in/mohamed-ghareeb-0ab082334/"} target="blank" className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                        <FaLinkedinIn className='text-2xl text-white'/>
                    </Link>
                    <Link href={"https://github.com/ghareebOoo"} target="blank" className='w-10 h-10 rounded-full bg-black flex items-center justify-center'>
                        <FaGithub  className='text-2xl text-white'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
