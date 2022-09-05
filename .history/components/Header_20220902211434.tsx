import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 w-full '>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href= "/">
          <div className='relative w-16 h-14 cursor-pointer opacity-75   transition hover:opacity-100'>
            <Image src="apple-3384010_1280.png" layout='fill' objectFit='cover'/>
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