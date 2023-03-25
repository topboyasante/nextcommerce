import React from 'react'

import { client } from '../../../SanityClient';

import imageUrlBuilder from '@sanity/image-url'
import ProductCard from '@/components/products/ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay} from "swiper";

const builder = imageUrlBuilder(client)
    function urlFor(source){
        return builder.image(source)
    }

function TodaysBrand({products}) {
  return (
    <>
     <section className='w-full h-[40vh] my-5 relative'>
                  <img src="https://cdn.haarshop.ch/catalog/category/banner_hackett_992x329.png" 
                  alt="img" className='w-full h-full object-cover object-top'/>
                  <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'></div>
                  <section className='absolute bottom-0 left-0 p-5 text-white'>
                    <p className='text-clash font-semibol lg:text-2xl'>Get Fantastic Discounts From Today's Featured Brand</p>
                  </section>
                </section>

                {/* Products By Hackett */}
                <section className='w-full'>
                      <h1 className="text-center text-clash font-semibold text-2xl uppercase">Featured Brand: Hackett</h1>
                      <br />
                      {/* Content Shows Here */}

                      {/* Large Screens */}
                      <section className="hidden lg:block">
                        <Swiper
                          slidesPerView={3}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          loop={true}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                          modules={[Pagination,Autoplay]}
                          
                        >
                          { 
                            products.map((item)=>{
                              if(item.brand == "Hackett"){
                                return(
                                <SwiperSlide key={item.slug.current}>
                                  <ProductCard key={item.slug.current}
                                  name={item.name}
                                  brand={item.brand}
                                  price={item.price}
                                  slug={`/product/${item.slug.current}`}
                                  img={urlFor(item.cover_image).width(1000).url()}
                                  />
                                </SwiperSlide>
                                )
                              }
                            })
                          }
                        </Swiper>
                      </section>

                      {/* Medium Screens */}
                      <section className="hidden md:block lg:hidden">
                      <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                      }}
                        modules={[Pagination,Autoplay]}
                        className=""
                      >
                        { 
                          products.map((item)=>{
                             if(item.brand == "Hackett"){
                              return(
                              <SwiperSlide className='' key={item.slug.current}>
                                <ProductCard key={item.slug.current}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                slug={`/product/${item.slug.current}`}
                                img={urlFor(item.cover_image).width(1000).url()}
                                />
                              </SwiperSlide>
                              )
                             }
                          })
                        }
                      </Swiper>
                      </section>

                      {/* Smaller Screens */}
                      <section className="sm:block md:hidden lg:hidden">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        loop={true}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                      }}
                        modules={[Pagination,Autoplay]}
                        className=""
                      >
                        { 
                          products.map((item)=>{
                             if(item.brand == "Hackett"){
                              return(
                              <SwiperSlide className='' key={item.slug.current}>
                                <ProductCard key={item.slug.current}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                slug={`/product/${item.slug.current}`}
                                img={urlFor(item.cover_image).width(1000).url()}
                                />
                              </SwiperSlide>
                              )
                             }
                          })
                        }
                      </Swiper>
                      </section>
                </section>
                </>
  )
}

export default TodaysBrand