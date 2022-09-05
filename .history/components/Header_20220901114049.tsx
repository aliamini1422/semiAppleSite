import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-14 h-24 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image src="vsvv2o" layout='fill' objectFit='contain'/>
        </div>
    </header>
  )
}

export default Header