import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActiveListings, useMarketplace } from "@thirdweb-dev/react";

const PopularCollection = (props, item) => {
  const marketplace = useMarketplace(
    "0x190d3548C23571F39E373ff8A0198E948F43F096"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  const data = props.data;

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <section className="tf-section trendy-colection-page style-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <span className="set-boundry">Loading listings...</span>
            ) : (
              // Otherwise, show the listings
              <>
                {listings?.slice(0, visible).map((listing) => (
                  <div key={listing.id} className="col-lg-4 col-md-6 col-12">
                    <div className="sc-product-item style-2">
                      <div className="product-img">
                        <img src={listing.asset.image} alt="wxb" />
                        <Link
                          to={`/listing/${listing.id}`}
                          className="sc-button style letter"
                        >
                          <span>Buy Now</span>
                        </Link>
                      </div>
                      <div className="product-content">
                        <h5 className="title">"{listing.asset.name}"</h5>

                        <div className="product-price flex">
                          <div className="title">Current Price</div>
                          <div className="price">
                            <span>
                              {listing.buyoutCurrencyValuePerToken.displayValue}
                            </span>
                            <span>
                              {listing.buyoutCurrencyValuePerToken.symbol}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
      </div>
    </section>
  );
};

export default PopularCollection;
