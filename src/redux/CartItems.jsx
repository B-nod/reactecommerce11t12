import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItems from './ChangeItems'

const CartItems = () => {
    const data = useSelector(store=>store.initialData)
  return (
    <>
        <h1 className='text-center pt-10'>The number of product present in a cart is {data.cartData}</h1>
        <ChangeItems/>
    </>
  )
}

export default CartItems