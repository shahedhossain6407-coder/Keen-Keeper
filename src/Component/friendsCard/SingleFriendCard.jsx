import React from 'react';
import { Link } from 'react-router';

const SingleFriendCard = ({friend}) => {
    // console.log(friend)
    const {picture,name,email,status,tags,id} = friend;
    return (
        <Link to={`/friend/${id}`}
          
            className=' space-y-3 border border-gray-200 rounded-xl  shadow-lg p-10'>
            <div className=' flex flex-col items-center text-center  space-y-2   ' >
              <img src={picture}
               alt="" 
               className='rounded-full w-15  ' />
               <h3 className='font-bold'>{name}</h3>
               <p className='font-semibold text-gray-500'><small>{email}</small></p>
               
               <div className='badge'>
            {
                tags.map(tag=>{
                   return <h3 className='bg-green-100 px-3 py-1 rounded-2xl'>{tag}</h3>
                })
             }               
           </div>

           <h3 className={`${
            status === `overdue` ? `bg-red-400 px-2 rounded-xl font-semibold` :
            status === `almost due` ? `bg-yellow-200 px-2 rounded-xl font-semibold ` :
            status === `on-track` ? `bg-green-300 px-2 rounded-xl font-semibold` :
             
             ""}`}>
            {status}</h3>
            </div>    
         
           
        </Link>
    );
};

export default SingleFriendCard;