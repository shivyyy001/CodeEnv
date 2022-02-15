import Button from '../../common/components/button';
import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../../common/components/header';
import blog from '../../constants/blog.jpeg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { notifyMe } from '../../common/components/notification';

function CreatePost() {
    const initialValues = {
        title: '',
        description: '',
        image: '',
        username: JSON.parse(localStorage.getItem('userdetails')).username,
        categories: '',
        createdDate: new Date(),
    };

    const [post, setPost] = useState(initialValues);
    const [file, setfile] = useState('');
    const [img, setImg] = useState('');

    const imgURL = post.image ? post.image : blog;
    const history = useHistory();

    const uploadImage = async (fileData) => {
        try {
            const ans = await axios.post(
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

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const redirect = () => {
        history.push('/home');
    };

    const createPost = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/home/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
            body: JSON.stringify(post),
        })
            .then((response) => {
                if (!response.ok) {
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                if (!data) {
                    notifyMe('error', 'Some error occured !');
                } else {
                    notifyMe('success', 'Post created !');
                    setTimeout(redirect, 2500);
                }
            });
    };

    return (
        <>
            <Header />
            <div id="create-container" className="row">
                <div className="col col-md-7 col-sm-12 col-12 img-container">
                    <img src={imgURL} alt="createbanner" />
                </div>

                <div id="create-form" className="col col-md-5 col-sm-12 col-12">
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                src="https://img.icons8.com/clouds/500/4a90e2/create-new.png"
                                alt="create-img"
                            />
                        </div>
                        <form>
                            <div className="d-flex flex-row">
                                <div className="add-icon">
                                    <label htmlFor="fileInput">
                                        <i
                                            className="fas fa-plus-circle text-primary"
                                            title="Add Image"
                                            style={{ cursor: 'pointer' }}
                                        ></i>
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: 'none' }}
                                        onChange={(e) =>
                                            setfile(e.target.files[0])
                                        }
                                    />
                                </div>
                                <div className="form-group" id="title">
                                    <input
                                        name="categories"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="* Category"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="form-group" id="title">
                                    <input
                                        name="title"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="* Title"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div>
                                    <Button
                                        label="Publish"
                                        className="btn btn-primary"
                                        clickHandler={createPost}
                                    ></Button>
                                </div>
                            </div>
                            <div className="form-group" id="textarea">
                                <textarea
                                    name="description"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="12"
                                    placeholder="*✍️ Write it up here...."
                                    onChange={(e) => handleChange(e)}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
}

export default CreatePost;
