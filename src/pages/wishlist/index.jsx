import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useBearStore } from '../../../zustand/Store'
import { ToastContainer, toast } from 'react-toastify';

function index() {
  const wishlist = useBearStore((state)=>state.wishlist.items)
  const removeItemFromWishList = useBearStore((state)=>state.removeFromWishList)

  function removeFromWishList (newItemToBeAdded){
    removeItemFromWishList(newItemToBeAdded)
    toast.error(`Item was removed to your Wishlist.`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}
    
  return (
    <>
         <Head>
            <title>NextCommerce | Wishlist</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='pt-[12vh] text-clash'>
            <section className="p-5">
                {
                    wishlist.length >0?
                    wishlist.map((item)=>{
                        const newItemToBeAdded = {
                            id:item.id,
                            name:item.name,
                            price:item.price,
                            qtyInCart:item.qtyInCart,
                            totalAmount:item.totalAmount
                        }
                        return(
                            <section key={item.id}>
                                <section className='border border-black text-clash my-2 p-5' key={item.id}>
                                    <section className="flex justify-between items-center">
                                        <p>{item.name}</p>
                                        <p>$ {item.price}</p>
                                    </section>
                                    <br />
                                    <section className='flex justify-between items-center'>
                                        <AiOutlineDelete size={30} className='cursor-pointer hover:scale-105 ease duration-300' onClick={()=>removeFromWishList(item.id)}/>
                                    </section>
                                </section>
                            </section>
                        )
                    })
                    :
                    <section>
                        <p className='text-clash uppercase my-5 text-center lg:text-3xl font-semibold'>your wishlist is empty.</p>
                        <Link href={`/`}>
                        <button className='border w-full text-center py-2 uppercase my-3 hover:scale-95 ease duration-500 text-clash'>Go Shopping</button>
                        </Link>
                    </section>
                }
            </section>
        </main>
        <ToastContainer/>
    </>
  )
}

export default index