import Button from '../../common/components/button';
import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from '../../common/components/header';
import blog from '../../constants/blog.jpeg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { notifyMe } from '../../common/components/notification';
import { Toaster } from 'react-hot-toast';

function UpdatePost({ match }) {
    const history = useHistory();

    const initialValues = {
        title: '',
        description: '',
        image: '',
        username: 'shivyyy_21',
        categories: 'All',
        createdDate: new Date(),
    };

    const [post, setPost] = useState(initialValues);
    const [file, setfile] = useState('');
    const [img, setImg] = useState('');

    const imgURL = post.image ? post.image : blog;

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

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
                console.log('Data to edit - ', data);
                setPost(data);
            });
    };

    const redirect = () => {
        history.push(`/details/${match.params.id}`);
    };

    const updatePost = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3002/home/edit/${match.params.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
            body: JSON.stringify(post),
        })
            .then((response) => {
                if (!response.ok) {
                    notifyMe('error', 'Enter a unique title !');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    notifyMe('success', 'Post updated !');
                    setTimeout(redirect, 2500);
                }
            });
    };

    useEffect(() => {
        getPost(match.params.id);
    }, []);

    const uploadImage = async (fileData) => {
        console.log(fileData);
        try {
            return await axios.post(
                `http://localhost:3002/home/file/upload`,
                fileData,
                {
                    headers: {
                        'auth-token': localStorage.getItem('auth-key'),
                    },
                }
            );
        } catch (error) {
            console.log('Error while calling uploadFile API ', error);
        }
    };

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);
                const image = await uploadImage(data);
                post.image = image.data;
                setImg(image.data);
            }
        };
        getImage();
    }, [file]);

    return (
        <>
            <Header />
            <div id="update-container">
                <img src={imgURL} alt="updatebanner" />

                <div id="update-form">
                    <form>
                        <div className="d-flex flex-row">
                            <div id="add-icon">
                                <label htmlFor="fileInput">
                                    <i
                                        className="fas fa-plus-circle text-primary"
                                        title="Update Image"
                                        style={{ cursor: 'pointer' }}
                                    ></i>
                                </label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setfile(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group" id="u_title">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Title goes here"
                                    value={post.title}
                                    name="title"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div>
                                <Button
                                    label="Update"
                                    className="btn btn-primary"
                                    clickHandler={(e) => updatePost(e)}
                                ></Button>
                            </div>
                        </div>
                        <div className="form-group" id="u_textarea">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="8"
                                placeholder="✍️ Write it up here...."
                                value={post.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </>
    );
}

export default UpdatePost;
