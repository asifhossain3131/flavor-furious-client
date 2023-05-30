import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../pages/private/dashboard/DashboardSidebar';

const UserDashboard = () => {
    return (
        <div className='flex'>
            <DashboardSidebar></DashboardSidebar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;