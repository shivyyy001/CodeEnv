import React, { useEffect, useState } from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../common/components/header';
import Comments from '../../common/components/comments';
import Modal from '../../common/components/modal';
import { useSelector } from 'react-redux';

function DetailedView({ match }) {
    const userdetails = useSelector((state) => state.userReducer.userDetails);
    const history = useHistory();
    const [post, setPost] = useState({});
    const [hasLoaded, setHasloaded] = useState(false);
    const imageURL = post.image
        ? post.image
        : 'https://movingimage.my/wp-content/uploads/2019/01/contentw.jpeg';

    //Function to get the post.
    const getPost = (id) => {
        fetch(`http://localhost:3002/home/post/${id}`)
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                console.log('Detailed view - ', data);
                setPost(data);
                setHasloaded(true);
            });
    };

    //Function to delete the post only if author is the logged in user.
    const deletePost = () => {
        fetch(`http://localhost:3002/home/delete/${match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                history.push('/home');
                return response.json();
            })
            .then((data) => {
                console.log('Post Deleted');
            });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        getPost(match.params.id);
    }, []);

    return (
        <>
            <Header />
            <div id="details-container">
                <img src={imageURL} alt="detailsbanner" data-aos="zoom-in" />
                <div id="eachItem">
                    {userdetails.username === post.username ? (
                        <Link to={`/edit/${post._id}`}>
                            <i
                                className="far fa-edit"
                                title="Edit Item"
                                value="edit"
                            ></i>
                        </Link>
                    ) : (
                        ``
                    )}
                    {userdetails.username === post.username ? (
                        <i
                            className="far fa-trash-alt"
                            title="Delete Item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        ></i>
                    ) : (
                        ``
                    )}
                </div>

                <div id="heading">{post.title}</div>
                <div id="subheading">
                    <Link
                        to={`/home/?username=${post.username}`}
                        className="userlink"
                    >
                        <p>
                            Author : <span id="authname">{post.username}</span>
                        </p>
                    </Link>
                    <p id="post-date">
                        {new Date(post.createdDate).toDateString()}
                    </p>
                </div>

                <div id="description">
                    <pre className="postdesc">{post.description}</pre>
                </div>
                {hasLoaded && <Comments post={post} />}
            </div>

            <Modal
                title="Save changes?"
                description="Are you sure you want to Delete this post?"
                okButtonlabel="Confirm"
                clickHandler={deletePost}
            />
        </>
    );
}

export default DetailedView;
