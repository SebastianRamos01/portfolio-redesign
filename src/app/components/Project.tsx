'use client'

import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import ImgCont from "./ImgCont"
import Menu from "./Menu"

interface Project {
    title: string;
    img: string;
    rol: string[];
    technologys: string[];
    url: string;
  }

  interface ProjectProps {
    project: Project;
  }

export default function Project({project}: ProjectProps) {

    const { variants, isDarkMode, artVariants } = useTheme()

  return (
    <motion.div
        variants={variants}
        animate={isDarkMode ? 'nightMode' : 'lightMode'}>
        <motion.div 
            variants={artVariants}
            animate={isDarkMode ? 'nightMode' : 'lightMode'}
            className='px-5 py-20 mx-5'>
            <ImgCont src={`/${project.img}`} alt={project.title} width={1009} height={100} ></ImgCont>
        </motion.div>
        <Menu title={project?.title ?? "No title"} rol={project?.rol ?? "No rol"} techs={project.technologys} url={project?.url ?? "No url"}></Menu>
    </motion.div>
  )
}
