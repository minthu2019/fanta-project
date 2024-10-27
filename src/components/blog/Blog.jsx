import React from "react";
import Image1 from "../../assets/blogs/1.jpg";
import Image2 from "../../assets/blogs/2.jpg";
import Image3 from "../../assets/blogs/3.jpg";
import Image4 from "../../assets/blogs/4.jpg";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const blogArrays = [
  {
    id: 1,
    image: Image1,
    title: "Lorem ipsum dolor sit amet consectetur....",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
  },
  {
    id: 2,
    image: Image2,
    title: "Lorem ipsum dolor sit amet consectetur....",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
  },
  {
    id: 3,
    image: Image3,
    title: "Lorem ipsum dolor sit amet consectetur....",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
  },
  {
    id: 4,
    image: Image4,
    title: "Lorem ipsum dolor sit amet consectetur....",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit....",
  },
];

const Blog = () => {
  return (
    <section name="Blog">
      <div className=" container bg-[#F3F4F6] text-center py-10 ">
        <h1 className="text-3xl font-bold text-gray-900 my-8">Blog</h1>
        <div className=" flex items-center justify-center p-4">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-9 md:gap-6 mb-6">
            {blogArrays.map((blog) => {
              return (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    scale: 5,
                    zIndex: 40,
                    followSpeed: 1.5,
                    text: "read",
                    textColor: "white",
                    textFontSize:"3px"
                  }}
                >
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{
                      y: -20,
                      transition: {
                        duration: 0.3,

                        ease: "easeInOut",
                      },
                    }}
                    key={blog.id}
                    className=" p-4 bg-white rounded-lg shadow-lg text-left space-y-4"
                  >
                    <img src={blog.image} alt={blog.title} />
                    <h2 className=" text-black text-lg font-bold">
                      {blog.title}
                    </h2>
                    <p className=" text-sm">{blog.desc}</p>
                  </motion.div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
