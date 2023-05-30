import React from 'react';
import UserSidebar from '../pages/private/user dashboard/UserSidebar';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className='flex'>
            <UserSidebar></UserSidebar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;