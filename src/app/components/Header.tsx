"use client";

import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";
import Clock from "./Clock";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Header() {

  const { variants, isDarkMode, toggleDarkMode } = useTheme()

  const [isOpen, setIsOpen] = useState(false);

  const navPerspective: {
    open: { display: string, opacity: number, transition: { duration: number; ease: number[] }};
    closed: { display: string, opacity: number };
  } = {
    open: {
      opacity: 1,
      display: 'flex',
      transition: { duration: 0.25, ease: [0.87, 0, 0.13, 1] }
    },
    closed: {
      opacity: 0,
      display: 'none'
    }
  }

  return (
    <>
      <motion.header
        variants={variants}
        animate={isDarkMode ? 'nightMode' : 'lightMode'}
        className="text-xs fixed top-0 w-full z-30">
        <div className="grid grid-cols-3 lg:grid-cols-12 h-20 px-5 md:px-10 items-center shadow-sm">
          <h1 className="text-nowrap col-span-2 lg:col-span-3 font-black">
            <Link href={"/"}>
              <p className="flex items-end">
                <span className="text-5xl">S</span>
                <span className="text-xs">@</span>
              </p>
            </Link>
          </h1>
          <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="lg:hidden flex justify-end z-30">{isOpen ? 'Close' : 'Menu'}</div>
          <div className="hidden w-full col-span-9 lg:grid grid-cols-9 gap-4 items-center">
              <Clock></Clock>
              <ul className='text-xs text-[#9B9B9B] flex flex-col col-span-3'>
                  <motion.li
                    whileHover={{color: isDarkMode ? '#ffffff' : '#333333'}}
                    style={{color: isDarkMode ? '#ffffff' : '#9B9B9B'}}
                    className="flex gap-1 items-center cursor-pointer" 
                    onClick={toggleDarkMode}>
                    Night Mode{isDarkMode && <div className="bg-white size-1 rounded"></div>}
                  </motion.li>
              </ul>
              <ul className='text-xs text-[#9B9B9B] col-span-3'>
                <motion.li
                  whileHover={{color: isDarkMode ? '#ffffff' : '#333333'}}>
                  <a href="http://www.instagram.com/dsign.sba/">Instagram</a>
                </motion.li>
                <motion.li
                  whileHover={{color: isDarkMode ? '#ffffff' : '#333333'}}>
                  <a href="mailto:sebasm.sr@gmail.com">Email</a>
                </motion.li>
              </ul>
          </div>
        </div>
        <motion.nav 
          variants={navPerspective}
          animate={isOpen ? 'open' : 'closed'}
          initial={'closed'}
          className="flex lg:hidden flex-col h-screen -translate-y-20">
          <div className="flex flex-col text-xs justify-between pt-40 pb-20 px-5 md:px-10 h-full">
              <Clock></Clock>
              <ul className="flex gap-40">
                <Link href={"/"} className="hover:text-[#333333]">
                    Projects
                </Link>
                <div
                  className="flex gap-1 items-center" 
                  onClick={toggleDarkMode}>
                  Night Mode{isDarkMode && <div className="bg-white size-1 rounded"></div>}
                </div>
              </ul>
              <ul className="text-xs text-[#9B9B9B] flex gap-40">
                <li>
                  <a href="http://www.instagram.com/dsign.sba/">Instagram</a>
                </li>
                <li>
                  <a href="mailto:sebasm.sr@gmail.com">Email</a>
                </li>
              </ul>
          </div>
          <Footer></Footer>
        </motion.nav>
      </motion.header>
    </>
  )};
