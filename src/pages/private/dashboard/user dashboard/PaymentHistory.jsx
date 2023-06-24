import React, { useContext } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const[axiosSecure]=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const{data:payments=[], refetch}=useQuery({
        queryKey:['deliveredFood', user?.email],
        queryFn:async()=>{
            axiosSecure.get(`/deliveredFood/${user?.email}`)
            return [payments,refetch]
        }
    })
    return (
        <div>
            <SectionTitle
            header={'check latest payments'}
            title={'we want to see you happy'}
            subtitle={'always to ready to serve you'}
            ></SectionTitle>
        </div>
    );
};

export default PaymentHistory;