import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import LeftNavBar from '../pages/public/menus/left navbar/LeftNavBar';
import Banner from '../pages/public/home/banner/Banner';

const Shop = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className='grid grid-cols-[1fr,3fr] mx-12 gap-4'>
           
            <div className='bg-red-400'>
            <LeftNavBar></LeftNavBar>
            </div>
             <Outlet></Outlet>
            </div>
        </>
    );
};

export default Shop;