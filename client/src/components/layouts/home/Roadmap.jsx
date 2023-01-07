import React from "react";

const About = (props) => {
  const data = props.data;
  return (
    <section className="tf-trendy-collections tf-section">
      <div className="container">
        <div className="row">
          <div className="trendy roadmap">
            {data.map((item, index) => (
              <div key={index} className="col-lg-12 col-md-12 col-12">
                <div className="sc-product-item style-2">
                  <div className="product-img2">
                    <img src={item.img} alt="wxb" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
