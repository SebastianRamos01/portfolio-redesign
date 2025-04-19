"use client"

import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { works } from "./data/data"
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeContext";

const perspective: {
  initial: { opacity: number; y: number };
  enter: (i: number) => { opacity: number; y: number ; transition: { delay: number } };
  exit: { opacity: number; y: number };
} = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.15,
    },
  }),
  exit: {
    y: 0,
    opacity: 0,
  },
};

export default function Home() {
  
  function firstCap (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const { variants, isDarkMode, artVariants } = useTheme()

  return (
    <motion.div
      variants={variants}
      animate={isDarkMode ? 'nightMode' : 'lightMode'}>
      <Header></Header>
      <main className="mx-5 md:mx-10 pt-40">
        <div className="py-2 font-bold flex gap-1">
          <p className="">All Works</p>
          <p className="text-xs">({works.length})</p>
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {works.map((elem, i) => {
            return(
              <motion.li 
                variants={perspective}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={i} 
                className="col-span-3 text-xs pb-8">
                <Link href={`/projects/${elem.title}`}>
                  <article 
                    style={{borderBottomColor: isDarkMode ? '#333333': '#EBEBEB'}}
                    className="lg:max-w-[446px] pb-3 border-b">
                    <motion.div 
                      variants={artVariants}
                      animate={isDarkMode ? 'nightMode' : 'lightMode'}
                      whileHover={{backgroundColor: '#EBEBEB'}}
                      className="px-5 py-10 max-h-[380px] overflow-hidden rounded cursor-pointer duration-200">
                      <div className="overflow-hidden h-52 md:h-60">
                        <Image src={`/${elem.img}`} alt={elem.title} width={1000} height={1000} priority={true}/>
                      </div>
                    </motion.div>
                    <div className="py-2">
                      <div className="flex justify-between">
                        <p className="text-sm">{firstCap(elem.title)}</p>
                        <p>{`0${i + 1}`}</p>
                      </div>
                      <ul className='flex gap-1 text-[#9B9B9B]'>{elem.rol.map((el, i) => {
                          return  <li key={i}>{el}</li>
                  })}</ul>
                    </div>
                  </article>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </main>
      <Footer></ Footer>
    </motion.div>
  );
}
