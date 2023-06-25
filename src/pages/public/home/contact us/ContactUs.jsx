
import SectionTitle from '../../../../components/SectionTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactUs = () => {
    const{user}=useContext(AuthContext)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
        .then((result) => {
            toast.success('Message sent successfully')
            e.target.reset()
        }, (error) => {
           toast.error(error.text)
        })
    };
    return (
        <div>
            <SectionTitle header={'Contact us'} title={'have any query?'} subtitle={'reach out us now!'}></SectionTitle>
            <div className='flex flex-col-reverse lg:flex-row gap-4 mx-12 justify-evenly items-center'>
                <div className='lg:w-1/2'>
                  <form ref={form} onSubmit={sendEmail} className='space-y-3'>
                  <input type="text" placeholder="Your name" name="user_name" value={user && user.displayName} className="input input-bordered w-full bg-gray-200" />
                  <input type="text" placeholder="Your Email" name="user_email" value={user && user.email} className="input input-bordered w-full bg-gray-200" />
                  <textarea className="textarea textarea-bordered w-full h-[150px] bg-gray-200" name="message" placeholder="Your message"></textarea>
                  <input disabled={!user} type="submit" value="Send message" className='btn w-full bg-blue-900 hover:bg-blue-800 border-none' />
                  </form>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3E5LLXQbA-gYUDa4i2yZejt_r2mcZVFg-g&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default ContactUs;