import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import ButtonSecondery from './ButtonSecondery';


const PopularCard = ({popularMenu}) => {
    const{_id, name,category,image,price,rating,details}=popularMenu
    return (
      <div className="card w-96 bg-base-100 shadow-xl"  data-aos="fade-up"
      data-aos-duration="3000">
<figure className='relative'>
  <img className='h-[200px] w-full' src={image} alt="Shoes" />
  <div className="badge badge-error p-4 absolute top-0 left-0 font-bold text-white">-{price>10 && price<13?'30%': price>13? '40%' : '20%'}</div>
</figure>
<div className="card-body">
<Rating
    style={{ maxWidth: 100 }}
    value={rating}
    readOnly
  />
  <h2 className="card-title">
  {name}
    <div className="badge badge-warning p-3 animate-pulse">{rating>=4.5? 'Popular' : 'Sale'}</div>
  </h2>
  <p>{details}</p>
  <div className="card-actions flex items-center justify-between">
<h1 className='text-yellow-700 font-semibold text-2xl'>${price}</h1>
<ButtonSecondery btnTitle='see details'></ButtonSecondery>
  </div>
</div>
</div>
    );
};

export default PopularCard;