import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-11'>
          <img src="https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png" alt="" />
            <Image src="https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png" width={250} height={250}/>
        </div>
    </header>
  )
}

export default Header