import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-11 h-8'>
            <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit='contain'/>
        </div>
    </header>
  )
}

export default Header