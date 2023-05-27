import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import LeftNavBar from '../pages/public/menus/left navbar/LeftNavBar';
import MenuBanner from '../pages/public/menus/menu banner/MenuBanner';
import Footer from '../pages/shared/footer/Footer';

const Shop = () => {
    return (
        <>
            <Header></Header>
            <MenuBanner></MenuBanner>
            <div className='grid grid-cols-[1fr,3fr] mx-12 gap-4'>
           
            <div>
            <LeftNavBar></LeftNavBar>
            </div>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Shop;