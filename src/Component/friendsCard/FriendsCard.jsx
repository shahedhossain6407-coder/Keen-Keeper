import React, { use } from 'react';
import SingleFriendCard from './singleFriendCard';
const friendsPromise = fetch(`/FriendsData.jsx`).then(res=>res.json())
const FriendsCard = () => {
const friends = use(friendsPromise);

    return (
        <div className='mt-20 '>
            <h3 className='font-bold text-2xl mb-10'>Your Friends</h3>
          <div className='grid grid-cols-4 container mx-auto justify-between gap-10 '>
          {
                friends.map((friend)=><SingleFriendCard key={friend.id} friend={friend}></SingleFriendCard>)
            }
          </div>
        </div>
    );
};

export default FriendsCard;