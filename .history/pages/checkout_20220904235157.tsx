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
                <h1>{}</h1>
            </div>
        </main>
    </div>
  )
}

export default checkout