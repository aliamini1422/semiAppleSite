import Image from 'next/future/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-11'>
            <Image src="https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png" layout="fill" objectFit='contain'/>
        </div>
    </header>
  )
}

export default Header