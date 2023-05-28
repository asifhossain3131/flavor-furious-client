import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const navBarOption=<>
      <li><Link to='/'>Home</Link></li>
      <li><Link>Our Menu</Link></li>
      <li><Link to='/shop'>Our Shop</Link></li>
      <li><Link>Contact us</Link></li>
    </>

    const{user,logOut}=useContext(AuthContext)
    const location=useLocation()
    
    const handleLogOut=()=>{
      logOut()
    }
    return (
        <>
            <div className={`navbar bg-white bg-opacity-50  p-4 ${location.pathname.includes('login') || 'fixed z-20'}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     {navBarOption}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl">Flavor<span className='text-yellow-500'>Fusion</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex font-semibold">
    <ul className="menu menu-horizontal px-1">
     {navBarOption}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4 ">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn  btn-circle btn-ghost">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
   {
 user? 
 <>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200/300" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>
 </> :
 <>
<Link to='/login'><button className="btn font-semibold btn-active hover:bg-yellow-500 btn-ghost">Login</button></Link>
 </>
   }
  </div>
</div>
        </>
    );
};

export default Header;