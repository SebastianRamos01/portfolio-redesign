import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const message = "Hello! I'm Sebas, a web developer and designer from Argentina, with 2 years of experience creating engaging and functional digital experiences for small bussiness and freelancers. I like to combine deep technical knowledge in web development with a user-centered approach and aesthetic design. I also create websites that not only look good, but also offer an intuitive, performance-optimized user experience."

function underlinesWords(words: string): React.ReactNode {
  const wordsUnderlined = [
    "web", "developer", "designer", "digital", "experiences", "small", "bussiness",
    "freelancers.", "technical", "knowledge",
    "user-centered", "approach", "for", "design", "websites", "intuitive",
    "performance-optimized", "experience", "i'm", "with" , "creating",
  ];

  const newWords = words.split(' ').map((word, i) => {
    const lowerCaseWord = word.toLowerCase();
    if (wordsUnderlined.includes(lowerCaseWord)) {
      return <span key={i} className='text-[#333333] mr-[2px]'>{word}</span>;
    } else {
      return <React.Fragment key={i}> <span>{word}</span> </React.Fragment>;
    }
  });
  return <>{newWords}</>;
}

export default function page() {
  return (
    <div className='h-screen flex flex-col justify-between text-sm'>
        <Header></Header>
        <div className='mx-5 lg:mx-10 my-20'>
          <p className='w-96 text-[#9B9B9B]'>
            {underlinesWords(message)}
          </p>
          <div className='py-3'>
            <p>
              For Contact
            </p>
            <a className='text-[#9B9B9B] hover:text-[#333333]' href="mailto:sebasm.sr@gmail.com">Gmail</a>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
