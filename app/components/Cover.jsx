import React from 'react'
import '../globals.css'
import Emoji from './Emoji'
import Contact from './Contact'

export default function Cover() {
  return (
    <>
      <div className='lg:hidden mt-6'>
        <Emoji />
      </div>
      <div className='flex justify-center mt-6 mb-16 lg:hidden'>
        <Contact />
      </div>
      <div className='cover-text flex max-w-fit justify-center lg:justify-center text-2xl text-center lg:text-left mx-6 lg:text-6xl/[72px] lg:w-[1100px] lg:mx-36 lg:mt-20 font-bold lg:tracking-[1px]'>
        <p> Merhaba ben Uğur Şeker, öğrenmeyi ve takım çalışmasını seven bir Frontend geliştiricisiyim</p>
      </div>
    </>
  )
}
