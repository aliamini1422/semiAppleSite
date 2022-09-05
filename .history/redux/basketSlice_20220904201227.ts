import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface BasketState {
  items:Product[]
}

// Define the initial state using that type
const initialState: BasketState = {
  items:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action:PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: BasketState, action:PayloadAction<{id:string}>) => {
      const index = state.items.findIndex((item:Product)=>item._id === action.payload.id);
      let newBasket = [...state.items];
      if (index >=0) {
        
      } else {
        
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = basketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.basket.value

export default basketSlice.reducer