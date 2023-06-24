import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaExclamation, FaCheck } from 'react-icons/fa';

const AllOrders = () => {
    const[axiosSecure]=useAxiosSecure()
    const{data:orders=[],refetch}=useQuery(['orders'], async()=>{
        const res=await axiosSecure.get('/orderedFoods')
        return res?.data
    })

    const handleDelivered=transId=>{
      axiosSecure.post(`/deliveredFood/${transId}`)
      .then(()=>{
        refetch()
      })
    }
    return (
        <div>
            <SectionTitle
            header={'customer orders'}
            title={'confirm orders'}
            subtitle={'please customers'}
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
        <th>Delivered</th>
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
            <td><button onClick={()=>handleDelivered(order.transId)} className='btn btn-square border-none bg-green-400 hover:bg-green-600'>
              <FaCheck></FaCheck>
              </button></td>
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