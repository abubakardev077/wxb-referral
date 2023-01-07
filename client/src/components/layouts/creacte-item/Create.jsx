import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import {
  useSDK,
  useAddress,
  useContract,
  useActiveClaimCondition,
  useEditionDrop,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";

import img from "../../../assets/images/nfts/wxba.jpg";

const myEditionDropContractAddress =
  "0x0c709b96d86227eE41f1120841aa9d2a5C12e55F";

const tokenId = 0;

const Create = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [fix, setFix] = useState("Error Occured During Transaction");
  const handleClose = () => {
    setShow(false);
    setShow1(false);
  };
  const address = useAddress();
  //const editionDrop = useEditionDrop(myEditionDropContractAddress);
  const { contract: editionDrop } = useContract(myEditionDropContractAddress);

  const sdk = useSDK();
  const signer = sdk.signer;

  // The amount the user claims, updates when they type a value into the input field.
  const [quantity, setQuantity] = useState(1); // default to 1

  const totalPrice = quantity * 0.02;

  // Load the active claim condition
  const {
    data: activeClaimCondition,
    isLoading,
    error,
  } = useActiveClaimCondition(editionDrop, BigNumber.from(tokenId));
  console.log(activeClaimCondition);
  /*
  useEffect(async () => {
    const nft = await editionDrop.get("0");
  }, [])
  */

  async function mintNFT(e) {
    e.preventDefault();
    try {
      const tx = await editionDrop.claimTo(address, tokenId, quantity);
      const receipt = tx.receipt; // the transaction receipt
      console.log(receipt);
      setShow(true);
    } catch (err) {
      setShow1(true);
      console.log(err);
    }
  }
  return (
    <section className="tf-section login-page register-page">
      <div className="col-md-12">
        <>
          <Modal
            show={show}
            onHide={handleClose}
            contentClassName="infor-bids"
            backdrop="static"
            keyboard="False"
          >
            <Modal.Body className="">
              <div>
                {" "}
                <svg
                  fill="#cba842"
                  width="70px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg>
              </div>
              <h6>
                Congratulations! You have successfully minted {quantity} WXBA
                NFT
              </h6>
              <Button className="sc-button style-2" onClick={handleClose}>
                Close
              </Button>
            </Modal.Body>
          </Modal>
        </>
      </div>
      <div className="col-md-12">
        <>
          <Modal
            show={show1}
            onHide={handleClose}
            contentClassName="infor-bids"
            backdrop="static"
            keyboard="False"
          >
            <Modal.Body className="">
              <div>
                <svg
                  fill="#cc2900"
                  width="70px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              </div>
              <h6>{fix}</h6>
              <Button className="sc-button style-2" onClick={handleClose}>
                Close
              </Button>
            </Modal.Body>
          </Modal>
        </>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>Mint NFT</h3>
                  <p className="desc">777 WXB Academy Membership NFT</p>
                </div>
                <form
                  id="create-item-1"
                  acceptCharset="utf-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-group">
                    <h5 className="text-left">Total Mint Balance:</h5>
                    <h5>
                      {activeClaimCondition ? (
                        <>
                          {/* Claimed supply so far */}
                          {activeClaimCondition.currentMintSupply}
                          {" / "}
                          {activeClaimCondition.maxQuantity}
                        </>
                      ) : (
                        // Show loading state if we're still loading the supply
                        <>Loading...</>
                      )}
                    </h5>
                  </div>
                  <hr />
                  <div className="input-group">
                    <h5 className="text-left">Price per Mint:</h5>
                    <h5>
                      {activeClaimCondition ? (
                        <>
                          {/* Claimed supply so far */}
                          {
                            activeClaimCondition.currencyMetadata.displayValue
                          }{" "}
                          ETH
                        </>
                      ) : (
                        // Show loading state if we're still loading the supply
                        <>Loading...</>
                      )}
                    </h5>
                  </div>
                  <hr />

                  <div className="input-group duo-btn">
                    <button
                      className="mode_switcherx"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <h4 className="mx-5 my-3">{quantity}</h4>
                    <button
                      className="mode_switcherx"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= 500}
                    >
                      +
                    </button>
                  </div>

                  <hr />
                  <div className="input-group">
                    <h5 className="text-left">Total Mint Price:</h5>
                    <h5>{totalPrice} ETH</h5>
                  </div>
                  <hr />
                  <button
                    name="submit"
                    type="submit"
                    className="sc-button style letter style-2"
                    onClick={mintNFT}
                  >
                    <span>Mint NFT</span>{" "}
                  </button>
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
  );
};

export default Create;
