'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'

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
  closed: { height: string };
} = {
  open: {
    height: 'auto',
    transition: { duration: 0.25, ease: [0.87, 0, 0.13, 1] }
  },
  closed: {
    height: '0px'
  }
}


export default function Menu({title, rol, url, techs}: MenuProps) {

    const [isOpen, setIsOpen] = useState(false)
    const { isDarkMode, artVariants } = useTheme()

  return (
    <>
      <motion.menu
        variants={artVariants}
        animate={isDarkMode ? 'nightMode' : 'lightMode'}
        onClick={() => setIsOpen((isOpen) => !isOpen)} 
        className='lg:hidden bg-[#F5F5F5] w-full bottom-0 left-0 p-5 fixed z-10'>
          <div className=''>
              <h6 className='text-base'>
              Details
            </h6>
            <div className='text-xs text-[#9B9B9B]'>
              {isOpen ? "Tap to Close" : "Tap to Open"}
            </div>
          </div>
          <motion.div
            variants={menuPerspective}
            animate={isOpen ? 'open' : 'closed'}
            initial={'closed'}
            className=''>
            <motion.ul 
                  style={isOpen ? {opacity: 1} : {opacity: 0}}
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
          </motion.div>
      </motion.menu>
          <motion.aside 
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className='h-fit text-xs pr-5 hidden lg:block col-span-3 sticky top-40'>
          <ul>
            <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B]'>Rol</p>
              <ul className='text-base flex flex-col'>{rol.map((el, i) => {
                    return  <li className='text-sm' key={i}>{el}</li>
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
