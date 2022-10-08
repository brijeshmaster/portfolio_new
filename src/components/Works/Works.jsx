import React, { useContext } from "react";
import "./Works.css";
import free from "../../img/free.png";
import segal from "../../img/segal.png";
import comp from "../../img/comp.png";
import arbu from "../../img/arbu.jpg";
import gal from "../../img/gal.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
           Internship and  Works for all these
          </span>
          <span>Company</span>
          <spane>
          Realistic coding
milestones on pre-release software development
            <br />
            Collaborated and managed projects using Git
            <br />
            Updated old code bases to modern development & functionality.
            <br />
            Deployed and configured websites.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={free} className="comp"  alt="" />
          </div>
          <div className="w-secCircle">
            <img src={segal} className="comp"  alt="" />
          </div>
          <div className="w-secCircle" >
            <img src={comp} className="comp" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={arbu} className="comp"  alt="" />
          </div>
          <div className="w-secCircle">
            <img src={gal} className="comp"  alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
