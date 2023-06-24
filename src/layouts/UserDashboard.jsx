import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../pages/private/dashboard/DashboardSidebar';

const UserDashboard = () => {
    return (
        <div className='flex w-9/12 min-h-screen lg:w-full'>
            <DashboardSidebar></DashboardSidebar>
            <div className='w-10/12 lg:w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;