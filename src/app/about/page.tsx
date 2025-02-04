import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const message = 'Hello! I"m Your Name, a passionate web developer and designer with Number years of experience creating engaging and functional digital experiences. I combine deep technical knowledge in web development with a user-centered approach and aesthetic design. I create websites that not only look great, but also offer an intuitive, performance-optimized user experience.'

export default function page() {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header></Header>
        <div className='mx-10 my-20'>
          <p className='w-64 text-[#9B9B9B]'>
            {message}
          </p>
          <p className='py-3'>
            Sign
          </p>
        </div>
        <Footer></Footer>
    </div>
  )
}
