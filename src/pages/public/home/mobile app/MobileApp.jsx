import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';

const MobileApp = () => {
    return (
        <div>
            <SectionTitle header={'android app'} title={'put us in your pocket'} subtitle={'reach us anytime'}></SectionTitle>
            <div className='bg-yellow-600 bg-opacity-70 flex flex-col-reverse lg:flex-row items-center text-white p-4'>
                <div>
                    <h1 className='text-3xl my-2'>Download the mobile app now to reach us from anywhere</h1>
                    <p className='w-10/12 my-3'>It's all at your fingertips – the restaurants and shops you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download us.</p>
                    <div className='flex items-center gap-x-4 my-3'>
                       <a href="https://play.google.com/store/games" target='_blank'> <img className='w-[30px]' src="https://cdn-icons-png.flaticon.com/128/11104/11104234.png" alt="" /></a>
                       <a href="https://www.apple.com/store" target='_blank'> <img className='w-[30px]' src="https://cdn-icons-png.flaticon.com/128/831/831327.png" alt="" /></a>
                       <a href="https://appgallery.huawei.com/Featured" target='_blank'> <img className='w-[30px]' src="https://cdn-icons-png.flaticon.com/128/6786/6786903.png" alt="" /></a>
                    </div>
                </div>
                <div>
                    <img className='h-[350px]' src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;