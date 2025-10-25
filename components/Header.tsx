"use client"
import React, { useMemo, useState } from 'react'
import { Link as ScrollLink } from "react-scroll"
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Header() {

  const links = useMemo(() =>
    [
      { label: "About", href: "about" },
      { label: "Experience", href: "experience" },
      { label: "Projects", href: "projects" },
      { label: "Contact", href: "contact" },
    ]
    , [])

  const [showNav, setShowNav] = useState(false)

  const myVariant: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: (i: number) => ({
      y: "0",
      opacity: 1,
      transition: { duration: 1, ease: "linear", delay: i * 0.05 }
    }),
    exit: (i: number) => ({
      y: "100%",
      opacity: 0,
      transition: { duration: 1, ease: "linear", delay: i * 0.02 }
    }),
  }

  const getLetter = (text: string) => {
    return text.split("").map((char: string, index: number) => (
      <motion.span
        variants={myVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={index}
        key={index}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))
  }

  return (
    <>
      {/* HEADER */}
      <div className='px-4 md:px-8 py-8 backdrop-blur-md bg-black60' id="header">
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "linear" }}
          >
            <h1 className='text-[24px] md:text-[32px]'>Mohamed <span className='text-main'>Ghareeb</span></h1>
          </motion.div>

          {/* DESKTOP LINKS */}
          <div className='hidden lg:flex items-center gap-4'>
            {links.map((link, index) => (
              <motion.div
                className='text-white'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "linear", delay: index * 0.2 }}
                key={index}
              >
                <ScrollLink
                  smooth={true}
                  duration={1000}
                  className='text-[24px] cursor-pointer w-fit relative before:absolute before:w-0 before:h-0.5 before:-bottom-1 before:left-0  before:bg-main hover:before:w-full before:transition-all before:duration-500'
                  to={link.href}
                >
                  {link.label}
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP ICONS */}
          <div className='hidden lg:flex items-center gap-4'>
            <Link href="https://www.facebook.com/Iam.mourinho.1088/" target='blank'>
              <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.2 }}>
                <FaFacebookF className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
              </motion.div>
            </Link>
            <Link href="https://www.instagram.com/ghareeb.oo/" target='blank'>
              <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.4 }}>
                <FaInstagram className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
              </motion.div>
            </Link>
            <Link href="https://x.com/GhareebOooo" target='blank'>
              <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.6 }}>
                <FaXTwitter className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
              </motion.div>
            </Link>
          </div>

          {/* MENU ICON (MOBILE) */}
          <div onClick={() => setShowNav(true)} className='lg:hidden cursor-pointer'>
            <HiBars3 className='text-4xl' />
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='lg:hidden fixed z-50 w-full h-screen flex flex-col justify-center items-center gap-4 bg-black top-0 left-0'
          >
            <div onClick={() => setShowNav(false)} className="cursor-pointer absolute top-8 right-4">
              <IoCloseSharp className='text-4xl' />
            </div>

            {/* NAV LINKS */}
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                onClick={() => setShowNav(false)}
                className='text-[24px] text-white cursor-pointer w-fit relative before:absolute before:w-0 before:h-0.5 before:-bottom-1 before:left-0 before:bg-main hover:before:w-full before:transition-all before:duration-500'
                to={link.href}
              >
                {getLetter(link.label)}
              </ScrollLink>
            ))}

            {/* SOCIAL ICONS */}
            <motion.div
              className='mt-5 flex flex-col items-center gap-4'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7, ease: "linear" }}
            >
              <Link href="https://www.facebook.com/Iam.mourinho.1088/" target='blank'>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.2 }}>
                  <FaFacebookF className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
                </motion.div>
              </Link>
              <Link href="https://www.instagram.com/ghareeb.oo/" target='blank'>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.4 }}>
                  <FaInstagram className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
                </motion.div>
              </Link>
              <Link href="https://x.com/GhareebOooo" target='blank'>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "linear", delay: 0.6 }}>
                  <FaXTwitter className='cursor-pointer text-2xl text-white transition-colors duration-500 hover:text-main' />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
