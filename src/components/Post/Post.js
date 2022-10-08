import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const post = useLoaderData();
    return (
        <div>
            <h1>My blog post: {post.length}</h1>
            {
                post.map(posts => <Posts
                
                key={posts.id}
                posts={posts}
                ></Posts>)
            }
        </div>
    );
};

export default Post;