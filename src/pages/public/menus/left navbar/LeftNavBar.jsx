import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftNavBar = () => {
    const[categories,setCategories]=useState([])
    const location=useLocation()

    useEffect(()=>{
        fetch('https://flavor-fusion-server-six.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

   

  return (
    <>
 {
  location.pathname.includes('singlefood') ||
  <div className="card  border shadow-xl">
  <h2 className="lg:text-2xl font-semibold text-center p-2">Categories</h2>
    <ul className="menu p-4 my-2 w-11/12  divide-black divide-solid divide-y-2 mx-auto rounded-box">
  {
categories.map(category=>
<Link key={category._id} className={`font-semibold text-lg  ${location.pathname.includes(category.category)? 'bg-yellow-400' : 'bg-gray-200'}`} to={`shop/categoryFood/${category.category}`}><li>
      <div className="avatar flex items-center justify-around">
<div className="w-12">
  <img src={category.image} />
</div>
<span> {category.category}</span>
</div>
</li>
    </Link>
)
  }
    </ul>

  </div>
 }
    </>
  );
};

export default LeftNavBar;
