import Head from 'next/head'
import { client } from '../../SanityClient'

import imageUrlBuilder from '@sanity/image-url'
import ProductCard from '@/components/products/ProductCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay} from "swiper";
import MainSlideShow from '@/components/homepage/MainSlideShow';

export default function Home({products}) {
  const builder = imageUrlBuilder(client)
    function urlFor(source){
        return builder.image(source)
    }
  return (
    <>
      <Head>
        <title>NextCommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* pt-[10vh] places this element below the navbar: */}
      <main className='pt-[10vh] w-full h-full'> 
          <MainSlideShow/>
          <section className='max-w-[1600px] mx-auto p-5'>
                {/* This will be the homepage's content. It's going to be in categories: */}
                <section className='w-full'>
                      <h1 className="text-center text-clash font-semibold text-2xl uppercase">Featured Items:</h1>
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
                              if(item.isFeatured == true){
                                return(
                                <SwiperSlide key={item.slug.current}>
                                  <ProductCard key={item.slug.current}
                                  name={item.name}
                                  brand={item.brand}
                                  price={item.price}
                                  slug={item.slug.current}
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
                             if(item.isFeatured == true){
                              return(
                              <SwiperSlide className='' key={item.slug.current}>
                                <ProductCard key={item.slug.current}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                slug={item.slug.current}
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
                             if(item.isFeatured == true){
                              return(
                              <SwiperSlide className='' key={item.slug.current}>
                                <ProductCard key={item.slug.current}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                slug={item.slug.current}
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
                                  slug={item.slug.current}
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
                                slug={item.slug.current}
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
                                slug={item.slug.current}
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
          </section>
      </main>
    </>
  )
}


export async function  getStaticProps(){
  const products = await client.fetch(`*[_type == "product"]`)
  return{
    props:{
      products
    }
  }
}