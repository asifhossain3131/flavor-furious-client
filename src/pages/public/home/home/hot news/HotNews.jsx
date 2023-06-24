import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../../components/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import axios from 'axios';
import Swal from 'sweetalert2';

const HotNews = () => {
    const[allNews,setAllNews]=useState([])
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(()=>{
        axios.get('https://flavor-fusion-server-six.vercel.app/latestnews')
        .then(res=>setAllNews(res.data))
    },[])

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
          setSlidesPerView(1);
        } else {
          setSlidesPerView(3);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleShowDetail=id=>{
        fetch(`https://flavor-fusion-server-six.vercel.app/latestnews?id=${id}`)
        .then(res=>res.json())
        .then(data=>{
            const{title,image, description}=data
            Swal.fire({
                title:title,
                text: description,
                imageUrl:image,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        })
    }
    return (
        <div>
           <SectionTitle header={'Blog and article'} title={'hot & latest news'} subtitle={'of the week'} ></SectionTitle>

           <Swiper
           
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper w-11/12 mx-auto"
      >
        {
            allNews?.map(({_id,title,source,date,image})=>
            <SwiperSlide key={_id}>
                <div className="card lg:w-96 h-[500px] bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title.slice(0,50)}....</h2>
    <p className='font-semibold'>Source: {source}</p>
    <p className='font-semibold'>Featured On: {date}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleShowDetail(_id)} className="btn btn-link">Read more</button>
    </div>
  </div>
</div>
            </SwiperSlide>
            )
        }
      </Swiper>
        </div>
    );
};

export default HotNews;