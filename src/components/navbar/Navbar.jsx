import React from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";
import { UpdateFollower } from "react-mouse-follower";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4, ease: "easeInOut" },
      }}
      className={`container text-white py-3 flex items-center justify-between z-20`}
    >
      {/* logo section */}
      <div>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            scale: 6,
            zIndex: 40,
            followSpeed: 1.5,
            mixBlendMode: "difference",
          }}
        >
          <img src={logo} alt="logo" className="w-20 invert " />
        </UpdateFollower>
      </div>

      {/* Navlinks section */}
      <LaptopNav />

      {/* Button section */}
      <MobileNav />
    </motion.div>
  );
};

export default Navbar;
