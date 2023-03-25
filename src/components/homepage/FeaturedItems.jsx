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

function FeaturedItems({products}) {
  return (
    <>
    {/* This will be the homepage's content. It's going to be in categories: */}
    <section className='w-full'>
                      <h1 className="text-center text-clash font-semibold text-2xl uppercase">Featured Items:</h1>
                      <br />
                      {/* Content Shows Here */}

                      {/* Large Screens */}
                      <section className="hidden lg:block">
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={2}
                          pagination={{
                            clickable: true,
                          }}
                          loop={true}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                          modules={[Pagination,Autoplay]}
                          className=''
                        >
                          { 
                            products.map((item)=>{
                              if(item.isFeatured == true){
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
                        slidesPerView={3}
                        spaceBetween={2}
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
                             if(item.isFeatured == true){
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
                        spaceBetween={0}
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
                             if(item.isFeatured == true){
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

export default FeaturedItems