import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const message = 'Hello! I"m Sebas, a web developer and designer from Argentina, with 2 years of experience creating engaging and functional digital experiences for small bussiness and freelancers. I like to combine deep technical knowledge in web development with a user-centered approach and aesthetic design. I also create websites that not only look good, but also offer an intuitive, performance-optimized user experience.'

export default function page() {
  return (
    <div className='h-screen flex flex-col justify-between text-sm'>
        <Header></Header>
        <div className='mx-5 lg:mx-10 my-20'>
          <p className='w-96 text-[#9B9B9B]'>
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
