import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
interface Props{
    items: Product [];
    id:string;
}
function CheckoutProduct({items, id}:Props) {
  return (
    <div>
        <div className='relative w-44 h-44'>
            <Image src={urlFor(items[0].image[0]).url()} layout="fill" objectFit='contain'/>
        </div>
    </div>
  )
}

export default CheckoutProduct