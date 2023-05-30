import React, { useState } from 'react';

const UserSidebar = () => {
  const[open,setOpen]=useState(true)
    return (
        <div className={`${open? 'w-72' : 'w-20'} h-screen bg-red-600 relative`}>
        
        </div>
    );
};

export default UserSidebar;