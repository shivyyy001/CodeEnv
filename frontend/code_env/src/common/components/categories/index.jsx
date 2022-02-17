import React from 'react';
import Button from '../button';
import './styles.css';
import { categories } from '../../../assets/categories';
import { Link, useLocation } from 'react-router-dom';
function Categories() {
    //using useLocation hook to get the username from query params if there.
    const search = useLocation().search;
    const queryusername = new URLSearchParams(search).get('username');

    return (
        <>
            <Link to="/create">
                <Button
                    className="btn btn-outline-secondary"
                    label="Create Post"
                    style={{ margin: '20px', width: '90%' }}
                />
            </Link>
            <div className="container icon-container">
                <div className="d-flex justify-content-center row icon-row">
                    <div className="col icon-col">
                        <a
                            href="https://www.facebook.com/shivansh.kaushal.18/"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                    <div className="col icon-col">
                        <a
                            href="https://www.instagram.com/shivyy.21_/"
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="col icon-col">
                        <a
                            href="https://github.com/shivyyy001?tab=repositories"
                            target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="col icon-col">
                        <a
                            href="https://www.linkedin.com/in/shivansh-kaushal-8890531b2/"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#HashTags</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, i) => {
                        if (i != 0)
                            return (
                                <tr key={i}>
                                    <td>
                                        <ol className="category-list">
                                            <Link
                                                to={
                                                    queryusername
                                                        ? `/home?username=${queryusername}&categories=${category}`
                                                        : `/home?categories=${category}`
                                                }
                                                className="categorylinks"
                                            >
                                                {' '}
                                                <li className="items">
                                                    {category}
                                                </li>
                                            </Link>
                                        </ol>
                                    </td>
                                </tr>
                            );
                        else
                            return (
                                <tr key={i}>
                                    <td>
                                        <ol className="category-list">
                                            <Link
                                                to={`/home`}
                                                className="categorylinks"
                                            >
                                                {' '}
                                                <li className="items">
                                                    {category}
                                                </li>
                                            </Link>
                                        </ol>
                                    </td>
                                </tr>
                            );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Categories;
