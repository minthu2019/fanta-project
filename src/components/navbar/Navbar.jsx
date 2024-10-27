import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";
import { UpdateFollower } from "react-mouse-follower";

const Navbar = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const HandleScroll = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (window.scrollY > 0) {
      setIsScrolled(true);
      setNavbarClass("fixed inset-0 h-[80px] bg-slate-400 bg-opacity-85 z-[999999]");
      
      const id = setTimeout(() => {
        setNavbarClass("hidden duration-500 delay-300 ease");
      }, 2000);
      
      setTimeoutId(id);
    } else {
      setIsScrolled(false);
      setNavbarClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, [timeoutId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4, ease: "easeInOut" },
      }}
      className={`container ${navbarClass} text-white py-3 flex items-center justify-between`}
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
