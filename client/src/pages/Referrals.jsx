import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAddress } from "@thirdweb-dev/react";
import { isAuth } from "../helper/Auth";
import Referrals from "../components/layouts/scoreboard/referrals";


const MyReferrals = () => {
    const address = useAddress();
    const auth = isAuth?.referralCode

    console.log(auth)

    return (
        <div>
            <Header />

            <section className="fl-page-title">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-inner flex">
                                <div className="page-title-heading">
                                    <h2 className="heading">My Referrals</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>My Referrals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <>
                {address ? (
                    <>
                        {auth === "fasle" ?
                            <div>
                                <section className="tf-section login-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-create-item-content">
                                                    <div className="form-create-item">
                                                        <div className="sc-heading">
                                                            <h3>You have not generated your Referral Link</h3>
                                                            <p className="desc">
                                                                You need to generate your referral link to be able to view your referrals{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            :
                            <Referrals />
                        }
                    </>
                ) : (
                    <div>
                        <section className="tf-section login-page">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-create-item-content">
                                            <div className="form-create-item">
                                                <div className="sc-heading">
                                                    <h3>Connect Your Wallet</h3>
                                                    <p className="desc">
                                                        You need to connect your ETH wallet to take the test{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </>
            <Footer />
        </div>
    );
};

export default  MyReferrals;
