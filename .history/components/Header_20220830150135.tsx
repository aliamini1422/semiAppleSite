import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header >
        <div className='relative w-11 h-8'>
            <Image src="https://images.unsplash.com/photo-1661638577145-c0b5fac9dba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" layout="fill" objectFit='contain'/>
        </div>
    </header>
  )
}

export default Header