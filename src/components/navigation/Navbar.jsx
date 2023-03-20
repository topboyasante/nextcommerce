import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className='fixed w-full border-b border-b-black  bg-white z-50'>
        <div className='h-[20%] p-2 text-center text-clash uppercase text-bold bg-black text-white'>Worldwide Shipping Available.</div>
       <section className='flex flex-col md:flex-row justify-between items-center p-5 h-[80%]'>
          {/* Logo */}
          <section>
              <p className='text-clash font-bold text-2xl'>nextcommerce</p>
          </section>
          <section>
              <SearchBar/>
          </section>
       </section>
    </nav>
  )
}

export default Navbar