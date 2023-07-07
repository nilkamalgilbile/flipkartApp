import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Main from "./Main";
import ListingLogic from "./Listing/ListingLogic";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="listing/:catId" element={<ListingLogic />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
