import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header></Header>
        <div className='mx-10 my-20'>
          <p className='w-64 text-[#9B9B9B]'>
            All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing Front-End & Web Designer. You can copy and paste your own content in to see what it looks like with these font combinations.
          </p>
          <p className='py-3'>
            Soy About
          </p>
        </div>
        <Footer></Footer>
    </div>
  )
}
