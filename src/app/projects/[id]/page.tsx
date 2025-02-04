import { works } from '../../data/data'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Menu from '@/app/components/Menu'
import Image from '@/app/components/Image'


export default async function page({ params } : { params: Promise<{ id: string }> }) {
    
    const { id } = await params
    const work = works.find((elem) => elem.title === id)

    if(!work) {
        return <div>Not found</div>
    }
    return (
    <>
      <Header></Header>
      <div className='flex mx-5 my-20 md:mx-10 justify-between text-[#333333] relative'>
        <Image image={`/${work.img}`} title={work.title}></Image>
        <Menu title={work?.title ?? "No title"} rol={work?.rol ?? "No rol"} techs={work.technologys} url={work?.url ?? "No url"}></Menu>
      </div>
      <Footer></Footer>
    </>
  )
}
