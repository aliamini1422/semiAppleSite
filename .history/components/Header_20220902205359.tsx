import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header >
      <div>
        <Link href= "/">
          <div className='relative w-16 h-14 cursor-pointer opacity-75   transition hover:opacity-100'>
            <Image src="apple-3384010_1280.png" layout='fill' objectFit='cover'/>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header