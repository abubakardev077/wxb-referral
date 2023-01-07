import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOwnedNFTs, useAddress, useEditionDrop } from "@thirdweb-dev/react";

const NewGallery = (props, item) => {

    const editionDrop = useEditionDrop("0x0c709b96d86227eE41f1120841aa9d2a5C12e55F");
    const address = useAddress();
    const { data: balance, isLoading: loadingBalance, error } = useOwnedNFTs(editionDrop, address);
    const data = props.data;
    const [visible, setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <section className="tf-section trendy-colection-page style-2">
            <div className="container">
                {
                    address ?
                        (
                            <div className="row">
                                <div className="col-md-12"></div>
                                {
                                    // If the listings are loading, show a loading message
                                    loadingBalance ? (
                                        <span className="set-boundry">{''}</span>
                                    ) :
                                        (
                                            // Otherwise, show the listings
                                            <>
                                                {balance?.length == 0 ? <span className="set-boundry"> You do not have any WXBA NFT. Visit "Mint" to mint WXBA NFT </span> :
                                                    (
                                                        <>
                                                            {balance?.slice(0, visible).map((balance) => (
                                                                <div key={balance.id} className="col-lg-4 col-md-6 col-12">
                                                                    <div className="sc-product-item style-2">
                                                                        <div className="product-img">
                                                                            <img src={balance.metadata.image} alt="wxb" />
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <h5 className="title">"{balance.metadata.name}"</h5>
                                                                            <div className="title">{balance.metadata.description}</div>
                                                                            <div className=" title">
                                                                                You Own <strong>{parseInt(balance.quantityOwned._hex, 16)}</strong> WXBA
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))}

                                                        </>
                                                    )

                                                }

                                            </>
                                        )
                                }

                                {visible < data.length && (
                                    <div className="col-md-12">
                                        <button
                                            id="loadmore"
                                            className=" sc-button style letter style-2"
                                            onClick={showMoreItems}
                                        >
                                            <span>Explore More</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <span className="set-boundry"> Connect your ETH Wallet to View Your WXBA NFT</span>
                        )
                }



            </div>
        </section>
    )
}

export default NewGallery