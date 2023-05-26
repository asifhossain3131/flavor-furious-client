import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';



const CustomerReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <SectionTitle
            header='we gain your trust with our serve'
            title='Testimonials'
            subtitle='What our customers say'
            ></SectionTitle>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-9/12"
      >
        {
            reviews.map(review=>
                <SwiperSlide key={review._id}>
                    <div className='flex flex-col items-center space-y-2 w-1/2 mx-auto text-center my-4'>
                        <img className='w-[100px] mx-auto rounded-full' src={review.image} alt="reviews" />
                        <Rating
      style={{ maxWidth: 200 }}
      value={review.rating}
      readOnly
    />
    <FaQuoteLeft></FaQuoteLeft>
    <p className='text-gray-600'>{review.review}</p>
    <h1 className='font-bold text-2xl'>{review.name}</h1>
                    </div>
                    </SwiperSlide>
                )
        }
       
        
      </Swiper>
        </div>
    );
};

export default CustomerReviews;