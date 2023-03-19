import React from 'react'

function ProductCard({img,name,price,brand,featured}) {
  return (
    <main className='border border-black hover:scale-105 ease duration-500 bg-white p-5'>
        <img src={img} alt={name} className='w-[200px] mx-auto'/>
        <hr className='my-5' />
          <section className='text-clash text-center'>
            <p className='font-semibold text-xl'>{name}</p>
            <p>$ {price}</p>
            <p>{brand}</p>
          </section>
    </main>
  )
}

export default ProductCard