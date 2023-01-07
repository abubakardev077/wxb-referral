import React from "react";
import { Link } from "react-router-dom";

const Reasons = (props) => {
  const data = props.data;
  return (
    <section className="tf-category tf-section">
      <div className="category-inner">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2">
              <div className="content-left">
                <div className="inner">
                  <h3>Reasons to Choose Us</h3>
                  <p className="desc">
                    Wide range of benefits and returns just for you{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className={`sc-category ${item.classpd}`}>
                <div className="card-content extra-card">
                  <h5>
                    <Link to="/item-details">{item.title}</Link>
                  </h5>
                  <p>{item.desc}</p>
                  <p className="mt-2">{item.desc1}</p>
                  <p className="mt-2">{item.desc2}</p>
                  <p className="mt-2">{item.desc3}</p>
                  <p className="mt-2">{item.desc4}</p>
                  <p className="mt-2">{item.desc5}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
