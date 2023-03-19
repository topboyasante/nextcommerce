import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className='fixed w-full h-[10vh] m-1 p-5 border border-black flex justify-between items-center bg-white z-50'>
        {/* Logo */}
        <section>
            <p className='text-clash font-bold text-2xl'>nextcommerce</p>
        </section>
        <section>
            <SearchBar/>
        </section>
    </nav>
  )
}

export default Navbar