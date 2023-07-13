import React, { useEffect } from "react";
import "./Coupon.css";

const Coupon = () => {
  useEffect(function loadCoupon() {
    document.getElementById("coupon").style.visibility = "visible";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("coupon").style.opacity = "1";
  }, []);

  function closeCoupon() {
    document.getElementById("coupon").style.visibility = "hidden";
    document.getElementById("main").style.opacity = "1";
  }

  return (
    <>
      <div id="coupon">
        <button
          className="btn btn-close closebtn"
          onClick={closeCoupon}
        ></button>
        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 offerDiv">
            <h1 className="webname">Flipkart</h1>
            <p id="desc1">Groceries</p>
            <p id="desc2">Up to 50% OFF</p>
            <p id="desc3">On Groceries Online</p>
            <button className="btn" id="couponbtn">
              SHOP NOW
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-7 col-lg-7 col-xl-7">
            <img
              src="https://i.ibb.co/XkBsW3W/Grocery-coupon.png"
              alt="grocery"
              id="couponimg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
