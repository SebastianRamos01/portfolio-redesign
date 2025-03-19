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
    <motion.header
      variants={variants}
      animate={isDarkMode ? 'nightMode' : 'lightMode'}
      className="text-xs fixed top-0 w-full z-20">
      <div className="flex items-center relative z-20 justify-between h-20 px-5 md:px-10">
        <h1 className="text-nowrap">
          <p className="">Developer & Designer</p>
          <p className="text-[#9B9B9B]">Ramos Sebastian</p>
        </h1>
        <div className="hidden lg:flex justify-evenly w-full">
            <ul className='text-xs text-[#9B9B9B] flex flex-col'>
                <Link href={"/"} className='hover:text-[#333333]'>Projects</Link>
                <Link href={"/about"} className='hover:text-[#333333]'>Info</Link>
            </ul>
            <Clock></Clock>
            <ul className='text-xs text-[#9B9B9B]'>
                <p>Instagram</p>
                <p>Gmail</p>
            </ul>
        </div>
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="lg:hidden">{isOpen ? 'Close' : 'Menu'}</div>
      </div>
      {isOpen && (
        <motion.div 
          variants={variants}
          animate={isDarkMode ? 'nightMode' : 'lightMode'}
          className="fixed h-screen left-0 top-0 z-10 w-full flex flex-col justify-between">
            <div className="flex flex-col justify-between pt-40 pb-20 px-5 h-full">
                <ul className="flex gap-40">
                    <Link href={"/"} className="hover:text-[#333333]">
                        Projects
                    </Link>
                    <Link href={"/about"} className="hover:text-[#333333]">
                        Info
                    </Link>
                </ul>
                <div
                  className="flex gap-1 items-center" 
                  onClick={toggleDarkMode}>
                  Night Mode{isDarkMode && <div className="bg-white size-1 rounded"></div>}
                </div>
                <Clock></Clock>
                <ul className="text-xs text-[#9B9B9B]">
                    <p>Instagram</p>
                    <p>Gmail</p>
                </ul>
            </div>
            <Footer></Footer>
        </motion.div>
      )}
    </motion.header>
  );
}
