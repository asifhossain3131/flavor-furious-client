import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    const allCounters=[
        {
            name:'DISHES',
            quantity:'50'
        },
        {
            name:'BRANCES',
            quantity:'10'
        },
        {
            name:'CHEFS',
            quantity:'40'
        },
        {
            name:'CITITES',
            quantity:'10'
        }
    ]
    return (
        <div className='flex gap-4 w-10/12 mx-auto flex-wrap lg:flex-nowrap'>
            {
                allCounters.map(({name,quantity},i)=>

<div className="card w-96 bg-yellow-600 bg-opacity-30 h-44 shadow-xl image-full">
   <div className='flex items-center justify-center'>
   <CountUp className='text-8xl text-yellow-600' start={0} end={quantity} delay={0}/>
   </div>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-white opacity-30">{name}</h2>
  </div>
</div>
                )
            }
        </div>
    );
};

export default Counter;