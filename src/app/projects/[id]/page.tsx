import { works } from '../../data/data'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Project from '@/app/components/Project'

export default async function page({ params } : { params: Promise<{ id: string }> }) {

    const { id } = await params
    const work = works.find((elem) => elem.title === id)

    if(!work) {
        return <div>Not found</div>
    }
    return (
    <>
      <Header></Header>
      <Project project={work}></Project>
      <Footer></Footer>
    </>
  )
}
