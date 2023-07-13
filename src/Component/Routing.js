import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Main from "./Main";
import ListingLogic from "./Listing/ListingLogic";
import DetailsLogic from "./Details/DetailsLogic";
import PlaceOrder from "./Orders/PlaceOrder";
import ViewOrder from "./Orders/ViewOrder";
import LoginComponent from "./Login/LoginComponent";
import RegisterComponent from "./Login/RegisterComponent";
import Coupon from "./Home/Coupon";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="listing/:catId" element={<ListingLogic />} />
          <Route path="details/:itemId" element={<DetailsLogic />} />
          <Route path="placeOrder/:itemId" element={<PlaceOrder />} />
          <Route path="viewOrder" element={<ViewOrder />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Coupon />
    </div>
  );
}

export default Routing;
