import React from 'react'
import SearchBar from './SearchBar'

import {FiShoppingBag} from 'react-icons/fi'
import { useBearStore } from '../../../zustand/Store'

function Navbar() {
  const cart = useBearStore((state)=>state.cart.items)

  return (
    <nav className='fixed w-full border-b border-b-black  bg-white z-50 h-[15vh]'>
        <div className='h-[30%] p-2 text-center text-clash uppercase text-bold bg-black text-white'>Worldwide Shipping Available.</div>
       <section className='flex flex-col md:flex-row justify-between items-center p-5 h-[70%]'>
          {/* Logo */}
          <section>
              <p className='text-clash font-bold text-2xl'>nextcommerce</p>
          </section>
          <section className='flex items-center gap-5'>
              <SearchBar/>
              <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center hover:scale-105 ease duration-500">
                <FiShoppingBag size={30}/>
                <div className="text-clash absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black p-3 rounded-full -top-2 -right-2">{cart.length}</div>
            </button>
          </section>
       </section>
    </nav>
  )
}

export default Navbar