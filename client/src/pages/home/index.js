import React from "react";
import Categories from "./Categories";
import Navbar from "../component/Navbar";
import HeroSection from "./HeroSection";
import Blogs from "./Books";
import News from "./News";
import "../../assets/css/pages/Home.css";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Blogs />
      <News />
    </>
  );
};

export default index;
