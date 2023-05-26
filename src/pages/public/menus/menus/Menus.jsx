import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuCard from '../../../../components/MenuCard';

const Menus = () => {
    const[menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menus')
        .then(res=>res.json())
        .then(data=>setMenus(data))
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    menus.map(menu=>
                        <MenuCard key={menu._id} categoryFood={menu}></MenuCard>
                        )
                }
        </div>
    );
};

export default Menus;