import React from "react";
// import { motion } from "framer-motion";
import "./footer.css";
import Name from "./footerComponent/Name";
// import rotate from "../../assets/rotate.png";
const Footer = () => {
  return (
    <div className="footer-container">
      {/* <div className="left-side">
       
        
      </div>
      <div className="right-side">
        <p className="copy-right">
          copyright ＠ 2021 CREATING GREAT STANDARD HUB All Rights Reserved{" "}
        </p>
        <p>Samuel Built with 💗</p>
      </div> */}
      <div className="left-side">
        <Name />
      </div>

      <div className="right-side">
        <p className="copy-right">
          copyright ＠ 2021 CREATING GREAT STANDARD HUB All Rights Reserved{" "}
        </p>
        <p>Samuel Built with 💗</p>
      </div>
    </div>
  );
};

export default Footer;
