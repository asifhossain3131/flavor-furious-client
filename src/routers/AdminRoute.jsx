import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const[isAdmin, isAdminLoading]=useAdmin()
    const{user}=useContext(AuthContext)
    const location=useLocation()

    if(isAdmin || isAdminLoading){
        return <div>Loading....</div>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;