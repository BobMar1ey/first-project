import React from 'react'
import './Footer.css'

import facebook from '../../image/footer/facebook.svg';
import instagram from '../../image/footer/instagram.svg'
import twitter from '../../image/footer/twitter.svg'
import logo from '../../image/footer/logo.png'
export default function Footer() {
  return (
    <footer className='flex justify-between pb-[60px] pt-[60px] pl-[20px] pr-[20px] md:pl-[136px] md:pr-[136px] items-end'>
      <div data-aos="fade-up-right" className=' text-start'>
        <img src={logo} alt="logo" className='mb-[15px]'/>
        <p >Powered by Webflow</p>
        <p >All rights reserved Wishbone+Partners, Inc. Licensing</p>
      </div>
      <div  className='flex gap-[20px]'>
        <a  href="https://x.com/"><img src={twitter} alt="twitter" /></a>
        <a  href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
        <a  href="https://facebook.com"><img src={facebook} alt="facebook" /></a>
      </div>
    </footer>
  )
}
