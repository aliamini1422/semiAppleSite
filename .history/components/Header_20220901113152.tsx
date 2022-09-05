import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-11'>
            <Image src="apple-3384010_1280.png" width={250} height={250}/>
        </div>
    </header>
  )
}

export default Header