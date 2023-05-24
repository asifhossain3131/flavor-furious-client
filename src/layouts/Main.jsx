import React from 'react';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default Main;