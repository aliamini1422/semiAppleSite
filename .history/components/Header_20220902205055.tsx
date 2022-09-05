import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header >
          <Link href= "/">
            <div className='relative w-14 h-24 cursor-pointer opacity-75 t-2 transition hover:opacity-100'>
              <Image src="apple-3384010_1280.png" layout='fill' objectFit='contain'/>
            </div>
          </Link>
    </header>
  )
}

export default Header