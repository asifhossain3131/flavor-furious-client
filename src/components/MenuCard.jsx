import { Rating } from '@smastrom/react-rating';
import React from 'react';
import ButtonSecondery from './ButtonSecondery';
import { Link } from 'react-router-dom';

const MenuCard = ({categoryFood}) => {
    const{_id,category,details,image,isPopular,name,price,rating}=categoryFood
    return (
        <div className="card w-96 bg-base-100 shadow-xl"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
  <figure className='relative'>
    <img className='h-[200px] w-full' src={image} alt="Shoes" />
   {
    isPopular &&  <div className="badge badge-error p-4 absolute top-0 left-0 font-bold text-white">-{price>10 && price<13?'30%': price>13? '40%' : '20%'}</div>
   }
  </figure>
  <div className="card-body">
  <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    />
    <h2 className="card-title">
    {name}
     {
      isPopular &&  <div className="badge badge-warning p-3 animate-pulse">{rating>=4.5? 'Popular' : 'Sale'}</div>
     }
    </h2>
    <p>{details}</p>
    <div className="card-actions flex items-center justify-between">
  <h1 className='text-yellow-700 font-semibold text-2xl'>${price}</h1>
  <Link to={`singlefood/${_id}`}><ButtonSecondery btnTitle='see details'></ButtonSecondery>
</Link>
    </div>
  </div>
  </div>
    );
};

export default MenuCard;