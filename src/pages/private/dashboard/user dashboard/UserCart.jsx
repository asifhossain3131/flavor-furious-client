import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import useCart from '../../../../hooks/useCart';

const UserCart = () => {
    const[cart]=useCart()
    const[carts,setCarts]=useState(cart[0]?.items)
    const totalFoods=carts?.reduce((sum,food)=>food.quantity+sum,0)
    const totalCost=carts?.reduce((sum,food)=>food.total+sum,0)
    return (
        <div>
            <SectionTitle
             header='my cart'
             title='review your cart'
             subtitle='want to add more?'
            ></SectionTitle>

<div className="overflow-x-auto w-9/12 mx-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Food</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        carts?.map((cart,i)=>
            <tr key={i}>
                <td>{i+1}</td>
            <td>
             {cart?.name}
            </td>
            <td>
             {cart?.quantity}
            </td>
            <td>
            ${cart?.total.toFixed(2)}
            </td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
            )
    }
  </tbody>
  </table>
  <div className='divider'></div>
  <div className='space-y-2 text-center'>
    <h1 className='font-semibold text-2xl'>Total Food: {totalFoods}</h1>
    <p className='font-semibold text-xl'>Total Price: {totalCost?.toFixed(2)}</p>
  </div>
</div>
        </div>
    );
};

export default UserCart;