import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Footer = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div>
      <footer id="footer" className="clearfix bg-style">
      <div className="bottom">
        <div className="container">
          <div className="bottom-inner">
            Copyright © 2022 Workxie Billionaire | All Rights Reserved
          </div>
        </div>
      </div>
      </footer>
     
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </div>
  );
};

export default Footer;
