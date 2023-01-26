import React from "react";
import Featured from "./components/Featured";
import HomeCover from "./components/HomeCover";
import Navbar from "./components/Navbar";
import HorizontalList from "./components/HorizontalList";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HorizontalList/>
      <HomeCover />
      <Featured />
      <Footer/>
    </>
  );
};

export default Home;
