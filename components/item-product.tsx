'use client'
import React, { FC, useRef } from 'react'
import { ItemCards } from '@/components/card-item';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"

type Product = {
  // Define the structure of your product object
  title: string;
  subtitle: string;
  items: any[]; // Define the structure of items if needed
};

type Props = {
  itemProduct: Product
}

export const ItemProducts: FC<Props> = ({ itemProduct }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div className="mt-[48px] lg:flex lg:flex-row">
      <div className='lg:w-[240px] lg:flex lg:flex-col'>
        <div className='lg:flex-1'>
          <div className='font-semibold text-[18px] leading-[24px] text-[#333333]'>{itemProduct.title}</div>
          <div className='mt-[8px] text-[12px] font-medium leding-[20px] text-[#999999]'>{itemProduct.subtitle}</div>
        </div>
        <div className='hidden lg:block'>
          <button className='mr-[10px]' onClick={() => swiperRef.current?.slidePrev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-y-[24px] gap-x-[8px] lg:hidden'>
        {itemProduct.items.map((item: any, key: number) => <ItemCards key={key} product={item} />)}
      </div>
      <div>
        <Swiper
          onSwiper={swiper => swiperRef.current = swiper}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay, Pagination]}
          className="!hidden lg:!block w-[720px]"
        >
          {itemProduct.items.map((item: any, key: number) => {
            return (
              <SwiperSlide key={key} className='mr-[8px]'>
                <ItemCards product={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
