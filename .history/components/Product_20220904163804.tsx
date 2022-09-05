import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
interface Props{
    product: Product;
}

function Product({product}: Props) {
  return (
    <div className='flex h-fit w-[320px] select-none '>
        <div className='relative w-full h-64 md:h-72'>
            <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit='contain'/>
        </div>
    </div>
  )
}

export default Product