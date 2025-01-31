"use client";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-[#333333] text-xs">
      <div className="flex items-center justify-between h-20 px-5 md:px-10">
        <h1 className="text-nowrap">
          <p className="">Developer & Designer</p>
          <p className="text-[#9B9B9B]">Ramos Sebastian</p>
        </h1>
        <div className="hidden lg:flex justify-evenly w-full">
            <ul className='text-xs text-[#9B9B9B] flex flex-col '>
                <Link href={"/"} className='hover:text-[#333333]'>Projects</Link>
                <Link href={"/about"} className='hover:text-[#333333]'>Info</Link>
            </ul>
            <div className='text-xs'>
                <p>Buenos Aires, Argentina</p>
                <p className='text-[#9B9B9B]'>Monday, 12:30 p.m.(GMT-3)</p>
            </div>
            <ul className='text-xs text-[#9B9B9B]'>
                <p>Instagram</p>
                <p>Gmail</p>
            </ul>
        </div>
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="lg:hidden">Menu</div>
      </div>
      {isOpen && (
        <div className="fixed h-screen bg-white left-0 top-0 z-10 w-full flex flex-col justify-between">
            <div className="flex justify-between items-center p-5 md:px-10">
            <h1 className="">
                <p>Developer & Designer</p>
                <p className="text-[#9B9B9B]">Ramos Sebastian</p>
            </h1>
            <div onClick={() => setIsOpen((isOpen) => !isOpen)}>{isOpen ? "Close" : "Menu"}</div>
            </div>
            <div className="flex flex-col justify-between py-10 px-5 h-full">
                <ul className="flex gap-40">
                    <Link href={"/"} className="hover:text-[#333333]">
                        Projects
                    </Link>
                    <Link href={"/about"} className="hover:text-[#333333]">
                        Info
                    </Link>
                </ul>
                <div className="text-xs">
                    <p>Buenos Aires, Argentina</p>
                    <p className="text-[#9B9B9B]">Monday, 12:30 p.m.(GMT-3)</p>
                </div>
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
