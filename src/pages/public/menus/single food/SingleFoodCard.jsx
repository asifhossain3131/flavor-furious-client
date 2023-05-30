import { Rating } from '@smastrom/react-rating';
import React, { useContext, useState } from 'react';
import { FaCartPlus, FaFacebook, FaInstagram, FaMinus, FaPlus, FaRegHeart, FaTiktok } from 'react-icons/fa';
import { AuthContext } from '../../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { addToLocalStorage } from '../../../../utils/localStorage';
import useCart from '../../../../hooks/useCart';

const SingleFoodCard = ({food}) => {
    const{_id,name,category,image,rating,recipe,price,details,isPopular}=food
     const [count,setCount]=useState(1)
     const{user}=useContext(AuthContext)
     const [refetch]=useCart()
     

     const handleCart=()=>{
        if(user && user.email){
            fetch(`http://localhost:5000/cart?email=${user.email}&name=${name}&price=${price}&quantity=${count}`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
              if(data?.message){
                // refetch
                toast.success('Food added to cart successfully')
              }
            })
        }
     }
     
    return (
        <div className="card lg:card-side w-11/12 mx-auto bg-base-100 shadow-xl mt-20">
        <figure><img src={image} alt="Album"/></figure>
        <div className="p-10 space-y-4">
          <h2 className="card-title font-bold text-5xl">{name}</h2>
          <p className='font-bold text-yellow-400 text-3xl'>${price}</p>
            <p className='flex gap-x-4'>
            <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    /> <span className='text-gray-600'>(Customer review)</span>
            </p>
            <p>
                {details}
            </p>
            <div className="divider"></div> 
         <div className='flex items-center gap-x-4'>
            <div className='flex items-center gap-x-2'>
                <button onClick={()=>setCount(count-1)} className='border rounded-full p-2 bg-amber-50'><FaMinus></FaMinus></button>
                <input type='number'  value={count} className='text-center font-bold w-[40px]' id="" />
              <button onClick={()=>setCount(count+1)} className='border rounded-full p-2 bg-amber-50'><FaPlus></FaPlus></button>
            </div>
            <button onClick={handleCart} className='btn bg-yellow-500 border-none hover:bg-yellow-400 text-black font-semibold flex gap-x-2'>
                <FaCartPlus></FaCartPlus>
                Add To Cart</button>
                <button onClick={()=>addToLocalStorage(_id)} className="btn btn-square border-none hover:bg-red-500"><FaRegHeart></FaRegHeart></button>
         </div>
         <div className="divider"></div> 
         <div className='text-gray-600 font-semibold'>
          <p>Category: {category.toUpperCase()}</p>
          <p className='flex items-center gap-x-2'>Share on: 
            <a href="https://www.facebook.com/" target='_blank'><FaFacebook></FaFacebook></a>
            <a href="https://www.instagram.com/" target='_blank'> <FaInstagram></FaInstagram></a>
            <a href="https://www.tiktok.com/en/" target='_blank'> <FaTiktok></FaTiktok> </a>
          </p>
         </div>
        </div>
      </div>
    );
};

export default SingleFoodCard;