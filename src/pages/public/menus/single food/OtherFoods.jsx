import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

const OtherFoods = ({food}) => {
    const foodName=food.name 
    const categoryName=food.category
 const [sameFoods,setSameFoods]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/menus/${categoryName}`)
    .then(res=>res.json())
    .then(data=>{
        const filterd=data?.filter(single=>single.name!==foodName)
        setSameFoods(filterd)
    })
  },[categoryName])
    return (
    <div className='mt-20 w-9/12 mx-auto text-center'>
        <h1 className='font-semibold text-4xl my-8'>Other Foods of {categoryName}</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {
            sameFoods.map(sameFood=>
              <div key={sameFood._id} className=" bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={sameFood.image} alt="Shoes" className="rounded-xl w-full h-32" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sameFood.name}</h2>
                <p className='font-semibold text-xl'>${sameFood.price}</p>
                <div className="card-actions">
                  <Link to={`/shop/singlefood/${sameFood._id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
              </div>
            </div>
              )
          }
        </div>
    </div>
    );
};

export default OtherFoods;