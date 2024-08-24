import React from 'react'
import { copyrightSign } from "../assets";

import logo from "../assets/logo3.png"
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (<>
    <footer className='max-container mx-24  border-b-2 border-dotted
     border-neutral-700 '>
   


<div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
  <div className='flex flex-col items-start'>
    <a href='/'>
      <img
        src={logo}
        alt='logo'
        width={150}
        height={46}
        className='m-0'
      />
    </a>
    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
     Order "Delicious Foods, Delivered at Your Doorstep" with Care &hearts;</p>
    <div className='flex items-center gap-5 mt-8'>
      {socialMedia.map((icon) => (
        <div
          className='flex justify-center cursor-pointer  items-center w-12 h-12 bg-white rounded-full'
          key={icon.alt}
        >
          <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </div>
      ))}
    </div>
  </div>

  <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
    {footerLinks.map((section) => (
      <div key={section.title}>
        
        <h2 style={{ fontSize: '3vh', fontWeight: 'bold',  marginBottom: '2vh' }}>{section.name2}
          
        </h2>
        <ul>
          {section.links.map((link) => (
            <li
              className='mt-3 mx-2 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
              key={link.name2}
            >
              <a href={link.link}>{link.name2}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

<div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
  <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
    <img
      src={copyrightSign}
      alt='copyright sign'
      width={20}
      height={20}
      className='rounded-full m-0'
    />
   <p className='text-lg text-center' >2024 All rights reserved.</p>
  </div>
  <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
</div>

</footer>
<div className="mb-8 mt-20 ">
          <p className='mt-8 text-lg text-center '>Designed and Developed with &hearts; by Vijay Kumar</p>
            </div></>
   
  )
}

export default Footer