import { unknownListItemStyleWarning } from '@portabletext/react/src/warnings'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';


function checkout() {
    const items = useSelector(selectBasketItems); 
  return (
    <div>
        <Header />
        <main>
            <div>
                <h1>{items.length > 0 ? "Review your bag" : "Your bag is empty."}</h1>
            </div>
            <p>Free delivery and free returns.</p>
        </main>
    </div>
  )
}

export default checkout