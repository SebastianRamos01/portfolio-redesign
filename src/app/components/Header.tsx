"use client";

import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";
import Clock from "./Clock";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-[#333333] text-xs">
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
        <div className="fixed h-screen bg-white left-0 top-0 z-10 w-full flex flex-col justify-between">
            <div className="flex flex-col justify-between pt-40 pb-20 px-5 h-full">
                <ul className="flex gap-40">
                    <Link href={"/"} className="hover:text-[#333333]">
                        Projects
                    </Link>
                    <Link href={"/about"} className="hover:text-[#333333]">
                        Info
                    </Link>
                </ul>
                <Clock></Clock>
                <ul className="text-xs text-[#9B9B9B]">
                    <p>Instagram</p>
                    <p>Gmail</p>
                </ul>
            </div>
            <Footer></Footer>
        </div>
      )}
    </header>
  );
}
