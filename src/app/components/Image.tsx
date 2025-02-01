'use client'

import { motion } from 'framer-motion'
import React from 'react'

 type ImageProps = {
    title: string,
    image: string
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
      delay: 0.4 
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Image({title, image}: ImageProps) {
  return (
    <motion.div
        variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
          className="px-5 py-10 bg-[#F5F5F5] md:w-[65%] rounded">
          <img src={image} alt={title} />
    </motion.div>
  )
}
