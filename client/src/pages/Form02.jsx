import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '../components/header/Header';
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from '../components/footer/Footer';
import { Modal, Button } from 'react-bootstrap';

import img from "../assets/images/nfts/wxba.jpg";

const Form = () => {

    const form = useRef();

    const [formState, setFormState] = useState('');
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => {
        window.location.replace('/')
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wxgi578', 'template_u5ogb8e', form.current, 'mO73iz-N-tTLkUMaF')
            .then((result) => {
                console.log(result.text);
                setShow(true)
            }, (error) => {
                console.log(error.text);
                setShow1(true);
            });
    };

    return <div>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Academy Form</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Academy Form</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="tf-section login-page register-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <>
                            <Modal show={show} onHide={handleClose} contentClassName="infor-bids" backdrop='static' keyboard="False" >
                                <Modal.Body className="">
                                    <div> <svg fill="#cba842" width="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg></div>
                                    <h6>Form Submitted Successfully</h6>
                                    <Button className="sc-button style-2" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Body>
                            </Modal>
                        </>
                    </div>
                    <div className="col-md-12">
                        <>
                            <Modal show={show1} onHide={handleClose} contentClassName="infor-bids" backdrop='static' keyboard="False" >
                                <Modal.Body className="">
                                    <div>
                                        <svg fill="#cc2900" width="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg></div>
                                    <h6>Form Submission Failed</h6>
                                    <Button className="sc-button style-2" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Body>
                            </Modal>
                        </>
                    </div>
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Academy Form</h3>
                                    <p className="desc">Fill in the form with the appropriate details</p>

                                </div>
                                <form id="create-item-1" acceptCharset="utf-8" ref={form} onSubmit={sendEmail}>
                                    <input name="full_name" type="text" placeholder="Full Name"
                                        required />

                                    <input name="wallet_address" type="text" placeholder="Polygon Wallet Address"
                                        required />

                                    <div className="input-group">
                                        <input name="discord_name" type="text" placeholder="Discord Name" required />

                                        <input name="gender" type="text" placeholder="Gender"
                                            required />
                                    </div>
                                    <div className="input-group">
                                        <input name="country" type="text" placeholder="Country"
                                            required />

                                        <input name="instagram" type="text" placeholder="Instagram Link"
                                            required />
                                    </div>
                                    <div className="input-group">
                                        <input name="twitter" type="text" placeholder="Twitter Link"
                                            required />


                                        <input name="linkedin" type="text" placeholder="Linkedln Link"
                                            required />
                                    </div>
                                    <button name="submit" type="submit"
                                        className="sc-button style letter style-2"><span>Submit Form</span> </button>
                                </form>
                            </div>
                            <div className="form-background">
                                <img src={img} alt="wxb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Newsletters />
        <Footer />
    </div>;
};

export default Form;
