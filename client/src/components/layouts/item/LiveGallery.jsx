import React, { useState, useContext } from "react";
import ChainContext from "../../../context/Chain";
import { ChainId, useOwnedNFTs, useAddress, useEditionDrop } from "@thirdweb-dev/react";

const LiveGallery = (props, item) => {

    const editionDrop = useEditionDrop("0x1fd591594cdae3134a5818d324a91efe6d191281");

    // Address of the wallet to get the NFTs of
    const address = useAddress();
    const { data: balance, isLoading: loadingBalance, error } = useOwnedNFTs(editionDrop, address);
    const data = props.data;
    const { selectedChain, setSelectedChain } = useContext(ChainContext);
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
                                                {balance?.length == 0 ? <span className="set-boundry"> You do not have WXB NFT</span> :
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
                                                                                You Own <strong>{parseInt(balance.quantityOwned._hex, 16)}</strong>
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
                            <>
                                <span className="set-boundry"> Connect your Polygon Wallet to View Your WXB NFTs</span>
                            </>

                        )
                }


            </div>
        </section>
    );
};

export default LiveGallery;
