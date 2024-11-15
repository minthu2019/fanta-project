import React from "react";
import Juice from "../../assets/banner/juice.png";
import Splash from "../../assets/banner/splash.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { SlideRight, SlideUp } from "@/utility/animation";

const About = () => {
  return (
    <section name="About ">
      <div className=" container flex items-center justify-center flex-col">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          {/* image section */}
          <div className=" relative">
            <motion.img
              variants={SlideRight(0.2)}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.8 }}
              src={Juice}
              alt=""
              className=" max-w-[300px] md:max-w-[400px] mx-auto relative z-10"
            />
            <motion.img
              initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              src={Splash}
              alt=""
              className=" absolute bottom-5 z-0"
            />
          </div>
          {/* Text section */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 p-6">
            <motion.h2
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className=" text-2xl md:text-4xl font-bold"
            >
              Refresh Your World with Fanta
            </motion.h2>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className=" text-gray-500"
            >
              Fanta brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you're looking to quench your thirst with a
              zesty orange, tangy lemon, or one of our many other fruit-inspired
              flavors, Fanta is your go-to drink for a refreshing and exciting
              experience. Dive into the world of Fanta and let every sip spark
              your senses with its bold, bubbly, and refreshing taste!
            </motion.p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className={` py-2 px-6 border-2 border-orange-500 bg-transparent hover:bg-orange-500  text-orange-500  hover:text-white rounded-lg`}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
        <div className=" bg-orange-500 text-white px-6 py-6 md:px-10 md:py-6 rounded-lg my-10 mx-4 w-full flex items-center justify-center">
          <p className=" text-base md:text-3xl max-w-[900px] text-center">
            Every sip of Fanta turns up the fun—refresh your day with bold
            flavors and bubbly excitement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
