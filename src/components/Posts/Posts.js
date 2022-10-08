import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './posts.css'
const Posts = ({posts}) => {
    const {id, title, body} = posts;
    const navigate = useNavigate();
    const handelNavigate = () =>{
        navigate(`/posts/${id}`);
    }
    return (
        <div className='posts'>
            <p>Title: {title}</p>
            <p>{body}</p>
            <button onClick={handelNavigate}>Show Deatils</button>
            <Link to={`/posts/${id}`}>
                <button>Show Deatils</button>
            </Link>
        </div>
    );
};

export default Posts;