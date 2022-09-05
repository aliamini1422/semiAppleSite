import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import { useState, useEffect } from 'react';

function checkout() {
    const items = useSelector(selectBasketItems); 
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({} as {[key: string]: Product []});


    useEffect(()=>{
        const groupedItems = items.reduce((results, item)=>{
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        },{} as {[key: string]: Product []})
    },[]);
  return (
    <div>
        <Header />
        <main>
            <div>
                <h1>{items.length > 0 ? "Review your bag" : "Your bag is empty."}</h1>
            </div>
            <p>Free delivery and free returns.</p>
            {items.length === 0 && (<Button title='Continue Shopping' onClick={()=>router.push("/")} />)}

        </main>
    </div>
  )
}

export default checkout