import React from 'react'
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className=''>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <img src="../logo.png" className='h-14' alt="" />
        </NavLink>
        <div className='flex font-medium mr-5 space-x-6 text-slate-100 justify-center items-center'>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaOpencart className='text-2xl'/>
            <p className=''>
              {
                cart.length > 0 &&
                <p className='absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center rounded-full animate-bounce'>{cart.length}</p>
              }
            </p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar