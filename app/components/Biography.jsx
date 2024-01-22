import React from 'react'
import '../globals.css'
import Emoji from './Emoji'
import Contact from './Contact'

function Biography() {
  return (
    <div className='lg:mx-36 lg:mt-16 lg:flex lg:justify-between lg:items-center '>
      <div className='cover-emoji lg:relative lg:w-max lg:flex lg:items-center text-center'>
        <div className='hidden lg:block'>
          <Emoji />
        </div>
        <div className='lg:ml-9 mx-6 mt-16 lg:mt-0'>
          <h2 className='text-[#FBFBFB] text-xl/8 lg:text-[28px]/[72px] tracking-[1px] font-bold text-center lg:text-left'>
            Biyografi
          </h2>
          <div className='text-[#D6D6D6] text-sm/6 md:text-center lg:text-left lg:text-lg/8 font-normal max-w-fit lg:max-w-none lg:w-[500px]'>
            3 seneyi aşkın süredir Frontend geliştirici olarak çalışıyorum.
            Şu anda <span className='text-[#5D5BEA]'>Hangi</span><span className='text-[#ff6000]'>kredi</span> bünyesinde çalışmaktayım. Projelerimde Genellikle <span className='next-text'>Next.js</span>, <span className='text-[#764ABC]'>Redux Toolkit</span>, <span className='text-[#1A50C9]'>Zustand</span> ve <span className='text-sky-500'>TailwindCSS</span> kullanmaktayım.
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <Contact />
      </div>
    </div >
  )
}

export default Biography