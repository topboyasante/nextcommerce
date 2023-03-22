import Head from 'next/head'
import React, { useState } from 'react'
import { client } from '../../../SanityClient'

import imageUrlBuilder from '@sanity/image-url'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useBearStore } from '../../../zustand/Store';
import SizeList from '@/components/products/SizeList';

//React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function index({product}) {
  const cart = useBearStore((state)=>state.cart.items)
  const addItemToCart = useBearStore((state)=>state.addItemToCart)
  const increaseItem = useBearStore((state)=>state.increaseItem)
  const reduceItem = useBearStore((state)=>state.reduceItem)

 
    //Slideshow States
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const builder = imageUrlBuilder(client)
    function urlFor(source){
        return builder.image(source)
    }

    const newItemToBeAdded = {
        id:product.slug.current,
        name:product.name,
        price:product.price,
        qtyInCart:product.qtyInCart,
        totalAmount:product.totalAmount
      }
    
    function addToCart (){
        addItemToCart(newItemToBeAdded)
        toast.success(`${product.name} was added to your cart.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
    function increaseItemInCart(){
        increaseItem(product.qtyInCart)
    }
    function reduceItemInCart(){
        reduceItem(newItemToBeAdded)
    }


  return (
    <>
        <Head>
            <title>{product.name}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='pt-[18vh] text-clash'>
            <section className='w-full p-5'>
                <section className='flex flex-col lg:flex-row justify-between items-center gap-5'>
                    <section className='w-full lg:w-[45%] border border-black p-3'>
                    <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        {
                          product.image.map((item)=>{
                            return(
                              <SwiperSlide key={item._key}>
                                <img src={urlFor(item.asset).width(350).url()} alt={`house`} className=' mx-auto'/>
                              </SwiperSlide>
                            )
                          })
                        }
                      </Swiper>
                        <hr className='border-black my-5'/>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                       {
                        product.image.map((item)=>{
                          return(
                            <SwiperSlide key={item._key}>
                            <img src={urlFor(item.asset).width(150).url()} alt={`house`} className='w-full '/>
                            </SwiperSlide>
                          )
                        })
                       }
                      </Swiper>
                    </section>
                    <section className='container lg:w-[50%]'>
                        <div className='flex justify-between font-semibold lg:text-2xl'>
                            <p>{product.name}</p>
                            <p>$ {product.price}</p>
                        </div>
                        <hr className='my-3 border-black' />
                        <p>{product.details}</p>

                        {/* Counter */}
                        <div className='flex gap-3 justify-center items-center w-[100px] my-3'>
                                <button className='bg-black text-white w-[30%] text-xl hover:scale-105 ease duration-500' onClick={reduceItemInCart}>-</button>
                                <p className='text-center w-[40%] text-xl'>{product.qtyInCart}</p>
                                <button className='bg-black text-white w-[30%] text-xl hover:scale-105 ease duration-500' onClick={increaseItemInCart}>+</button>
                        </div>

                        <section>
                            <p className='font-semibold lg:text-2xl uppercase'>sizes:</p>
                            <SizeList/>
                        </section>

                        <button className='border w-full text-center py-2 uppercase my-3 hover:scale-105 ease duration-500'>Checkout</button>
                        <button className='bg-black text-white w-full text-center py-2 uppercase my-3 hover:scale-105 ease duration-500' onClick={addToCart} >Add To Cart</button>
                    </section>
                </section>
            </section>
            <div className="text-clash">
            <ToastContainer/>
            </div>
        </main>
    </>
  )
}

export default index

export async function getStaticPaths(){
    const query = `*[_type == "product"]
    {
      slug{
        current
      }
    }`
    const product = await client.fetch(query)
  
    const paths = product.map((item)=>({
      params:{
        slug:item.slug.current
      }
    }))
  
    return{
      paths,
      fallback:'blocking'
    }
}

export async function  getStaticProps({params:{slug}}){
    const query = `*[_type == "product"  && slug.current == '${slug}'][0]`
    const product = await client.fetch(query)
    return{
      props:{
        product
      }
    }
  }