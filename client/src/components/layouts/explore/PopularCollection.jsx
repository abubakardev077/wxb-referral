import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopularCollection = (props) => {
  const data = props.data;

  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <section className="tf-section trendy-colection-page style-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          {data.slice(0, visible).map((item, index) => (
            <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6">
              <div className="sc-product-item style-5">
                <div className="product-img">
                  <img src={item.img} alt="wxb" />
                  <label>{item.tags}</label>
                </div>
                <div className="product-content">
                  <h5 className="title">{item.title} </h5>
                </div>
              </div>
            </div>
          ))}

          {visible < data.length && (
            <div className="col-md-12">
              <button id="#" className=" sc-button style letter style-2">
                <a
                  href="https://testnets.opensea.io/collection/workxon-billionaires"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Explore More on Opensea</span>
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCollection;
