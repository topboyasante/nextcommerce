import React, { useState } from 'react'
import SearchBar from './SearchBar'

import {FiShoppingBag} from 'react-icons/fi'
import { useBearStore } from '../../../zustand/Store'
import Link from 'next/link'

function Navbar() {
  const cart = useBearStore((state)=>state.cart.items)
  const [openCart,setOpenCart] = useState(false)

  function toggleCart(){
    setOpenCart(!openCart)
  }

  return (
      <>
        <nav className='fixed w-full border-b border-b-black  bg-white z-50 lg:h-[15vh]'>
            <div className='h-[30%] p-2 text-center text-clash uppercase text-bold bg-black text-white'>Worldwide Shipping Available.</div>
          <section className='flex flex-col md:flex-row justify-between items-center p-5 h-[70%]'>
              {/* Logo */}
              <Link href={`/`}>
                  <p className='text-clash font-bold text-2xl'>nextcommerce</p>
              </Link>
              <section className='flex items-center gap-5'>
                  <SearchBar/>
                  <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:scale-105 ease duration-500" onClick={toggleCart}>
                    <FiShoppingBag size={30}/>
                    <div className="text-clash absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black p-3 rounded-full -top-2 -right-2">{cart.length}</div>
                </button>
              </section>
          </section>
        </nav>

          <section className='relative' onClick={toggleCart}>
              <div className={openCart?"fixed top-0 left-0 w-screen h-full bg-black opacity-90 z-[60] ease duration-500":
            "fixed top-0 left-[-100vw] w-screen h-full bg-black opacity-90 z-[60] ease duration-500"} 
            onClick={toggleCart}></div>
              <div className={openCart?"fixed top-0 right-0 w-[50%] h-screen bg-white text-black z-[60] ease duration-500 p-5":
            "fixed top-0 right-[-100vw] w-[50%] h-screen bg-white text-black z-[60] ease duration-500 p-5"}>
                 <section className='border border-black text-clash py-2'>
                    <p className='text-center uppercase font-semibold text-xl'>Your Cart :</p>
                 </section>
                 <section>
                  {cart.length > 0?
                    cart.map((item)=>{
                      return(
                        <section className='border border-black text-clash my-2 p-5' key={item.id}>
                          <section className="flex justify-between items-center">
                            <p>{item.name}</p>
                            <p>$ {item.price}</p>
                          </section>
                        </section>
                      )
                    })
                    :
                    <p className='text-clash uppercase my-5 text-center lg:text-3xl font-semibold'>your cart is empty.</p>
                  }
                 </section>
              </div>
          </section>
    </>
  )
}

export default Navbar