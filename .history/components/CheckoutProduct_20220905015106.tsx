import { ChevronDownIcon } from '@heroicons/react/outline';
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
        <div>
            <div>
                <div className='flex flex-col'>
                    <h4 className='font-semibold lg:w-96'>{items[0].title}</h4>
                    <p className='flex items-end gap-x-1 font-semibold'>{items.length}
                    <ChevronDownIcon className='h-6 w-6 text-blue-500'/>
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct