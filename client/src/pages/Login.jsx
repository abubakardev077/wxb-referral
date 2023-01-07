import React from "react";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  return (
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
                      You need to connect your wallet to mint our NFT{" "}
                    </p>
                  </div>
                  <form id="create-item-1">
                    <button
                      onClick={login}
                      className="sc-button style letter style-2"
                    >
                      <span>Connect Wallet</span>{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
