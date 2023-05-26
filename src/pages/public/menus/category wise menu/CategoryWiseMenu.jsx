import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../../../../components/MenuCard';


const CategoryWiseMenu = () => {
    const category=useParams()
     const categroyName=category.name.toLowerCase()
    const [categoryFoods, setCategoryFoods]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/menus/${categroyName}`)
        .then(res=>res.json())
        .then(data=>setCategoryFoods(data))
    },[categroyName])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
       {
        categoryFoods.map(categoryFood=>
         <MenuCard key={categoryFood._id} categoryFood={categoryFood}></MenuCard>   
            )
       }
          </div>
    );
};

export default CategoryWiseMenu;