import React, { useEffect, useState } from 'react';
import './styles.css';
import PostCard from '../postCard';
import { Link, useLocation } from 'react-router-dom';

function Posts() {
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);
    // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const getAllPosts = () => {
        fetch(`http://localhost:3002/home/posts/${search}`)
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success - ', data);
                setPosts(data);
            });
    };

    useEffect(() => {
        getAllPosts();
    }, [search]);

    return posts.length > 0 ? (
        posts
            .slice(0)
            .reverse()
            .map((post,i) => (
                <div className="card-container col-md-4 col-sm-6 col-12" key={i}>
                    <Link
                        to={`/details/${post._id}`}
                        className="link-to-detail"
                    >
                        <PostCard post={post} />
                    </Link>
                </div>
            ))
    ) : (
        <div className='my-3 d-flex justify-content-center'>
            <h5 className="noposts">No posts yet! Create one....</h5>
        </div>
    );
}

export default Posts;
