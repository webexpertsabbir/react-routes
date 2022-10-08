import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)
    const {id, title, body, userId} = post;
    const navigate = useNavigate();
    const handelNavigate= () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Post Detials: {id}</h1>
            <h2>Title: {title}</h2>
            <p>body: {body}</p>
            <button onClick={handelNavigate}>Get The author</button>
        </div>
    );
};

export default PostDetails;