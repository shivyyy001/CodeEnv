import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import layers from './../../../assets/layers.png';
import { useSelector } from 'react-redux';

export default function Header() {

    //Getting userdetails and checking if user is authenicated or not using redux.
    const userDetails = useSelector((state) => state.userReducer.userDetails);
    const isAuthenticated =
        useSelector((state) => state.userReducer.isAuthenticated) ||
        localStorage.getItem('isAuthenticated');

    const logoutHandler = () => {
        localStorage.clear();
    };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">
                        <span className="nav-title">
                            <div className="project-icon-div">
                                <img src={layers} alt="project-icon" />
                            </div>{' '}
                            CodeEnv
                        </span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/dictionary" className="nav-link">
                                    CodeEnv Dictionary{' '}
                                    <img
                                        src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/480/000000/external-book-lifestyle-icongeek26-linear-colour-icongeek26.png"
                                        alt="dictionary-img"
                                    />
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/"
                                    onClick={logoutHandler}
                                    className="nav-link"
                                >
                                    Logout{' '}
                                    <img
                                        src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/480/000000/external-online-account-logout-with-arrow-direction-mark-login-green-tal-revivo.png"
                                        alt="logout-img"
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-row align-items-center">
                            <span className="d-flex justify-content-center profile-text">
                                {isAuthenticated ? userDetails.username : ''}
                            </span>
                            &nbsp;
                            {isAuthenticated ? (
                                <Link
                                    to={`/home?username=${userDetails.username}`}
                                >
                                    <img
                                        src="https://img.icons8.com/cotton/512/000000/user-male-circle.png"
                                        alt="profile-img"
                                        title="My posts"
                                    />
                                </Link>
                            ) : (
                                ``
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
