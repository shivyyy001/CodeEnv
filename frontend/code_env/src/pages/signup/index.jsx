import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button';
import { Toaster } from 'react-hot-toast';
import { notifyMe } from '../../common/components/notification';

function Signup() {
    const history = useHistory();
    const [user, setUser] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const redirect = () => {
        history.push('/');
    };

    const createUser = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (!data.errors) {
                    notifyMe('success','User created!');
                    setTimeout(redirect, 2500);
                } else {
                    notifyMe('error',data.errors[0].msg);
                }
            });
    };

    return (
        <section className="vh-100 v-signup">
            <div className="container">
                <div className="row container11 mt-4">
                    <div className="col-md-7 first-col1">
                        <div className="typewriter1">
                            <h1>Welcome to CodeEnv.com</h1>
                        </div>
                        <div className="machine1">
                            <div>
                                <div className="slots" id="slot11">
                                    <div className="values" id="value1">
                                        💬
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Comment
                                </p>
                            </div>
                            <div>
                                <div className="slots" id="slot22">
                                    <div className="values" id="value2">
                                        ✔️
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Save
                                </p>
                            </div>
                            <div>
                                <div className="slots" id="slot33">
                                    <div className="values" id="value3">
                                        🗑️
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Delete
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 second-col1">
                        <div className="align-self-center">
                            <div className="row">
                                <div className="col-12 signup-img">
                                    <img
                                        src="https://img.icons8.com/bubbles/500/000000/add-user-male.png"
                                        alt="adduser-img"
                                    />
                                </div>
                                <div className="col-12 sign-text1">
                                    <p>Create new account</p>
                                </div>
                            </div>
                            <form onSubmit={createUser}>
                                <div className="mb-3">
                                    <label
                                        for="exampleInputEmail11"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail11"
                                        aria-describedby="emailHelp1"
                                        placeholder="Enter username"
                                        name="username"
                                        onChange={handleChange}
                                    />
                                    <div id="emailHelp1" className="form-text">
                                        We'll never share your details with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="exampleInputPassword11"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword11"
                                        placeholder="**********"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="btn btn-outline-light"
                                    label="Signup"
                                ></Button>

                                {/* <Button type="submit" className="btn btn-outline-light"/> */}

                                <div className="mb-3">
                                    <span>Already have an account?</span>{' '}
                                    <Link
                                        to="/"
                                        style={{ textDecoration: 'none' }}
                                        className="reglink1"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <Toaster />
        </section>
    );
}

export default Signup;
