import Link from 'next/link'
import React from 'react'

function ProductCard({img,name,price,brand,slug}) {
  const formattedPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);

  return (
    <Link href={slug}>
      <main className='border border-black hover:scale-95 ease duration-500 bg-white p-5 w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px] mx-auto'>
          <img src={img} alt={name} className='w-full mx-auto'/>
          <hr className='my-5' />
            <section className='text-clash text-center'>
              <p className='font-semibold lg:text-[0.8em] uppercase tracking-wider truncate'>{name}</p>
              <p>{formattedPrice}</p>
              <p>{brand}</p>
            </section>
      </main>
    </Link>
  )
}

export default ProductCard