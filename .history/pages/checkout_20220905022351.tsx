import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import CheckoutProduct from '../components/CheckoutProduct';

function checkout() {
    const items = useSelector(selectBasketItems); 
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({} as {[key: string]: Product []});


    useEffect(()=>{
        const groupedItems = items.reduce((results, item)=>{
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        },{} as {[key: string]: Product []})
        setGroupedItemsInBasket(groupedItems);
    },[items]);



  return (
    <div className='min-h-screen overflow-hidden bg-[#E7ECEE]'>
        <Header />
        <main className='mx-auto max-w-5xl pb-24'>
            <div className='px-5 '>
                <h1>{items.length > 0 ? "Review your bag" : "Your bag is empty."}</h1>
            </div>
            <p>Free delivery and free returns.</p>
            {items.length === 0 && (<Button title='Continue Shopping' onClick={()=>router.push("/")} />)}
            <div>
                {items.length > 0 && (
                    <div className='mx-8 md:mx-16'>
                        {Object.entries(groupedItemsInBasket).map(([key, items]) =>(
                            <CheckoutProduct key={key} items={items} id={key} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    </div>
  )
}

export default checkout