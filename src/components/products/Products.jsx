import React from "react";
import fanta1 from "../../assets/fanta1.png";
import fanta2 from "../../assets/fanta2.png";
import fanta3 from "../../assets/fanta3.png";
import { delay, motion } from "framer-motion";
import { SlideUp } from "@/utility/animation";

const productArrays = [
  {
    id: 1,
    image: fanta1,
    title: " Orange Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, minima.",
    bgcolor: "#cf4f00",
    delay:0.4,
  },
  {
    id: 2,
    image: fanta2,
    title: " Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    bgcolor: "#727272",
    delay:0.6,
  },
  {
    id: 3,
    image: fanta3,
    title: " Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, minima.",
    bgcolor: "#ac1a00",
    delay:0.8,
  },
];

const Products = () => {
  return (
    <section  name="Custome">
      <div className="container py-12 bg-[#F3F4F6] mb-10">
        <div className="flex items-center justify-center flex-col space-y-4">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-bold text-gray-900 my-8"
          >
            Our Products
          </motion.h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  md:gap-24  px-4">
            {productArrays.map((product) => {
              return (
                <motion.div
                  variants={SlideUp(product.delay)}
                  initial="initial"
                  whileInView="animate"
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center space-y-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 hover:rotate-[24deg] duration-300 delay-75"
                  />
                  <div className=" flex flex-col items-center justify-center space-y-4">
                    <h2 className=" font-handwriting text-2xl font-bold">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-[13px] text-center">
                      {product.desc}
                    </p>
                    <button
                      id={product.id}
                      style={{
                        borderColor: product.bgcolor,
                        color: product.bgcolor,
                      }}
                      onMouseEnter={(e) => (
                        (e.target.style.backgroundColor = product.bgcolor),
                        (e.target.style.color = " white")
                      )}
                      onMouseLeave={(e) => (
                        (e.target.style.backgroundColor = "transparent"),
                        (e.target.style.color = product.bgcolor)
                      )}
                      className={` py-2 px-6 border-2 bg-transparent hover:bg-orange-500  text-orange-500  hover:text-white rounded-lg`}
                    >
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
