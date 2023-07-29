import React from 'react'
import Image from 'next/image'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'
import Mail from '../assets/mail.svg'

function Contact() {
  return (
    <div>
      <div className='flex flex-col'>
        <h2 className='text-[#FBFBFB] text-[28px]/[72px] font-bold hidden lg:block'>İletişime Geç</h2>
        <div className='flex'>
          <div className='mr-4'>
            <a href='mailto:ugur@seker.dev' target='_blank'>
              <Image
                src={Mail}
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className='mr-4'>
            <a href='https://www.linkedin.com/in/ugur-seker/' target='_blank'>
              <Image
                src={Linkedin}
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className='mr-4'>
            <a href='https://www.instagram.com/uguurseker' target='_blank'>
              <Image
                src={Instagram}
                width={30}
                height={30}
              />
            </a>
          </div>
          <div>
            <a href='https://twitter.com/ugurseker0' target='_blank'>
              <Image
                src={Twitter}
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact