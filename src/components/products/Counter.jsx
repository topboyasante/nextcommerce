import React from 'react'

function Counter({qtyInCart,increaseItemInCart,reduceItemInCart}) {
  return (
    <div className='flex gap-3 justify-center items-center w-[100px] my-3'>
        <button className='bg-black text-white w-[30%] text-xl hover:scale-105 ease duration-500' onClick={reduceItemInCart}>-</button>
        <p className='text-center w-[40%] text-xl'>{qtyInCart}</p>
        <button className='bg-black text-white w-[30%] text-xl hover:scale-105 ease duration-500' onClick={increaseItemInCart}>+</button>
    </div>
  )
}

export default Counter