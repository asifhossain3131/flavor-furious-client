import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import login from '../../../../public/78126-secure-login.json'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const{signIn}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const[show,setShow]=useState(false)
    const [error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const target=location?.state?.from?.pathname|| '/'
     
    const handleLogin=data=>{
      setError('')
      setSuccess('')
        signIn(data.email,data.password)
        .then(res=>{
          setSuccess('User created successfully')
          navigate(target,{replace:true})
        })
        .catch(error=>{
          setError('Check your email or password')
        })
    }
  
    return (
        <div className='mx-12 flex flex-col lg:flex-row items-center justify-center'>
           <div className='lg:w-1/2'>
           <Lottie animationData={login} loop={true} />
           </div>

           <div className="card  lg:w-1/2 shadow-xl bg-gray-100">
      <div className="card-body">
       <div className='my-4 space-y-2'>
        <h1 className='font-bold text-3xl'>Welcome again!</h1>
        <p className='font-semibold text-gray-600 text-xl'>Login to continue!</p>
       </div>
    <form onSubmit={handleSubmit(handleLogin)}>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" {...register('email')} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show? 'text' : 'password'} placeholder="password" {...register('password')} className="input input-bordered"  required/>
        <div className='flex justify-between'>
        <label className="label">
            <span onClick={()=>setShow(!show)} className="label-text-alt cursor-pointer">{show? 'Hide password': 'Show passowrd'}</span>
          </label>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        </div>
        <span className='text-red-500'>{error}</span>
        <span className='text-green-500'>{success}</span>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className='btn border-none bg-yellow-500 hover:bg-yellow-400 font-semibold'/>
        </div>
    </form>
    <span className='text-gray-700 mt-4'>Don't have an account? <Link state={{from:target}} to='/register' className='text-blue-500 underline'>Create an account</Link></span>
      </div>
    </div>
        </div>
    );
};

export default Login;