import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAddress } from "@thirdweb-dev/react";
import { isAuth } from "../helper/Auth";
import Referrals from "../components/layouts/scoreboard/admin";


const Admin = () => {
    const address = useAddress();
    const auth = isAuth?.referralCode

    const authAddress = [
        "0x3062ad7e484C0bCa88cbE1F0B939Efa4738bf5dA",
        "0xCae5A70E19526B5aB844Cb3e04E4f0EAe4CfcaEe", 
        "0x8a211ac37f889cc5e5d093f5392ec48f4c163222"

    ]
    if(address) {
        if(authAddress.includes(address) ){
            console.log("1");} else {
                console.log("0")
            }
    }
    
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
                                    <h2 className="heading">Referral Admin</h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <>
                {address ? (
                    <>
                        {authAddress.includes(address) ?
                         <Referrals />
                            :
                            <div>
                                <section className="tf-section login-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-create-item-content">
                                                    <div className="form-create-item">
                                                        <div className="sc-heading">
                                                            <h3>Access Restricted</h3>
                                                            <p className="desc">
                                                                You need to have admin access to view this page{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
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
                                                        You need to connect your ETH wallet{" "}
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

export default  Admin;
