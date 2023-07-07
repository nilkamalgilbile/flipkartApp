import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// Dark-Light mode
const ChangeMode = () => {
  var icon = document.getElementById("modeIcon");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "https://i.ibb.co/SQFVtGt/sun.png";
  } else {
    icon.src = "https://i.ibb.co/FgV5bKn/moon.png";
  }
};

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="webname">Flipkart</span>

            <input
              type="text"
              id="searchBox"
              name="search"
              placeholder="Search for products, brands and more"
            />
            <button className="btn btn-primary" id="searchBtn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <Link className="btn" to="/" id="loginButton">
              Home
            </Link>
            <button className="btn" id="loginButton">
              Login
            </button>
            <span id="cartIcon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span id="cartOption">Cart</span>
            </span>
            {/* <span id="out" className="location"></span>
            <span id="weather" className="location"></span> */}
            <img
              src="https://i.ibb.co/FgV5bKn/moon.png"
              alt="moon"
              id="modeIcon"
              onClick={ChangeMode}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
