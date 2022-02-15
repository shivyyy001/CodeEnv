import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../common/components/button';
import { useDispatch } from 'react-redux';
import {
    setUserAuthenticated as setUserAuthenticatedRedux,
    setUserDetails as setUserDetailsRedux,
} from '../../redux/actions';
import { notifyMe } from '../../common/components/notification';
import { Toaster } from 'react-hot-toast';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const redirect = () => {
        history.push('/home');
    };

    const loginUser = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/user/login', {
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
                if (!data.errors && data.authtoken) {
                    localStorage.setItem('auth-key', data.authtoken);
                    localStorage.setItem('isAuthenticated', true);
                    dispatch(setUserAuthenticatedRedux(true));
                    getUser(data.authtoken);
                }
                else{
                    notifyMe('error',data.errors[0].msg);
                }
            });
    };

    const getUser = async (authtoken) => {
        fetch('http://localhost:3002/user/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': authtoken,
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.ok) return response.json();
                return { errors: 'Response not ok' };
            })
            .then((data) => {
                if (!data.errors) {
                    console.log(data);
                    dispatch(setUserDetailsRedux(data));
                    localStorage.setItem('userdetails', JSON.stringify(data));
                    notifyMe('success', 'Logging in...');
                    setTimeout(redirect, 2500);
                }
            });
    };

    return (
        <section className="vh-100 v-login">
            <div className="container">
                {/* <div className="container1"> */}
                <div className="row container1">
                    <div className="col-md-7 first-col">
                        <div className="typewriter">
                            <h1>Welcome to CodeEnv.com</h1>
                        </div>
                        <div className="machine">
                            <div>
                                <div className="slot" id="slot1">
                                    <div className="value" id="value1">
                                        🧐
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Think
                                </p>
                            </div>
                            <div>
                                <div className="slot" id="slot2">
                                    <div className="value" id="value2">
                                        ✍️
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Write
                                </p>
                            </div>
                            <div>
                                <div className="slot" id="slot3">
                                    <div className="value" id="value3">
                                        🔗
                                    </div>
                                </div>
                                <p className="value-text" id="value3-text">
                                    Connect
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 second-col">
                        <div className="align-self-center">
                            <div className="row">
                                <div className="col-12 sign-img">
                                    <img
                                        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/480/000000/external-user-internet-security-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                                        alt="user-img"
                                    />
                                </div>
                                <div className="col-12 sign-text">
                                    <p>Sign into your account</p>
                                </div>
                            </div>
                            <form onSubmit={loginUser}>
                                <div className="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter username"
                                        name="username"
                                        onChange={handleChange}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your details with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="exampleInputPassword1"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="**********"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="btn btn-outline-light"
                                    label="Login"
                                ></Button>

                                <div className="mb-3">
                                    <span>Don't have an account?</span>{' '}
                                    <Link
                                        to="/signup"
                                        style={{ textDecoration: 'none' }}
                                        className="reglink"
                                    >
                                        Register
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

export default Login;
