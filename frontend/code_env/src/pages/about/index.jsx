import React from 'react';
import Header from '../../common/components/header';
import './styles.css';
import mypic from '../../constants/my_pic.jpg';

const About = () => {
    return (
        <>
            <Header />
            <div className="container-fluid pt-4">
                <div className="row no-gutters position-relative">
                    <div className="left-header d-none d-lg-block col-lg-3 col-xl-4">
                        <div className="v-center-box d-flex align-items-end text-uppercase"></div>
                    </div>
                    <div
                        className="col-lg-12 col-xl-12"
                        style={{ backgroundColor: 'white' }}
                    >
                        <div className="main-content p-5">
                            <div className="main-header mb-4">
                                <h6
                                    className="sub-heading text-uppercase d-block mb-2"
                                    style={{ color: 'black' }}
                                >
                                    Who I am
                                </h6>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://img.icons8.com/bubbles/500/000000/about.png"
                                        alt="aboutimg"
                                    />
                                    <h1
                                        className="main-heading d-inline-block text-uppercase pb-1"
                                        style={{ color: 'black' }}
                                    >
                                        &lt; About The Creator &gt;
                                    </h1>
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-0">
                                <div className="mb-5 mb-sm-4 col-md-3 d-flex justify-content-center">
                                    <img src={mypic} alt="Colorful Wall" />
                                </div>
                                <div className="col-md-9">
                                    <div className="about__text mb-5 mb-sm-4 mb-md-4">
                                        <h3 className="namehead">
                                            I'm Shivansh Kaushal
                                        </h3>
                                        <p
                                            className="m-0"
                                            style={{ color: 'black' }}
                                        >
                                            A Self motivated , Ambitious and
                                            Hardworking individual with good
                                            learning skills . Also a Dependable
                                            person who is great at time
                                            management and who is ready for
                                            opportunities that comes along while
                                            learning. <br />
                                            <b>My life motto </b> is that the
                                            past is gone, future is what we
                                            don't know about, so present is what
                                            we have to make it count.
                                            <br />
                                            <b>
                                                Technical skills are as follows
                                                -{' '}
                                            </b>
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h3 className="techtitle">Front-End</h3>
                                    </div>
                                    <hr />

                                    <div className="row no-gutters mb-0 mb-sm-4">
                                        <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                                            <div className="media">
                                                <i className="fab fa-html5 icon-18 mr-3"></i>
                                                <div className="media-body">
                                                    <h4 className="m-0">
                                                        Html
                                                    </h4>
                                                    <p className="m-0">
                                                        2+ years of experience
                                                        in Html which is a code
                                                        that is used to
                                                        structure a web page and
                                                        its content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                                            <div className="media">
                                                <i className="fab fa-css3-alt icon-18 mr-3"></i>
                                                <div className="media-body">
                                                    <h4 className="m-0">CSS</h4>
                                                    <p className="m-0">
                                                        2+ years of experience
                                                        in CSS which is a
                                                        stylesheet language used
                                                        to describe the
                                                        presentation of a
                                                        document written in HTML
                                                        or XML.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about__skills">
                                        <div className="row no-gutters mb-0 mb-sm-4">
                                            <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                                                <div className="media">
                                                    <i className="fab fa-bootstrap icon-18 mr-3"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            Bootstrap
                                                        </h4>
                                                        <p className="m-0">
                                                            2+ years of
                                                            experience in
                                                            Bootstrap which is
                                                            the most popular CSS
                                                            Framework for
                                                            developing
                                                            responsive and
                                                            mobile-first
                                                            websites.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                                                <div className="media">
                                                    <i className="fab fa-react icon-18 mr-3"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            React
                                                        </h4>
                                                        <p className="m-0">
                                                            1+ year of
                                                            experience in
                                                            React.js which is a
                                                            declarative,
                                                            efficient, and
                                                            flexible JavaScript
                                                            library for building
                                                            user interfaces.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center m-0">
                                            <h3 className="techtitle">
                                                Back-End
                                            </h3>
                                        </div>
                                        <hr />
                                        <div className="row no-gutters mb-0 mb-sm-4">
                                            <div className="mb-4 pl-sm-3 col-sm-6">
                                                <div className="media">
                                                    <i className="fab fa-js-square icon-18 mr-3"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            Javascript
                                                        </h4>
                                                        <p className="m-0">
                                                            2+ years of
                                                            experience in
                                                            Javascript which is
                                                            a scripting language
                                                            that enables you to
                                                            create dynamically
                                                            updating content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 pl-sm-3 col-sm-6">
                                                <div className="media">
                                                    <i className="fab fa-node-js icon-18 mr-3"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            Node.js
                                                        </h4>
                                                        <p className="m-0">
                                                            6 months of
                                                            experience in
                                                            Node.js which is a
                                                            platform built on
                                                            Chrome's JavaScript
                                                            runtime for easily
                                                            building fast and
                                                            scalable network
                                                            applications.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row no-gutters mb-0 mb-sm-4">
                                            <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                                                <div className="media">
                                                    <i className="fab fa-js icon-18 mr-2"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            Express.js
                                                        </h4>
                                                        <p className="m-0">
                                                            6 months of
                                                            experience in
                                                            Express.js which is
                                                            a Node.js web
                                                            application server
                                                            framework, designed
                                                            for building
                                                            single-page,
                                                            multi-page, and
                                                            hybrid web
                                                            applications.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                                                <div className="media">
                                                    <i className="fas fa-database icon-18 mr-2"></i>
                                                    <div className="media-body">
                                                        <h4 className="m-0">
                                                            MongoDB
                                                        </h4>
                                                        <p className="m-0">
                                                            6 months of
                                                            experience in
                                                            MongoDB which is an
                                                            object-oriented,
                                                            simple, dynamic, and
                                                            scalable NoSQL
                                                            database. It is
                                                            based on the NoSQL
                                                            document store
                                                            model.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
