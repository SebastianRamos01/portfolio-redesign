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

  return (
    <>
      <motion.header
        variants={variants}
        animate={isDarkMode ? 'nightMode' : 'lightMode'}
        className="text-xs fixed top-0 w-full z-30 shadow-sm">
        <div className="grid grid-cols-3 lg:grid-cols-12 h-20 px-5 md:px-10 items-center">
          <h1 className="text-nowrap col-span-2 lg:col-span-3">
            <p className="">Ramos Sebastian</p>
            <p className="text-[#9B9B9B]">Developer & Designer</p>
          </h1>
          <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="lg:hidden flex justify-end">{isOpen ? 'Close' : 'Menu'}</div>
          <div className="hidden w-full col-span-9 lg:grid grid-cols-9 gap-4 items-center">
              <Clock></Clock>
              <ul className='text-xs text-[#9B9B9B] flex flex-col col-span-3'>
                  <motion.li 
                    whileHover={{color: isDarkMode ? '#ffffff' : '#333333'}}>
                    <Link href={"/"}>Projects</Link>
                  </motion.li>
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
      </motion.header>
        {isOpen && (
          <motion.div 
            variants={variants}
            animate={isDarkMode ? 'nightMode' : 'lightMode'}
            className="fixed h-screen z-20 left-0 top-0 w-full flex flex-col justify-between">
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
          </motion.div>
        )}
    </>
  )};
