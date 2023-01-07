import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import LiveGallery from '../components/layouts/item/LiveGallery';
import NewGallery from '../components/layouts/item/NewGallery';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from '../components/footer/Footer';
import ChainContext from "../context/Chain";
import { ChainId } from "@thirdweb-dev/react";

const Item = () => {
    console.log(ChainId)
    const { selectedChain, setSelectedChain } = useContext(ChainContext);
    return (
        <div className='item'>
            <Header />
            <section className="fl-page-title">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-inner flex">
                                <div className="page-title-heading">
                                    <h2 className="heading">Your Gallery</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Gallery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewGallery data={dataPopularCollection} />
            <LiveGallery data={dataPopularCollection} />
            {ChainId.Mainnet === selectedChain &&
                <section className="tf-section trendy-colection-page style-2">
                    <div className="container">
                        <h5 className="my-1">Want to view your WXB NFTs?..Connect your Polygon Wallet.</h5>
                        <button onClick={(e) => setSelectedChain(ChainId.Polygon)}>
                            Connect
                        </button>
                    </div>
                </section>
            }
            {ChainId.Polygon === selectedChain &&
                <section className="tf-section trendy-colection-page style-2">
                    <div className="container">
                        <h5 className="my-1">Want to view your WXBA NFT?..Connect your ETH Wallet.</h5>
                        <button onClick={(e) => setSelectedChain(ChainId.Mainnet)}>
                            Connect
                        </button>
                    </div>
                </section>
            }

            <Newsletters />
            <Footer />
        </div>
    )
};

export default Item;
