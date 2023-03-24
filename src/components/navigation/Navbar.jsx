import React, { useState } from 'react'
import SearchBar from './SearchBar'

import {FiShoppingBag} from 'react-icons/fi'
import {AiOutlineArrowRight,AiOutlineDelete} from 'react-icons/ai'
import { useBearStore } from '../../../zustand/Store'
import Link from 'next/link'
import Counter from '../products/Counter'

function Navbar() {
  const cart = useBearStore((state)=>state.cart.items)

  const removeFromCart = useBearStore((state)=>state.removeFromCart)
  const increaseItem = useBearStore((state)=>state.increaseItem)
  const reduceItem = useBearStore((state)=>state.reduceItem)
  const clearCart = useBearStore((state)=>state.clearCart)


  const [openCart,setOpenCart] = useState(false)

  function toggleCart(){
    setOpenCart(!openCart)
  }
 
  let totalPrice =  0
  cart.forEach((item)=>{
    totalPrice += (item.price) * item.qtyInCart
  })

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

          <section className='relative'>
              <div className={openCart?"fixed top-0 left-0 w-screen h-full bg-black opacity-90 z-[60] ease duration-500":
            "fixed top-0 left-[-100vw] w-screen h-full bg-black opacity-90 z-[60] ease duration-500"} 
            onClick={toggleCart}></div>
              <div className={openCart?"fixed top-0 right-0 w-[80%] lg:w-[50%] h-screen bg-white text-black z-[60] ease duration-500 p-5":
            "fixed top-0 right-[-100vw] w-[80%] lg:w-[50%] h-screen bg-white text-black z-[60] ease duration-500 p-5"}>
                 <section className='border border-black text-clash p-2 flex justify-between items-center'>
                    <p className='text-center uppercase font-semibold text-xl'>Your Cart :</p>
                   <section className='flex items-center gap-5'>
                    <AiOutlineDelete size={30} className='cursor-pointer hover:scale-105 ease duration-300' onClick={()=>clearCart()}/>
                    <AiOutlineArrowRight size={30} onClick={toggleCart} className='cursor-pointer hover:scale-105 ease duration-300'/>
                   </section>
                 </section>
                 <p className='border border-black w-full text-center py-2 uppercase my-3 text-clash font-semibold'>Total : $ {totalPrice}</p>
                 <section>
                  {
                  cart.length > 0?
                    cart.map((item)=>{
                      return(
                        <section className='border border-black text-clash my-2 p-5' key={item.id}>
                          <section className="flex justify-between items-center">
                            <p>{item.name}</p>
                            <p>$ {item.price * item.qtyInCart}</p>
                          </section>
                          <br />
                          <section className='flex justify-between items-center'>
                            <Counter qtyInCart={item.qtyInCart} increaseItemInCart={()=>increaseItem(item)} reduceItemInCart={()=>reduceItem(item)}></Counter>
                            <AiOutlineDelete size={30} className='cursor-pointer hover:scale-105 ease duration-300' onClick={()=> removeFromCart(item.id)}/>
                          </section>
                        </section>
                      )
                    })
                    :
                   <section>
                     <p className='text-clash uppercase my-5 text-center lg:text-3xl font-semibold'>your cart is empty.</p>
                     <Link href={`/`}>
                      <button className='border w-full text-center py-2 uppercase my-3 hover:scale-95 ease duration-500 text-clash'>Go Shopping</button>
                     </Link>
                   </section>
                  }
                 </section>
                 <section>
                 <button className='border border-black bg-white w-full text-center py-2 uppercase my-3 hover:bg-black hover:text-white ease duration-500 text-clash'>Checkout</button>
                 </section>
              </div>
          </section>
    </>
  )
}

export default Navbar