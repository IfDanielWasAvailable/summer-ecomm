import React from "react";
import Announcement from "../componenets/Announcement";
import Categories from "../componenets/Categories";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import Newsletter from "../componenets/Newsletter";
import Products from "../componenets/Products";
import Slider from "../componenets/Slider";

const Homepage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
