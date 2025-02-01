'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

type MenuProps = {
    title: string,
    rol: string,
    url: string
}

const perspective: {
  initial: { opacity: number };
  enter: { opacity: number; transition: { delay: number } };
  exit: { opacity: number };
} = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.5 
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Menu({title, rol, url}: MenuProps) {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <menu onClick={() => setIsOpen((isOpen) => !isOpen)} className='lg:hidden bg-[#F5F5F5] w-full bottom-0 left-0 p-5 fixed'>
            <div className='pb-5'>
              <h6 className='text-base'>
                {title}
              </h6>
              <div className='text-xs text-[#9B9B9B]'>
                {isOpen ? "Tap to Close" : "Tap to Open"}
              </div>
            </div>
            {isOpen && <ul className='text-xs'>
                <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
                  <p className='text-[#9B9B9B]'>Rol</p>
                  <p className='text-base'>{rol}</p>
                </li>
                <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
                  <p className='text-[#9B9B9B]'>URL</p>
                  <p className='text-base'>{url ? url : "Not found"}</p>
                </li>
              </ul>}
          </menu>
          <motion.aside 
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className='bg-[#F5F5F5] min-w-[440px] h-full text-xs px-5 py-10 hidden lg:block sticky top-0'>
          <h6 className='text-base'>
            {title}
          </h6>
          <ul>
            <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B]'>Rol</p>
              <p className='text-base'>{rol}</p>
            </li>
            <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B]'>URL</p>
              <p className='text-base'>{url ? url : "Not found"}</p>
            </li>
          </ul>
        </motion.aside>
    </>
  )
}
