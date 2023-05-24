import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../../components/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import PopularCard from '../../../../../components/PopularCard';
import ButtonPrimary from '../../../../../components/ButtonPrimary';


const PopularFoods = () => {
    const[popularMenus,setPopularMenus]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularDishes')
        .then(res=>res.json())
        .then(data=>setPopularMenus(data))
    },[])

    function animateElements() {
        AOS.refresh(); // Refresh AOS to clear previous animations
        AOS.init(); // Reinitialize AOS
      
        // Additional logic to target and animate specific elements
      }

      useEffect(() => {
        const interval = setInterval(animateElements, 5000); // Call animateElements function every 5 seconds
      
        return () => {
          clearInterval(interval); // Clear the interval when the component unmounts
        };
      }, []);
    return (
        <>
            <SectionTitle
            header='our chefs recommends'
            subtitle='grab a discount'
            title='popular dishes'
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3  mx-12 gap-4 mb-8'>
{
    popularMenus.map(popularMenu=>
   <PopularCard key={popularMenu._id} popularMenu={popularMenu}></PopularCard>
    )
}
            </div>

           <div className='w-1/2 mx-auto text-center'>
           <ButtonPrimary btnTitle='View all foods'></ButtonPrimary>
           </div>
        </>
    );
};

export default PopularFoods;