import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} className='footimg' alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>brijeshkumarmaisuriya@gmail.com</span>
      
      </div>
    </div>
  );
};

export default Footer;
