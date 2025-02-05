'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

type MenuProps = {
    title: string,
    rol: string[],
    techs: string[],
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

const menuPerspective: {
  open: { height: string, transition: { duration: number; ease: number[] }};
  closed: { height: number };
} = {
  open: {
    height: 'auto',
    transition: { duration: 0.25, ease: [0.87, 0, 0.13, 1] }
  },
  closed: {
    height: 0
  }
  }


export default function Menu({title, rol, url, techs}: MenuProps) {

    const [isOpen, setIsOpen] = useState(false)
    function firstCap (str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

  return (
    <>
      <menu onClick={() => setIsOpen((isOpen) => !isOpen)} className='lg:hidden bg-[#F5F5F5] w-full bottom-0 left-0 p-5 fixed'>
            <div className='pb-5'>
              <h6 className='text-base'>
                {firstCap(title)}
              </h6>
              <div className='text-xs text-[#9B9B9B]'>
                {isOpen ? "Tap to Close" : "Tap to Open"}
              </div>
            </div>
            <motion.ul 
                  variants={menuPerspective}
                  animate={isOpen ? 'open' : 'closed'}
                  className='text-xs'>
                <li className='flex border-b border-[#EBEBEB] py-3'>
                  <p className='text-[#9B9B9B] w-1/2'>Rol</p>
                  <ul className='text-base flex flex-col'>{rol.map((el, i) => {
                    return  <li key={i}>{el}</li>
                  })}</ul>
                </li>
                <div className='flex border-b border-[#EBEBEB] py-3'>
                  <p className='text-[#9B9B9B] w-1/2'>Technologys</p>
                  <ul className='text-base flex flex-col'>{techs.map((work, i) => {
                    return  <li key={i}>{work}</li>
                  })}</ul>
                </div>
                <li className='flex border-b border-[#EBEBEB] py-3'>
                  <p className='text-[#9B9B9B] w-1/2'>URL</p>
                  <p className='text-base'>{url ? url : "Not found"}</p>
                </li>
              </motion.ul>
          </menu>
          <motion.aside 
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className='bg-[#F5F5F5] min-w-[440px] h-full text-xs px-5 py-10 hidden lg:block sticky top-0'>
          <h6 className='text-base'>
            {firstCap(title)}
          </h6>
          <ul>
            <li className='flex border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B] w-1/2'>Rol</p>
              <ul className='text-base flex flex-col'>{rol.map((el, i) => {
                    return  <li key={i}>{el}</li>
                  })}</ul>
            </li>
            <div className='flex border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B] w-1/2'>Technologys</p>
              <ul className='text-base flex flex-col'>{techs.map((work, i) => {
                return  <li key={i} className='text-sm'>{work}</li>
              })}</ul>
            </div>
            <li className='flex border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B] w-1/2'>URL</p>
              <p className='text-sm'>{url ? url : "Not found"}</p>
            </li>
          </ul>
        </motion.aside>
    </>
  )
}
