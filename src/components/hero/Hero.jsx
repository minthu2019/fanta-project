import React, { useEffect, useState } from "react";
import fanta1 from "../../assets/fanta1.png";
import fanta2 from "../../assets/fanta2.png";
import fanta3 from "../../assets/fanta3.png";
import Navbar from "../navbar/Navbar";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { FaWhatsapp } from "react-icons/fa";
import { SlideLeft, SlideUp } from "@/utility/animation";
import { UpdateFollower } from "react-mouse-follower";

const heroDatas = [
  {
    id: 1,
    image: fanta1,
    title: "Orange Fanta",
    sibtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Beatae sint esse illum dolorem,
                unde doloribus soluta nisi deserunt.`,
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: fanta2,
    title: "Cola Zero",
    sibtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Beatae sint esse illum dolorem,
                unde doloribus soluta nisi deserunt.`,
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: fanta3,
    title: "Coca Cola",
    sibtitle: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Beatae sint esse illum dolorem,
                unde doloribus soluta nisi deserunt.`,
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

const Hero = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [activeData, setActiveData] = useState(heroDatas[0]);

  // const handleScrolled = () => {
  //   if (window.scrollY > 10) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrolled);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrolled);
  //   };
  // }, []);

  // console.log(isScrolled)

  const HandleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <section>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.5 }}
      >
        {/* navbar component */}
        <Navbar />
        {/* className={`${isScrolled && " sticky top-0 z-40 "}`} */}

        <div className="container relative grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
          {/* Dato info */}
          <div className=" flex flex-col justify-center z-20  text-white py-14 md:py-0 order-2 md:order-1 md:max-w-[450px] xl:max-w-[500px]">
            <div className=" space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    scale: 10,
                    zIndex: 40,
                    followSpeed: 1.5,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideLeft(0.2)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className=" text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideLeft(0.3)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className=" text-sm  leading-loose text-white/80"
                >
                  {activeData.sibtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  variants={SlideLeft(0.4)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: activeData.bgColor,
                      scale: 3,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      backgroundElement: (
                        <div>
                          <img src={activeData.image} alt="" />
                        </div>
                      ),
                    }}
                  >
                    <Button
                      className={` border border-white bg-transparent text-white ${
                        activeData.id === 1 && "hover:text-orange-500"
                      } ${activeData.id === 2 && "hover:text-[#727272]"} ${
                        activeData.id === 3 && "hover:text-[#ac1a00]"
                      }`}
                    >
                      Order Now
                    </Button>
                  </UpdateFollower>
                </motion.div>
              </AnimatePresence>

              {/* separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                }}
                className="flex items-center"
              >
                <Separator className="flex-1" />
                <span className="px-4 text-white max-w-[170px] md:max-w-max text-sm x uppercase rounded-sm mx-2 flex items-center justify-center">
                  Top Recommendation
                </span>
                <Separator className="flex-1" />
              </motion.div>

              {/* image switer */}
              <div className=" grid grid-cols-3 gap-10">
                {heroDatas.map((heroData) => {
                  return (
                    <div
                      key={heroData.id}
                      className=" cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                    >
                      <motion.div
                        variants={SlideUp(0.2)}
                        initial="initial"
                        animate="animate"
                        className=" flex items-center justify-center"
                      >
                        <UpdateFollower
                          mouseOptions={{
                            backgroundColor: heroData.bgColor,
                            radius: 10,
                            text: " View Detail",
                            textColor: "white",
                            scale: 3,
                            zIndex: 9999,
                            followSpeed: 0.5,
                            textFontFamily: "sans-serif",
                            textFontSize: "5px",
                          }}
                        >
                          <img
                            onClick={() => {
                              HandleActiveData(heroData);
                            }}
                            src={heroData.image}
                            alt={heroData.title}
                            className={`w-20 img-shadow ${
                              activeData.image === heroData.image
                                ? " scale-110 opacity-100"
                                : " opacity-50"
                            }`}
                          />
                        </UpdateFollower>
                      </motion.div>

                      <div className=" text-center !mt-6 space-y-1">
                        <p className="text-base line-through opacity-50">
                          {heroData.price}
                        </p>
                        <p className=" text-xl font-bold">{heroData.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 flex items-center justify-center mt-6 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                variants={SlideLeft(0)}
                initial="initial"
                animate="animate"
                exit="exit"
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[240px] img-shadow z-20  duration-500"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                }}
                className="text-[100px] md:text-[300px] font-poppin text-white/10 opacity-20  font-bold md:font-extrabold z-10 absolute top-0 left-1/2 -translate-x-1/2 "
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* whats app Icons */}
          <div className=" text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
