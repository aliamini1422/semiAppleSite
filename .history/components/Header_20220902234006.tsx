import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {SearchIcon, UserIcon} from "@heroicons/react/outline";
function Header() {
  return (
    <header className='sticky top-0 w-full z-30 flex items-center justify-between bg-[#E7ECEE] pt-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href= "/">
          <div className='relative w-5 h-10 cursor-pointer opacity-75  transition hover:opacity-100'>
            <Image src="1667px-Apple_logo_black.svg.png" layout='fill' objectFit='contain'/>
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a className='headerLink' href="/">Product</a>
        <a className='headerLink' href="/">Explore</a>
        <a className='headerLink' href="/">Support</a>
        <a className='headerLink' href="/">Business</a>
      </div>
    </header>
  )
}

export default Header