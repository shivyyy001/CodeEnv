import React, { useEffect } from 'react';
import './styles.css';

function PostCard({ post }) {

    const shortify = (data, limit) => {
        if(data.length>limit)return data.substr(0,limit) + "...";
        else return data;
    };

    const imageURL = post.image
        ? post.image
        : 'https://media.istockphoto.com/photos/hacker-with-red-glowing-mask-behind-notebook-laptop-in-front-of-blue-picture-id1169601313?k=20&m=1169601313&s=612x612&w=0&h=iN0P5g7iy_ZdyJiDJnskkyLT0bwcnLEcr6F0jgPWjtg=';
    return (
        <>
            <div className="card flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={imageURL}
                            className="card-img-top"
                            alt="..."
                        />
                        <h5 className="card-title">{shortify(post.title,10)}</h5>
                    </div>
                    <div className="card-body flip-card-back">
                        <p className="card-header1">
                            <b>Author : </b>
                            {shortify(post.username,15)}
                        </p>
                        <p className="card-header2">
                            <b>Category : </b>
                            {post.categories}
                        </p>
                        <p className="card-text">{shortify(post.description,80)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;
