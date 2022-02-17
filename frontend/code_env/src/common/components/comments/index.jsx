import React, { useState, useEffect } from 'react';
import './styles.css';
import Button from '../button';
import Comment from './comment';

const Comments = ({ post }) => {

    //Initial values for comment.
    const initialValues = {
        username: '',
        postId: '',
        date: new Date(),
        comments: '',
    };

    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);
    const [donecomment, setDonecomment] = useState(false);

    const handleChange = (e) => {
        setComment({
            ...comment,
            username: JSON.parse(localStorage.getItem('userdetails')).username,
            postId: post._id,
            comments: e.target.value,
        });
    };

    //Function to post comments.
    const postComment = () => {
        fetch('http://localhost:3002/comment/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
            body: JSON.stringify(comment),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (donecomment) setDonecomment(false);
                else setDonecomment(true);
            });
    };

    //Function to get comments.
    const getComments = () => {
        fetch(`http://localhost:3002/comment/get/${post._id}`)
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                setComments(data);
            });
    };

    useEffect(() => {
        getComments();
    }, [donecomment]);

    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <img
                    src="https://img.icons8.com/bubbles/500/000000/comments.png"
                    alt="comments-img"
                />
                <h3 className="commentheader">Comments</h3>
            </div>
            <div className="my-4 d-flex align-items-center justify-content-center">
                <img
                    src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/000000/external-user-interface-kiranshastry-lineal-color-kiranshastry.png"
                    alt="commuser-img"
                />
                <textarea
                    name="comments"
                    className="mx-2 form-control"
                    id="comment"
                    rows="1"
                    placeholder="Your views...."
                    onChange={(e) => handleChange(e)}
                ></textarea>
                <Button
                    label="Post"
                    className="btn btn-success"
                    clickHandler={postComment}
                ></Button>
            </div>
            {comments &&
                comments
                    .slice(0)
                    .reverse()
                    .map((item,i) => {
                        return (
                            <Comment
                                key={i}
                                item={item}
                                isDeleted={donecomment}
                                setIsDeleted={setDonecomment}
                            />
                        );
                    })}
        </div>
    );
};

export default Comments;
