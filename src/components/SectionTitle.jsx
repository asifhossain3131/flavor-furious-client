import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const SectionTitle = ({subtitle,title,header}) => {
    return (
        <div className='text-center my-12 lg:w-1/2  mx-auto'>
            <p className='text-red-900 mb-4 uppercase'>~~~{header}~~~</p>
            <TypeAnimation
            className='uppercase text-xl lg:text-3xl text-semibold text-gray-500 border-y-4 border-y-yellow-500 p-2'
  sequence={[`${title}`, 2000, `${subtitle}`,2000]}
  repeat={Infinity}
/>
        </div>
    );
};

export default SectionTitle;