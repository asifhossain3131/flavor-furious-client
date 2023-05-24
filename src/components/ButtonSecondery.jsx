import React from 'react';

const ButtonSecondery = ({btnTitle}) => {
    return (
        <div>
         <button className="px-8 py-3 rounded  bg-gray-100 font-semibold uppercase  border-0 border-b-2 border-yellow-400 hover:bg-gray-200 transition duration-200 transform hover:translate-x-2 hover:text-gray-500">{btnTitle}</button>
        </div>
    );
};

export default ButtonSecondery;