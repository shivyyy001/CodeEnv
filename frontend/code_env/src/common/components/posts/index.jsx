import React, { useEffect, useState } from 'react';
import './styles.css';
import PostCard from '../postCard';
import { Link, useLocation } from 'react-router-dom';

function Posts() {
    //Extracting the search query from useLocation Hook.
    const { search } = useLocation();
    const [posts, setPosts] = useState([]);

    //Function to get all posts to show on home page based on queries (either username or category or both).
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
        // <div className="row">
            posts
                .slice(0)
                .reverse()
                .map((post, i) => (
                    <div
                        className="card-container col-md-4 col-sm-6 col-12"
                        key={i}
                    >
                        <Link
                            to={`/details/${post._id}`}
                            className="link-to-detail"
                        >
                            <PostCard post={post} />
                        </Link>
                    </div>
                ))
        // </div>
    ) : (
        <div className="my-3 d-flex justify-content-center">
            <h5 className="noposts">No posts yet! Create one....</h5>
        </div>
    );
}

export default Posts;
