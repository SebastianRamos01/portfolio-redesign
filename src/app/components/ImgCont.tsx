'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

interface ImageProps {
    src: string; // Renombrado a src para consistencia con Next.js Image
    alt: string; // Prop alt opcional para mayor accesibilidad
    width?: number; // Ancho de la imagen
    height?: number; // Alto de la imagen
    priority?: boolean;
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

export default function ImgCont({
    src, 
    alt,
    width,
    height,
    priority = true}: ImageProps) {
  return (
    <motion.div
        variants={perspective}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" rounded relative">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} />
    </motion.div>
  )
}