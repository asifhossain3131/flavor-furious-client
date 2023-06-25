import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import Marquee from "react-fast-marquee";

const Sponsors = () => {
    const allSponsors=[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBu7D-6UtmdPNGU4dJ_NlTIkTdzgfT1aVYPQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_TLjVXdi331R6RwjxTWnIXEOzn6fj4WgKA&usqp=CAU','https://cdn-icons-png.flaticon.com/128/5969/5969323.png', 'https://cdn-icons-png.flaticon.com/128/732/732236.png','https://cdn-icons-png.flaticon.com/128/825/825537.png','https://cdn-icons-png.flaticon.com/128/5968/5968269.png','https://cdn-icons-png.flaticon.com/128/5968/5968330.png'
    ]
    return (
        <div>
           <SectionTitle header={'our sponsors'} title={'dining experience'} subtitle={'great sponsorship'}></SectionTitle>
           <Marquee speed={50} pauseOnHover={true} >
<div className='flex items-center justify-between gap-x-8'>
{
    allSponsors.map(image=>
     <img src={image} className='w-[100px] lg:w-[150px]' alt="" />
    )
}
</div>
  </Marquee>
        </div>
    );
};

export default Sponsors;