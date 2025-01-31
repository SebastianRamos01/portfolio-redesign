import { works } from '../../data/data'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Menu from '@/app/components/Menu'


export default async function page({ params } : { params: Promise<{ id: string }> }) {
    
    const { id } = await params
    const work = works.find((elem) => elem.title === id)

    if(!work) {
        return <div>Not found</div>
    }
    return (
    <>
      <Header></Header>
      <div className='flex mx-5 my-20 md:mx-10 justify-between text-[#333333]'>
        <div className="px-5 py-10 bg-[#F5F5F5] md:w-[65%] rounded">
          <img src={`/${work?.img}`} alt={work?.title} />
        </div>
        <Menu title={work?.title ?? "No title"} rol={work?.rol ?? "No rol"} url={work?.url ?? "No url"}></Menu>
        <aside className='bg-[#F5F5F5] min-w-[440px] h-full text-xs px-5 py-10 hidden lg:block'>
          <h6 className='text-base'>
            {work?.title}
          </h6>
          <ul>
            <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B]'>Rol</p>
              <p className='text-base'>{work?.rol}</p>
            </li>
            <li className='flex justify-between border-b border-[#EBEBEB] py-3'>
              <p className='text-[#9B9B9B]'>URL</p>
              <p className='text-base'>{work?.url ? work.url : "Not found"}</p>
            </li>
          </ul>
        </aside>
      </div>
      <Footer></Footer>
    </>
  )
}
