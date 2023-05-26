import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuCard from '../../../../components/MenuCard';
import { useLoaderData } from 'react-router-dom';

const Menus = () => {
    const[menus,setMenus]=useState([])
    const {totalFoods}=useLoaderData()
   const[currentPage,setCurrentPage]=useState(0)
   const[foodPerPage,setFoodPerPage]=useState(10)
   const totalPages=Math.ceil(totalFoods/foodPerPage)
   const pageNumbers=[...Array(totalPages).keys()]
   const options=[5,10,15]
  


    useEffect(()=>{
        const fetchData=async()=>{
          const res=await fetch(`http://localhost:5000/menus?limit=${foodPerPage}&currentPage=${currentPage}`)
           const data=await res.json()
           setMenus(data)
        }
        fetchData()
    },[foodPerPage,currentPage])

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

      const handleSelectChange=(e)=>{
        setFoodPerPage(e.target.value)
        setCurrentPage(0)
      }
    return (
     <>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    menus.map(menu=>
                        <MenuCard key={menu._id} categoryFood={menu}></MenuCard>
                        )
                }
        </div>
<div className='w-1/2 mx-auto text-center my-8'>
<div className="btn-group">
          {
            pageNumbers.map(pageNumber=>
  <button onClick={()=>setCurrentPage(pageNumber)} key={pageNumber} className={pageNumber===currentPage? 'btn bg-yellow-400': 'btn'}>{pageNumber}</button>
              )
            }
</div>
<select value={foodPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
</div>

     </>
        
    );
};

export default Menus;