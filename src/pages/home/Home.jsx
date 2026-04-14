import React from 'react';
import FriendsCard from '../../Component/friendsCard/FriendsCard';

const Home = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className=' text-center space-y-5'>
            <h1 className=' text-4xl font-bold mt-10'>Friends to keep close in your life</h1>
            <p className='text-gray-500 '>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
               relationships that matter most.</p>
               <button className='border border-gray-500 bg-[#244D3F] text-white px-2 py-1'>Add a Friend</button>
            </div>
           <div className='card-container grid grid-cols-4 gap-10 text-center mt-20'>
             <div className='card border border-gray-200 shadow-lg  p-10'>
               <h1 className='text-3xl font-bold text-gray-500'>10</h1>
               <p className='text-gray-500 font-semibold'>Total Friends</p>
             </div>
             <div className='card  border border-gray-200 shadow-lg p-10'>
               <h1 className='text-3xl font-bold text-gray-500'>3</h1>
               <p className='text-gray-500 font-semibold'>On Track</p>
             </div>
             <div className='card border border-gray-200 shadow-lg p-10'>
               <h1 className='text-3xl font-bold text-gray-500'>6</h1>
               <p className='text-gray-500 font-semibold'>Need Attention</p>
             </div>
             <div className='card border border-gray-200 shadow-lg p-10'>
               <h1 className='text-3xl font-bold text-gray-500'>12</h1>
               <p className='text-gray-500 font-semibold'>Interactions This Month</p>
             </div>
             
           </div>
           <FriendsCard></FriendsCard>
        </div>
    );
};

export default Home;