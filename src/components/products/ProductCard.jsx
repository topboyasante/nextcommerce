import Link from 'next/link'
import React from 'react'

function ProductCard({img,name,price,brand,slug}) {
  return (
    <Link href={slug}>
      <main className='border border-black hover:scale-95 ease duration-500 bg-white '>
          <img src={img} alt={name} className='w-full h-[380px] lg:h-[700px] mx-auto'/>
            <section className='text-clash text-center p-5'>
              <hr className='my-5' />
              <p className='font-semibold lg:text-[0.8em] uppercase tracking-wider truncate'>{name}</p>
              <p>$ {price}</p>
              <p>{brand}</p>
            </section>
      </main>
    </Link>
  )
}

export default ProductCard