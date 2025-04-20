'use client'

import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import ImgCont from "./ImgCont"
import Menu from "./Menu"

interface Project {
    id: number;
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
    function firstCap (str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

  return (
    <motion.section 
      className="px-5 lg:px-10 pt-40 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3"
      variants={variants}
      animate={isDarkMode ? 'nightMode' : 'lightMode'}>
      <Menu title={project?.title ?? "No title"} rol={project?.rol ?? "No rol"} techs={project.technologys} url={project?.url ?? "No url"}></Menu>
      <h2 className="font-bold flex">
        <p>
          {firstCap(project.title)}
        </p>
        <p className="text-xs">
          ({project.id})
        </p>
      </h2>
      <motion.div
          className="col-span-3 md:col-span-6 lg:col-span-9"
          >
          <motion.div 
              variants={artVariants}
              animate={isDarkMode ? 'nightMode' : 'lightMode'}
              className='px-10 py-10 rounded'>
              <ImgCont src={`/${project.img}`} alt={project.title} width={1009} height={100} ></ImgCont>
          </motion.div>
      </motion.div>
    </motion.section>

  )
}
