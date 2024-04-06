import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../Components/CartItem'
import Button from '../Components/Button'

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((accu,curr)=>accu+curr.price,0))
  },[cart]);

  return (
    <div>
      {
        cart.length === 0 ?

        (
          <div className='min-h-[80vh] flex justify-center items-center flex-col'>
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
            <NavLink to="/">
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shope now</button>
            </NavLink>
          </div>
        ) : 

        (
          <div className='max-w-[1200px] flex mx-auto flex-col md:flex-row'>
            <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
              {
                cart.map((item,index)=>(
                  <CartItem key={item.id} isLastItem={index === cart.length-1} item={item}/>
                ))
              }
            </div>
            <div className="w-[100%] md:w-[40%] mt-5 flex pb-10 justify-between flex-col">
              <div className='flex flex-col p-5 gap-6   h-[100%] '>
                <h1 className="font-semibold text-xl text-green-800 ">Your cart</h1>
                <h1 className="font-semibold text-5xl text-green-700  -mt-5">Summary</h1>
                <p className="text-gray-700 font-semibold text-xl capitalize">total items : {cart.length}</p>
              </div>
              <div>
                <div className="text-xl font-bold"> <span className=' text-gray-700 font-semibold capitalize'>Total amount: </span>${totalAmount}</div>
                
               {/* <Button/> */}
                <button className="bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart