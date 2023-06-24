import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const SingleFoodTab = ({food}) => {
    const{_id,name,category,image,rating,recipe,price,details,isPopular}=food
    const [categoryDetail,setCategoryDetail]=useState({})
    const{energyCalorie,fat,protein,allergies,carbohydrate}=categoryDetail
     
    useEffect(()=>{
        fetch(`https://flavor-fusion-server-six.vercel.app/categoryDetail?category=${category}`)
        .then(res=>res.json())
        .then(data=>setCategoryDetail(data))
    },[])
  
    return (
        <Tabs className='w-9/12 mx-auto text-center lg:h-[700px] mt-20  bg-amber-50 rounded'>
        <TabList className='font-bold mb-20 bg-yellow-200 p-4'>
          <Tab>Desciription</Tab>
          <Tab>Check on</Tab>
          <Tab>Review</Tab>
        </TabList>
    
        <TabPanel className='p-4 space-y-4'>
       <div className='w-9/12 text-center mx-auto'>
       <p className='text-center'><span className='font-bold'>Recipe:</span> {recipe}</p>
        <p><span className='font-bold'>Status:</span> {isPopular===true? 'Popular':'Sale'}</p>
       </div>
        <h1 className='font-semibold text-3xl'>{category} contains:</h1>
        <div className="stats shadow w-full">
  <div className="stat place-items-center">
    <div className="stat-title">Calorie</div>
    <div className="stat-value">{energyCalorie}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Fat</div>
    <div className="stat-value">{fat}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Protien</div>
    <div className="stat-value">{protein}</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Gluxit</div>
    <div className="stat-value">{carbohydrate?.gluxit}</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Sugar</div>
    <div className="stat-value">{carbohydrate?.sugar}</div>
  </div> 
</div>

<h1 className='font-semibold text-3xl'>Allergies:</h1>
<div className="stats w-9/12 shadow">
{allergies?.map((allergy,index)=>
         <div key={index} className="stat">
         <div className="stat-value">{allergy}</div>
       </div>
        )}
</div>
        </TabPanel>

        <TabPanel>
        <div>
    <h1 className='font-semibold text-2xl'>Ordering with us will facilitate you:</h1>
    <ul>
        <li>30 days easy returns if you change your mind</li>
        <li></li>
        <li></li>
    </ul>
</div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
};

export default SingleFoodTab;