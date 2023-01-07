import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import PopularCollection from "../components/layouts/explore/PopularCollection";
import dataPopularCollection from "../assets/fake-data/dataPopularCollection";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/Footer";

const Collection = () => {
  return (
    <div className="explore">
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Collection</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularCollection data={dataPopularCollection} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Collection;
