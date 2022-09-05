import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import { urlFor } from '../sanity';
interface Props{
    product: Product;
}

function Product({product}: Props) {
    const dispatch = useDispatch();

    const addItemToBasket =()=>{
        dispatch(addToBasket(product));
        toast.success(`${product.title} added to basket`, {position: "bottom-center" })
    }
  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl p-8 bg-white md:h-[500px] md:w-[400px] md:p-10'>
        <div className='relative w-full h-64 md:h-72'>
            <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit='contain'/>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-3'>
            <div className='space-y-2 text-xl font-medium md:text-2xl'>
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>
            <div className='w-16 h-16 bg-gradient-to-r from-pink-300 to-violet-400 rounded-full flex items-center
             justify-center cursor-pointer md:w-[66px] md:h-[66px]'>
                <ShoppingCartIcon className='w-8 h-8' onClick={addItemToBasket}/>
            </div>
        </div>
    </div>
  )
}

export default Product