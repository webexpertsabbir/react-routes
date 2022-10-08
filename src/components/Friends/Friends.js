import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h1>He is my friends {friends.length}</h1>
           <div className='friends'>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
           </div>
        </div>
    );
};

export default Friends;