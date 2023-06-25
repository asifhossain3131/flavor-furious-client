import React from 'react';
import Banner from '../banner/Banner';
import FoodSlider from './food slider/FoodSlider';
import PopularFoods from './popular food/PopularFoods';
import CustomerReviews from '../customer reviews/CustomerReviews';
import HotNews from './hot news/HotNews';
import Reservation from './reservation/Reservation';
import Sponsors from '../sponsors/Sponsors';
import ContactUs from '../contact us/ContactUs';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <FoodSlider></FoodSlider>
            <PopularFoods></PopularFoods>
            <CustomerReviews></CustomerReviews>
            <HotNews></HotNews>
            <Reservation></Reservation>
            <Sponsors></Sponsors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;