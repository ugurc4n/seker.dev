import React from 'react'
import UgurEmo from '../assets/emoji.png'
import Ellipse from '../assets/ellipse.svg'
import Image from 'next/image'

function Emoji() {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='absolute'>
          <Image
            alt='emoji'
            src={UgurEmo}
            width={124}
            height={124}
          />
        </div>
        <Image
          alt='ellipse'
          src={Ellipse}
          width={155}
          height={155}
        />
      </div>
    </div>
  )
}

export default Emoji