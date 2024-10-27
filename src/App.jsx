import React from "react";
import Hero from "./components/hero/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Question from "./components/f&q/Question";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 40,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <Products />
        <About />
        <Blog />
        <Question />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
