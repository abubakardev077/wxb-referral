import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import "react-tabs/style/react-tabs.css";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/Footer";
import {
  useMarketplace,
  useNetwork,
  useNetworkMismatch,
  useListing,
  useAddress,
} from "@thirdweb-dev/react";
import { Button } from "react-bootstrap";

const ItemDetails = () => {
  const { id } = useParams();
  const listingId = id;

  const address = useAddress();

  // Hooks to detect user is on the right network and switch them if they are not
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // Initialize the marketplace contract
  const marketplace = useMarketplace(
    "0x190d3548C23571F39E373ff8A0198E948F43F096" // Your marketplace contract address here
  );
  // Fetch the listing from the marketplace contract
  const { data: listing, isLoading: loadingListing } = useListing(
    marketplace,
    listingId
  );

  if (loadingListing) {
    return <span className="set-boundry">Loading...</span>;
  }

  if (!listing) {
    return <span className="set-boundry">Listing not found</span>;
  }

  async function buyNft() {
    try {
      // Ensure user is on the correct network
      if (networkMismatch) {
        switchNetwork && switchNetwork(4);
        return;
      }

      // Simple one-liner for buying the NFT
      await marketplace?.buyoutListing(listingId, 1);
      alert("NFT bought successfully!");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <div className="item-details">
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">NFT Details</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>NFT Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="item-media">
                <div className="media">
                  <img src={listing.asset.image} alt="wxb" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="content-item">
                <h3> {listing.asset.name}</h3>
                <p className="mg-bt-42">
                  Purchase an exclusive NFT from Workxie Billionaire (WXB) NFT
                  Collection on the blockchain. Massive rewards and
                  opportunities are available for you as an Holder.
                </p>

                <ul className="list-details-item">
                  <li>
                    <span className="name">
                      Current Price:{" "}
                      <strong>
                        {listing.buyoutCurrencyValuePerToken.displayValue}
                      </strong>
                      <strong>
                        {" "}
                        {listing.buyoutCurrencyValuePerToken.symbol}
                      </strong>
                    </span>
                  </li>
                </ul>

                <div className="infor-bid">
                  <div className="content-left">
                    <h6>Make sure you wallet is connected</h6>
                    <div className="price">
                      If you have not connected your wallet, make sure to click
                      the wallet icon in the menu.
                      <br /> <br />
                      Click on 'Buy Now' and wait for the magic.
                    </div>
                  </div>
                </div>
                <Button
                  onClick={buyNft}
                  className="sc-button style letter style-2 style-item-details"
                >
                  <span>Buy Now</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletters />
      <Footer />
    </div>
  );
};

export default ItemDetails;
