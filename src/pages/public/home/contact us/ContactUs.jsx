import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const ContactUs = () => {
    const{user}=useContext(AuthContext)
    return (
        <div>
            <SectionTitle header={'Contact us'} title={'have any query?'} subtitle={'reach out us now!'}></SectionTitle>
            <div className='flex flex-col-reverse lg:flex-row gap-4 mx-12 justify-evenly items-center'>
                <div className='lg:w-1/2'>
                  <form className='space-y-3'>
                  <input type="text" placeholder="Your name" value={user && user.displayName} className="input input-bordered w-full bg-gray-200" />
                  <input type="text" placeholder="Your Email" value={user && user.email} className="input input-bordered w-full bg-gray-200" />
                  <textarea className="textarea textarea-bordered w-full h-[150px] bg-gray-200" placeholder="Your message"></textarea>
                  <input type="submit" value="Send message" className='btn w-full bg-blue-900 hover:bg-blue-800 border-none' />
                  </form>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3E5LLXQbA-gYUDa4i2yZejt_r2mcZVFg-g&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default ContactUs;