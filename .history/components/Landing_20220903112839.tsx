import Image from 'next/image'
import React from 'react'

function Landing() {
  return (
    <section className='sticky top-0 mx-auto h-screen max-w-[1350px] flex items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text'>Powered</span>
                <span className='block'>By Intellect</span>
                <span className='block'>Driven By Values</span>
            </h1>
            <div>
                <a href="/" className='link'>Learn More</a>
            </div>
        </div>
        <div>
            <Image src="/image/iphone.png"/>
        </div>
    </section>
  )
}

export default Landing