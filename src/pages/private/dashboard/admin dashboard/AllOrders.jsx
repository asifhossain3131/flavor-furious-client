import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllOrders = () => {
    const[axiosSecure]=useAxiosSecure()
    const{data:orders=[],refetch}=useQuery(['orders'], async()=>{
        const res=await axiosSecure.get('/orderedFoods')
        return res?.data
    })
    return (
        <div>
            <SectionTitle
            header={'customer orders'}
            title={'confirm orders'}
            subtitle={'please cusomers'}
            ></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>trans ID</th>
        <th>Date</th>
        <th>Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     {
        orders?.map((order,i)=>
            <tr key={i}>
            <th>{i+1}</th>
            <td>{order.email}</td>
            <td>{order.transId}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td><button className='bg-blend-lighten'>See Details</button></td>
          </tr>
            )
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllOrders;