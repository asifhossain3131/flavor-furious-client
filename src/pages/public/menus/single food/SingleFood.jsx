import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import SingleFoodCard from './SingleFoodCard';
import SingleFoodTab from './SingleFoodTab';
import { FaAngleLeft } from 'react-icons/fa';

const SingleFood = () => {
    const food=useLoaderData()
    const navigate=useNavigate()
    return (
   <>
        <div className='bg-amber-50 w-full h-[100px] lg:h-[200px] flex items-center justify-center'>
         <div className='mt-10 lg:mt-20 flex gap-x-3 items-center font-semibold'>
            <span onClick={()=>navigate(-1)} className='cursor-pointer'>Go Back</span>
            <FaAngleLeft></FaAngleLeft>
            <Link className='text-yellow-700 font-bold'>{food.name}</Link>
         </div>
        </div>
        <SingleFoodCard food={food}></SingleFoodCard>
        <SingleFoodTab food={food}></SingleFoodTab>
   </>
    );
};

export default SingleFood;