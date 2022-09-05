import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-52 h-44'>
            <Image src="apple-3384010_1280.png" layout='fill' objectFit='contain'/>
        </div>
    </header>
  )
}

export default Header