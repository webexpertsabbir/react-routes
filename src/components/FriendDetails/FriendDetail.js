import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h1>My friend Deatils</h1>
            <h2>Name: {friend.name}</h2>
            <h3>Cal/phone: {friend.phone}</h3>
        </div>
    );
};

export default FriendDetail;