import React from "react";
import { Link } from "react-router-dom";

const Create = (props) => {
  const data = props.data;
  return (
    <section className="create-and-sell tf-section bg-color-14161B">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2 create-and-sell">
              <div className="content-left">
                <div className="inner">
                  <h3>Providing A Life-Changing Opportunity</h3>
                  <p className="desc">
                    This project is focused on giving opportunities to all
                    WORKXIE goal-getters to create a rich strong network and
                    change their lives forever{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {data.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className={`sc-wallet style-2 ${item.class}`}>
                <div className="icon">
                  <img src={item.img} alt="wxb" />
                </div>
                <div className="content">
                  <h5>
                    <Link to="/">{item.title}</Link>
                  </h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Create;
