import React from "react";

const About = (props) => {
  const data = props.data;
  return (
    <section className="tf-trendy-collections tf-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2">
              <div className="content-left">
                <div className="inner">
                  <h3>About WXB</h3>
                  <p className="desc">
                    Fast growing NFT Community of Affiliate Partners{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="trendy">
            {data.map((item, index) => (
              <div key={index} className="col-lg-12 col-md-12 col-12">
                <div className="sc-product-item extra-rm style-2">
                  <div className="product-img1">
                    <img src={item.img} alt="wxb" />
                  </div>
                </div>
              </div>
            ))}
            <div className="content-plus">
              <h4>WXB</h4>
              <p className="extra-weight">
                WXB are 10,000 (5,000 male and 5,000 female) invisible
                3D-generated Workxie investors, existing on the blockchain. Our project will be a communitydriven project of
                Affiliate Partners (AP) ready to change the narrative and create
                more millionaires than any NFT project that ever existed.
              </p>
              <p className="extra-weight">
                With WXB array of success as a multi-digital organization, our
                affiliate partners will launch its own member community and its’
                NFT as its utility. Workxie community will be promoted by WXB
                and its holders will be benefitting passively. WXB is a utility
                Non-Fungible-Token in the Workxie ecosystem that gives
                unrestricted access to earn passive income via free Affiliate
                Partnership, Staking and other activities that will later on be
                announced subsequently in our server
              </p>
              <br />
              <h4>PWL Benefits</h4>
              <p className="extra-weight">
                WXB PWL will allow you to earn passively and own the art
                compared to other projects where you pay for the art without
                getting any real value in return. Airdrops & free Affiliate
                Partnership giveaway that will put profit in your pocket for 400
                days. Posting to WXB holders daily, weekly and monthly. All
                holders will also get a chance to be a part of Workxie's Web3
                Academy. Don’t get confused, in Workxie, it is one thing to be
                an affiliate partner and it is another thing to be a Workxie
                Billionaire. Workxie (the engine) and WXB (The Project) will
                support our affiliate partners in each of their team network by
                giving out airdrops to active community members.
              </p>
              <p className="extra-weight">This would be done by;</p>
              <p className="extra-weight">
                Airdrops & free Affiliate Partnership giveaway that will put
                profit in your pocket for 400 days. Posting to WXB holders
                daily, weekly and monthly. Don’t get confused, in Workxie, it is
                one thing to be an affiliate partner and it is another thing to
                be a Workxie Billionaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
