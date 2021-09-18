import React from "react";
import "./name.css";
import { motion } from "framer-motion";
// import rotate from "../../../assets/rotate.png";
import believable from "../../../assets/newBelievable9.svg";

const Name = () => {
  return (
    <div>
      <motion.div className="name">
        <motion.img
          src={believable}
          alt="rotate"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            times: [0, 1],
            loop: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Name;
