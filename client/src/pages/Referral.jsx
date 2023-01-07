import React, { useRef, useState, useEffect } from 'react';
import { isAuth, setLocalStorage } from '../helper/Auth';
import sha256 from 'crypto-js/sha256';
import axios from 'axios';
import { useAddress } from "@thirdweb-dev/react";

import img from "../assets/images/slider/img-slider-1.png";

const Referral = () => {

  const form = useRef();
  const address = useAddress();

  const [formState, setFormState] = useState('');
  const auth = isAuth()?.referralCode;
  const [generatedCode, setGeneratedCode] = useState(auth);

  function generateString(walletAddress, message) {
    let encodedString = message.charCodeAt(0).toString(16) + message.charCodeAt(1).toString(16) + 
    walletAddress.charAt(5) + walletAddress.substring(8,12) +  message.charCodeAt(3).toString(16) + 
    walletAddress.charAt(6) + message.charCodeAt(4).toString(16);

    return encodedString;
  }


  const generateCode = (e) => {
    e.preventDefault();
    setFormState('pending');
    let referralCode = generateString(address, "This is WXB");

    console.log(referralCode);
    setFormState('');

    let postData = { referralCode }
    postData._id = isAuth()?._id;
    axios
      .put(`https://wxb-referral-apis.vercel.app/api/user/update`, postData)
      .then((res) => {
        setLocalStorage('user', res.data);
        setGeneratedCode(referralCode)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  /*
      const postData = {
          testScoreB,
          isTestCompleted,
          dateCompletedB
        }
      
          if (showScore === true) {
              postData._id = isAuth()?._id;
              axios
                .put(`https://wxb-referral-apis.vercel.app/api/user/update`, postData)
                .then((res) => {
                  setLocalStorage('user', res.data);
                  window.location.reload()
                })
                .catch((err) => {
                  console.log(err)
                });
          }
          */


  return <div>

    <section className="fl-page-title">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title-inner flex">
              <div className="page-title-heading">
                <h2 className="heading">Referral Platform</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <>
      {address ? (
        <section className="tf-section login-page register-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="form-create-item-content">
                  <div className="form-create-item">
                    <div className="sc-heading">
                      <h3>Generate Referral Code</h3>
                      {auth == undefined ?
                        <p className="desc">Click the 'Generate Code' Button Below to Get Your Special Referral Link</p>
                        :
                        <p className="desc">You can copy and share your WXB Referral Link</p>
                      }


                    </div>
                    <form id="create-item-1" acceptCharset="utf-8" >
                      {
                        auth == undefined ? (

                          <>
                            <button name="submit" type="submit"
                              className="sc-button style letter style-2" onClick={generateCode}><span>Generate Code</span> </button>
                            <div className='bottom-inner'>
                              {
                                formState == 'pending' ? <p>Generating some WXB Special just for you!!!</p> : <></>
                              }
                            </div>
                          </>
                        )

                          :

                          (
                            <>
                              <h4 className='text-center'>WXBA (Worxie Billionaire Academy) Mint Referral Link</h4>
                              <br />
                              <input className='text-center' name="full_name" type="text" value={`https://workxiebillionaire.xyz/wxba-mint/${generatedCode}`} />
                              <br />
                              <br />
                              <br />
                              <br />
                              <h4 className='text-center'>TEC (The Emperor Club) Mint Referral Link</h4>
                              <br />
                              <input className='text-center' name="full_name" type="text" value={`https://workxiebillionaire.xyz/tec-mint/${generatedCode}`} />

                            </>
                          )
                      }



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

  </div>;
};

export default Referral;
