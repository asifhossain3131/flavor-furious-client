import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel showArrows={true}>
        <div>
            <img src="https://i.ibb.co/bJR7sH2/01.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/bRwtNrk/02.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/VtMgVCf/03.png" />
        </div>
        <div>
            <img src="https://i.ibb.co/CnXqk5x/04.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/Syr6Y4v/05.png" />
        </div>
        <div>
            <img src="https://i.ibb.co/hYvk9c4/06.png" />
        </div>
    </Carousel>
    );
};

export default Banner;