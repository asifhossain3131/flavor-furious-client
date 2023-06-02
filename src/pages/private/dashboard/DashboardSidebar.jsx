import React, { useState } from 'react';
import navigator from '../../../assets/arrow.png'
import userIcon from '../../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';

const DashboardSidebar = () => {
    const [open,setOpen]=useState(true)
    const navigate=useNavigate()
    const [isAdmin]=useAdmin()
    const usersInfo=[
        {infoName:'User Home', image:'https://img.freepik.com/free-photo/home-sign-icon-front-side-white-background_187299-40318.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'My Cart', route:'/dashboard/cart', image:'https://img.freepik.com/free-vector/shopping-cart-vector-technology-icon-silver-gradient-background_53876-112159.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'My Reservation', image:'https://img.freepik.com/premium-vector/calendar-black-white-icon_118813-10405.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Payment History', image:'https://img.freepik.com/premium-vector/business-investment-with-money-cash-dollar-paper-receipt-invoice-briefcase-3d-icon-isometric-vector-illustration-financial-account-management-budget-funds-currency-banking-corporate-documents_93487-3783.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Reviews', image:'https://img.freepik.com/free-icon/chat_318-565502.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'}
    ]

    const adminInfo=[
        {infoName:'Admin Home', image:'https://img.freepik.com/premium-vector/tenant-resident-icon-with-house-flat-vector_116137-4642.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Add food', route:'/dashboard/additem', image:'https://img.freepik.com/free-vector/cartoon-spoon-fork-knife-kitchen-design_24877-57345.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Manage food', route:'/dashboard/managefood', image:'https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'Manage bookings',  image:'https://img.freepik.com/premium-vector/calendar-date-schedule-flat-concept-design_229280-168.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=robertav1_2_sidr'},
        {infoName:'All users', route:'/dashboard/allusers', image:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=robertav1_2_sidr'}
    ]
    return (
        <div className={`${open? 'w-52 lg:w-72':'w-20'} bg-sky-900 duration-300  relative`}>
           <img onClick={()=>setOpen(!open)} src={navigator} alt="" className={`absolute w-7 border-2 p-1 duration-300 rounded-full bg-white border-zinc-700 cursor-pointer -right-3 top-9 ${!open && 'rotate-180'}`} />
           <div className='flex items-center gap-x-2 p-4'>
            <img src={userIcon} alt="" className='w-10' />
            <h1 className={`font-semibold text-white text-2xl origin-left duration-500 ${!open && 'scale-0'}`}>{isAdmin? 'Admin Dashboard':'User Dashboard'}</h1>
           </div>
          {
            isAdmin? <>
             <ul className='p-6'>
             {adminInfo.map((admin,i)=>
          
              <li onClick={()=>navigate(admin.route)} key={i} className='cursor-pointer flex items-center gap-x-4 p-2 hover:bg-yellow-500 rounded'>
             <img src={admin.image} alt="" className='w-8' />
             <span className={`font-semibold text-white ${!open && 'hidden origin-left duration-200'}`}>{admin.infoName}</span>
             </li>
            
            )}
           </ul>
            </> :
            <>
             <ul className='p-6'>
             {usersInfo.map((userInfo,i)=>
          
              <li onClick={()=>navigate(userInfo.route)} key={i} className='cursor-pointer flex items-center gap-x-4 p-2 hover:bg-yellow-500 rounded'>
             <img src={userInfo.image} alt="" className='w-8' />
             <span className={`font-semibold text-white ${!open && 'hidden origin-left duration-200'}`}>{userInfo.infoName}</span>
             </li>
            
            )}
           </ul>
            </>
          }
           <div className="divider"></div> 
          <span onClick={()=>navigate(-1)} className='text-white text-center underline font-semibold  lg:text-2xl cursor-pointer'>Go Back</span>
        </div>
    );
};

export default DashboardSidebar;