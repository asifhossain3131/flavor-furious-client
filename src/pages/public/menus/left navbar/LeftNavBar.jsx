import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavBar = () => {
    const[categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

  return (
    <>
      <div className="card  border shadow-xl">
      <h2 className="lg:text-2xl font-semibold text-center p-2">Categories</h2>
        <ul className="menu p-4 my-2 w-11/12  bg-yellow-100 divide-black divide-dashed divide-y-2 mx-auto rounded-box">
      {
categories.map(category=>
    <Link className='font-semibold p-2' to={`shop/categoryFood/${category.category}`}><li>
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
    </>
  );
};

export default LeftNavBar;
