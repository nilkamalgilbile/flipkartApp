import React from "react";
import Category from "./Category";
import Carousel from "./Carousel";
import QuickSearch from "./QuickSearch";
// import Coupon from "./Coupon";

const Home = () => {
  return (
    <>
      {/* <Coupon /> */}
      <Category />
      <Carousel />
      <QuickSearch />
    </>
  );
};

export default Home;
