"use client"

import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { works } from "./data/data"
import { motion } from "framer-motion";
import Image from "next/image";

const perspective: {
  initial: { opacity: number };
  enter: (i: number) => { opacity: number; transition: { delay: number } };
  exit: { opacity: number };
} = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.2,
    },
  }),
  exit: {
    opacity: 0,
  },
};


export default function Home() {

  function firstCap (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div>
      <Header></Header>
      <ul className="mx-5 md:mx-10 my-20 flex flex-col md:flex-row justify-between flex-wrap">
        {works.map((elem, i) => {
          return(
            <motion.li 
              variants={perspective}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={i} className="md:w-[33%] text-xs text-[#333333] pb-10">
              <Link href={`/projects/${elem.title}`}>
                <article className="lg:max-w-[446px] pb-6 border-b border-[#EBEBEB]">
                  <div className="px-5 py-10 bg-[#F5F5F5] max-h-[380px] overflow-hidden rounded hover:bg-[#EBEBEB] cursor-pointer duration-200">
                    <div className="overflow-hidden h-52 md:h-60">
                      <Image src={`/${elem.img}`} alt={elem.title} width={1000} height={1000} priority={true}/>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between">
                      <p className="text-sm">{firstCap(elem.title)}</p>
                      <p>{`0${i + 1}`}</p>
                    </div>
                    <p className="text-[#9B9B9B]">{elem.rol}</p>
                  </div>
                </article>
              </Link>
            </motion.li>
          )
        })}
      </ul>
      <Footer></ Footer>
    </div>
  );
}
