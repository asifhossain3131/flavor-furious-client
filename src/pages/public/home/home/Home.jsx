import React from 'react';
import Banner from '../banner/Banner';
import FoodSlider from './food slider/FoodSlider';
import PopularFoods from './popular food/PopularFoods';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <FoodSlider></FoodSlider>
            <PopularFoods></PopularFoods>
        </div>
    );
};

export default Home;