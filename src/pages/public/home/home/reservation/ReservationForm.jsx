import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const ReservationForm = () => {
    const {
        register,
        handleSubmit,
     reset
      } = useForm()
    const{user}=useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState('');
    const[axiosSecure]=useAxiosSecure()

    const handleDateChange = (event) => {
      const inputDate = event.target.value;
      const selectedDay = new Date(inputDate).getDay();
       // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const formattedCurrentDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
  
      if (selectedDay === 5) {
        setSelectedDate('');
     toast.error('Selected date is holiday')
      }
      else if(inputDate<formattedCurrentDate){
        setSelectedDate('');
        toast.error('You cannot choose previous date')
      }
      else {
        setSelectedDate(inputDate);
        toast.success('Date selected')
      }
    };

    

    const handleReservation=data=>{
     axiosSecure.post('/reservations',data)
     .then(res=>{
        console.log(res)
        if(res.data.acknowledged===true){
            toast.success('Reservation request successful!')
        }
        reset()
     })
    }
    return (
        <div>
         <p>Please fill up all the (*) required fields</p>
         <form onSubmit={handleSubmit(handleReservation)}>
            <div className='flex gap-x-3'>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Full Name <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("name", { required: true })} type="text" placeholder="Enter your name" value={user && user?.displayName} className="input input-bordered w-full" />
</div>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Email Address <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("email", { required: true })} type="text" placeholder="Enter your email" value={user && user?.email} className="input input-bordered w-full" />
</div>
            </div>
            <div className='flex gap-x-3'>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Phone Number <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("phone", { required: true })} type="tel" placeholder="Enter your phone number" className="input input-bordered w-full" />
</div>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Date <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("date", { required: true })} type="date" onChange={handleDateChange} placeholder="" value={selectedDate}className="input input-bordered w-full" />
</div>
            </div>
            <div className='flex gap-x-3'>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">From when <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("fromTime", { required: true })} type="time"  placeholder="Mention the time" className="input input-bordered w-full" />
</div>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Until <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("toTime", { required: true })} type="time"  placeholder="" className="input input-bordered w-full" />
</div>
            </div>
            <div className="form-control w-full">
  <label className="label">
    <p className="label-text">Total guests <span className='text-red-600 font-bold text-lg'>*</span> </p>
  </label>
  <input {...register("guests", { required: true })} type="number" min={1} max={20} placeholder="Guests coming" className="input input-bordered w-full " />
</div>
<div className="form-control">
  <label className="label">
  <p className="label-text">Special notes</p>
  </label>
  <textarea {...register("notes")} className="textarea textarea-bordered h-24" placeholder="Mention special notes"></textarea>
</div>
<input disabled={!user} type="submit" value="Reserve" className='btn my-4 w-full bg-yellow-600 border-none hover:bg-yellow-500'/>
         </form>
        {!user && <span className='text-red-600'>Please login first to reserve bookings</span>}
        </div>
    );
};

export default ReservationForm;