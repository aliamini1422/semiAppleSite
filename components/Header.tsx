import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import {SearchIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/outline';
import { selectBasketItems } from '../redux/basketSlice';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
function Header() {
  const router = useRouter();
  const items = useSelector(selectBasketItems);
  // const session = false;
  const {data:session} = useSession();


  return (
    <header className='sticky top-0 w-full z-30 flex items-center justify-between bg-[#E7ECEE] pt-4 px-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href= "/">
          <div className='relative w-5 h-10 cursor-pointer opacity-75  transition hover:opacity-100'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" layout='fill' objectFit='contain'/>
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a className='headerLink' href="/">Product</a>
        <a className='headerLink' href="/">Explore</a>
        <a className='headerLink' href="/">Support</a>
        <a className='headerLink' href="/">Business</a>
      </div>
      <div className='flex gap-x-4 items-center justify-center md:w-1/5'>
        <SearchIcon className='headerIcon'/>
        <div className='relative cursor-pointer'>
          <span className='absolute -right-1 -top-1 z-30 flex items-center w-4 h-4 justify-center bg-gradient-to-r from-pink-500 to-violet-500
          rounded-full text-[10px] text-white'>{items.length}</span>
          <ShoppingBagIcon className='headerIcon' onClick={()=>{router.push("/checkout")}}/>
        </div>
        {session ? (  <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />):
         (<UserIcon className='headerIcon' onClick={() => signIn()}/>)}
      </div>
    </header>
  )
}

export default Header