import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add,remove}  from '../Redux/Slices/CardSlice';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart");
  }
  return (
    <div className='flex flex-col justify-between hover:scale-110 transition duration-300 ease-in items-center shadow-card mt-10 ml-5 rounded-xl gap-3 p-4 hover:shadow-hover'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 font-normal text-[10px] text-left text-gray-400'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='w-full h-full' alt="" />
      </div>
      <div className='flex gap-12 w-full items-center justify-between mt-5'>
         <div>
        <p className='font-semibold text-green-600'>${post.price}</p>
      </div>
      <div className='hover:shadow-hover rounded-full'>
        {
          cart.some((p)=>p.id == post.id) ?
        
          <button className=' hover:shadow-2xl  rounded-full text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>remove item</button> :
          
          <button className=' hover:shadow-2xl rounded-full text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to cart</button>
          
        }
      </div>
      </div>
     
    </div>
  )
}

export default Product