import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SectionTitle from '../../../../../components/SectionTitle';
import { Link } from 'react-router-dom';


const FoodSlider = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
    return (
        <div className='mx-12 lg:mx-24'>
            <SectionTitle
            header='we are always ready server you'
             subtitle='find your peace'
             title='find your category'
            ></SectionTitle>
       
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-center"
      >
        {
          categories.map(category=>
            <SwiperSlide
            key={category._id}
            >
              <Link>
              <div className='overflow-hidden  relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img
                      src={category?.image}
                      alt='gallery'
                      className='object-cover w-full h-48 '
                    />
            
                    <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold'>{category?.category}</h1>
                    </div>
                  </div>
              </Link>
              </SwiperSlide>
            )
        }
      
        
      </Swiper>
        </div>
    );
};

export default FoodSlider;