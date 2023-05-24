import React from 'react';

const ButtonPrimary = ({btnTitle}) => {
    return (
        <button className="px-10 py-3 rounded  bg-gray-100 font-semibold uppercase  border-0 border-b-4 border-yellow-700 hover:bg-gray-200 transition duration-200 transform hover:-translate-y-2 hover:text-gray-500">{btnTitle}</button>
    );
};

export default ButtonPrimary;