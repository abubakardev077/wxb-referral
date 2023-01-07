import React from "react";

export const Newsletters = () => {
  return (
    <section className="new-letter">
      <div className="container">
        <div className="new-letter-inner style-2 flex">
          <div className="new-letter-content">
            <h3 className="heading">Join Our Discord</h3>
            <p className="sub-heading">
              Join our fast growing NFT community today
            </p>
          </div>
          <div className="new-letter-img">
            <div className="form-subcribe">
              <form id="subscribe-form" className="form-submit">
                <button className="sc-button style letter style-12">
                  <a
                    href="https://discord.gg/F6pNJxDKPn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Today
                  </a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
