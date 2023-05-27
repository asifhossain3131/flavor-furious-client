import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <>
        <Header></Header>
        <div className='min-h[calc(100vh-465px)]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Main;