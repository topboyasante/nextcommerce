import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay} from "swiper";

function MainSlideShow() {
    const bgImages = [
        {
            id:0,
            img:'https://images.unsplash.com/photo-1484516396415-4971641de8e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
            header:'A new Polo Collection.',
            subtext:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, magni!'
        },
        {
            id:1,
            img:'https://images.unsplash.com/photo-1533835825768-478d38555d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            header:'Go hard or Go home.',
            subtext:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, magni!'
        },
        {
            id:2,
            img:'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            header:'Unleash the true alpha.',
            subtext:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, magni!'
        },
    ]
  return (
    <main className='w-screen h-full'>
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
                 className="w-full"
                >
                 {
                    bgImages.map((item)=>{
                        return(
                            <SwiperSlide className='w-screen h-full' key={item.id}>
                                <section className='w-screen h-[80vh] relative'>
                                    <img src={item.img} alt={item.id} className='w-full h-full object-cover '/>
                                    <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50'></div>
                                    <section className='absolute bottom-0 left-0 p-5 text-white'>
                                        <h1 className='text-clash lg:text-5xl uppercase font-semibold'>{item.header}</h1>
                                        <p>{item.subtext}</p>
                                        <button className='border px-4 py-2 my-3 hover:scale-105 ease duration-300 uppercase text-clash font-semibold'>
                                            <p>Shop Now</p>
                                        </button>
                                    </section>
                                </section>
                            </SwiperSlide>
                        )
                    })
                 }
            </Swiper>
    </main>
  )
}

export default MainSlideShow