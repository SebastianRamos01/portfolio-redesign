import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { works } from "./data/data" 

export default function Home() {
  return (
    <div>
      <Header></Header>
      <ul className="mx-5 md:mx-10 my-20 flex flex-col md:flex-row justify-between flex-wrap">
        {works.map((elem, i) => {
          return(
            <li key={i} className="md:w-[33%] text-xs text-[#333333] pb-10">
              <Link href={`/projects/${elem.title}`}>
              <article className="lg:max-w-[446px] pb-6 border-b border-[#EBEBEB]">
                <div className="px-5 py-10 bg-[#F5F5F5] max-h-[380px] overflow-hidden rounded hover:bg-[#EBEBEB] cursor-pointer">
                  <div className="overflow-hidden h-52 md:h-60">
                    <img src={`/${elem.img}`} alt={elem.title} />
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex justify-between">
                    <p className="text-sm">{elem.title}</p>
                    <p>{i}</p>
                  </div>
                  <p className="text-[#9B9B9B]">{elem.rol}</p>
                </div>
              </article>
              </Link>
            </li>
          )
        })}
      </ul>
      <Footer></ Footer>
    </div>
  );
}
