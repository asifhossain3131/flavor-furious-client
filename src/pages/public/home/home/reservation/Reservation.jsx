import React from 'react';
import SectionTitle from '../../../../../components/SectionTitle';
import ReservationForm from './ReservationForm';

const Reservation = () => {
    const openDays=[
        {
            day:'Saturday',
            time:'9.00 - 8.00'
        },
        {
            day:'Sunday',
            time:'9.00 - 8.00'
        },
        {
            day:'Monday',
            time:'9.00 - 8.00'
        },
        {
            day:'Tuesday',
            time:'9.00 - 8.00'
        },
        {
            day:'Wednesday',
            time:'9.00 - 8.00'
        },
        {
            day:'Thursday',
            time:'9.00 - 8.00'
        },
        {
            day:'Friday',
            time:'Closed'
        }
    ]
    return (
        <div>
            <SectionTitle header={'make reservation'} title={'are you ready'} subtitle={'making a reservation?'}></SectionTitle>
           <div className=' mx-12 flex flex-col lg:flex-row lg:justify-evenly gap-4'>
           <div className="card w-96 bg-base-100 shadow-xl">
<div className='bg-yellow-600 p-4 text-2xl font-semibold text-center text-white'><h1>We are available</h1></div>
  <div className="card-body">
   {openDays?.map((day,i)=>
    <div className='font-semibold' key={i}>{day.day}....................{day?.time}</div>
    )}
  </div>
  <div className='divider w-10/12 mx-auto'></div>
  <div className='text-center my-6'>
    <h2 className='text-lg'>Hotline reservation</h2>
    <h1 className='text-3xl font-bold text-yellow-600'>005600251</h1>
  </div>
</div>
<ReservationForm></ReservationForm>
           </div>
        </div>
    );
};

export default Reservation;