import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-14 h-24 cursor-pointer opacity-75 transition hover:opacity-100'>
          <Link href= "/">
            <Image src="apple-3384010_1280.png" layout='fill' objectFit='contain'/>
          </Link>
        </div>
    </header>
  )
}

export default Header