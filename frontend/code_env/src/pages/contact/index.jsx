import React, { useState } from 'react';
import Button from '../../common/components/button';
import './styles.css';
import Header from '../../common/components/header';
import { useHistory } from 'react-router-dom';
import { notifyMe } from '../../common/components/notification';
import { Toaster } from 'react-hot-toast';

const Contact = () => {

    //Initial details of user.
    const detailsTemplate = {
        name: '',
        email: '',
        message: '',
    };

    const [details, setDetails] = useState(detailsTemplate);
    const history = useHistory();
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const redirect = () => {
        history.push('/home');
    };

    //Function to post the message.
    const postContact = (e) => {
        e.preventDefault();

        fetch('http://localhost:3002/contact/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
            body: JSON.stringify(details),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (
                    data.errors &&
                    data.errors.email &&
                    data.errors.email.message === 'Not a valid email'
                ) {
                    notifyMe('error', 'Enter a valid email !');
                } else if (
                    data.errors &&
                    (data.errors.name ||
                        data.errors.email ||
                        data.errors.message)
                ) {
                    notifyMe('error', 'All fields are mandatory !');
                } else {
                    notifyMe('success', 'Thankyou for reaching us !');
                    setTimeout(redirect, 3000);
                }
            });
    };

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-9">
                        <div className="contact-us text-center">
                            <h3 className="contact-title">CONTACT US</h3>
                            <div className="row contact-row">
                                <div className="col-md-6 icons-div">
                                    <div className="mt-5 text-center px-3">
                                        <div className="d-flex flex-row align-items-center">
                                            {' '}
                                            <span className="icons">
                                                <img
                                                    src="https://img.icons8.com/bubbles/500/000000/address.png"
                                                    alt="address"
                                                />
                                            </span>
                                            <div className="info-div text-left">
                                                {' '}
                                                <span className="info-head">
                                                    Address
                                                </span>
                                                <p className="info-contact">
                                                    461, Sugar camp, San jose,
                                                    California, USA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mt-3">
                                            {' '}
                                            <span className="icons">
                                                <img
                                                    src="https://img.icons8.com/bubbles/500/000000/phone--v1.png"
                                                    alt="phone"
                                                />
                                            </span>
                                            <div className="info-div text-left">
                                                {' '}
                                                <span className="info-head">
                                                    Phone
                                                </span>
                                                <p className="info-contact">
                                                    501 205 2929
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mt-3">
                                            {' '}
                                            <span className="icons">
                                                <img
                                                    src="https://img.icons8.com/bubbles/500/000000/apple-mail.png"
                                                    alt="mail"
                                                />
                                            </span>
                                            <div className="info-div text-left">
                                                <span className="info-head">
                                                    Mail
                                                </span>
                                                <p className="info-contact">
                                                    contact @ codeenv . com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center px-1">
                                        <div className="forms p-4 py-5">
                                            <div className="d-flex justify-content-center">
                                                <h5 className="send-title">
                                                    Send Message{' '}
                                                </h5>

                                                <img
                                                    src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/480/000000/external-send-social-media-prettycons-lineal-color-prettycons.png"
                                                    alt="send-icon"
                                                />
                                            </div>

                                            <div className="mt-4 inputs d-flex flex-column">
                                                {' '}
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control contact-inp"
                                                    placeholder="Name"
                                                    onChange={(e) =>
                                                        handleChange(e)
                                                    }
                                                />{' '}
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control contact-inp"
                                                    placeholder="Email"
                                                    onChange={(e) =>
                                                        handleChange(e)
                                                    }
                                                />{' '}
                                                <textarea
                                                    name="message"
                                                    className="form-control contact-inp"
                                                    placeholder="Type your message"
                                                    onChange={(e) =>
                                                        handleChange(e)
                                                    }
                                                ></textarea>{' '}
                                            </div>
                                            <div className="button mt-4 text-left">
                                                {' '}
                                                <Button
                                                    className="btn btn-send"
                                                    label="Submit"
                                                    style={{ width: '60%' }}
                                                    clickHandler={postContact}
                                                />{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Contact;
