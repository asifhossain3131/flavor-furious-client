import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const food=useLoaderData()
    const{_id,name,category,image,rating,recipe,price,details,isPopular}=food

    return (
        <div className='bg-gray-300 w-full h-[100px] lg:h-[200px] flex items-center justify-center'>
         <div>
            <Link>fd</Link>
         </div>
        </div>
    );
};

export default SingleFood;