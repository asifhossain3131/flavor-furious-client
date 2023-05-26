import React from 'react';
import Banner from '../banner/Banner';
import FoodSlider from './food slider/FoodSlider';
import PopularFoods from './popular food/PopularFoods';
import CustomerReviews from '../customer reviews/CustomerReviews';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <FoodSlider></FoodSlider>
            <PopularFoods></PopularFoods>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;