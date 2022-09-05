import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
interface Props{
    product: Product;
}

function Product({product}: Props) {
  return (
    <div>
        <div>
            <Image src={urlFor(product.image[0]).url()}/>
        </div>
    </div>
  )
}

export default Product