import React from 'react';

const Offers = () => {
    return (
        <div className='flex mx-12 gap-4 items-center flex-col lg:flex-row'>
           <div className=' relative'>
            <img src="https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fresh-toppings-generative-ai_188544-12325.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph" alt="" />
            <div className='absolute top-8 left-4 text-white'>
               <div className='flex gap-x-3 items-center'>
                <div> <h1 className='font-semibold text-4xl text-yellow-600'>Buy</h1>
                <h1 className='font-semibold text-4xl text-yellow-600'>Get</h1></div>
                <h1 className='text-6xl font-semibold'>1</h1>
               </div>
                <p className='font-medium text-xl my-4 text-gray-200'>On Each <br /><span className='font-bold text-2xl'>Sunday</span></p>
            </div>
           </div>
           <div><img src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-46678.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais" alt="" /></div>
        </div>
    );
};

export default Offers;