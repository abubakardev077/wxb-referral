import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '../components/header/Header';
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from '../components/footer/Footer';

import img from "../assets/images/slider/img-slider-1.png";

const Form = () => {

    const form = useRef();

    const [formState, setFormState] = useState('');

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wxgi578', 'template_89tirab', form.current, 'mO73iz-N-tTLkUMaF')
            .then((result) => {
                console.log(result.text);
                setFormState('success');
            }, (error) => {
                console.log(error.text);
                setFormState('failure');
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
                                <h2 className="heading">Merch Form</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Merch Form</li>
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
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Merchandise Form</h3>
                                    <p className="desc">Fill in the form with the appropriate details</p>

                                </div>
                                <form id="create-item-1" acceptCharset="utf-8" ref={form} onSubmit={sendEmail}>
                                    <input name="full_name" type="text" placeholder="Full Name"
                                        required />

                                    <input name="phone" type="text" placeholder="Phone Number" required />

                                    <div className="input-group">
                                        <input name="discord_name" type="text" placeholder="Discord Name" required />

                                        <input name="wallet_address" type="text" placeholder="Polygon Wallet Address"
                                            required />
                                    </div>
                                    <input name="opensea" type="text" placeholder="Opensea Profile Link(To generate QR Code)"
                                        required />

                                    <div className="input-group">
                                        <input name="country" type="text" placeholder="Country"
                                            required />

                                        <input name="shipping_address" type="text" placeholder="Shipping Address"
                                            required />
                                    </div>
                                    <button name="submit" type="submit"
                                        className="sc-button style letter style-2"><span>Submit Form</span> </button>
                                    <div className='bottom-inner'>
                                        {
                                            formState == 'success' ? <p>Form Successfully Submitted</p> : <></>
                                        }
                                        {
                                            formState == 'failure' ? <p className='text-danger'>Form Submission Failed, Try Again Later</p> : <></>
                                        }
                                    </div>
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
