import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/userinfo";

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
  const [userData, setUserData] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("ltk") !== null) {
      fetch(url, {
        method: "GET",
        headers: {
          "x-access-token": sessionStorage.getItem("ltk"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userInfo");
    setUserData("");
    navigate("/");
  };

  const ConditionalHeader = () => {
    if (userData) {
      if (userData.name) {
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
        return (
          <>
            <Link to="register" className="btn btn-primary">
              <i className="fa-solid fa-user"></i> Hi
              {userData.name}
            </Link>
            &nbsp;
            <button onClick={handleLogout} className="btn btn-danger">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
            &ensp;
          </>
        );
      }
    } else {
      return (
        <>
          <Link to="register" className="btn btn-primary">
            <i className="fa-solid fa-user"></i> Sign Up
          </Link>
          &nbsp;
          <Link to="login" className="btn btn-success">
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <button
              className="navbar-toggler navToggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars toggleIcon"></i>
            </button>
            <span className="webname">Flipkart</span>
            <Link className="btn" to="/" id="homeButton">
              Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="brand nav-item">
                <span className="input-group">
                  <input
                    type="text"
                    id="searchBox"
                    name="search"
                    placeholder="Search for products, brands and more"
                  />
                  <span className="input-group-text" id="basic-addon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </span>
              </div>
              <div className="socialIcon nav-item ms-auto">
                {ConditionalHeader()}
                &nbsp;
                <span id="out" className="location"></span>
                <span id="weather" className="location"></span>
                &nbsp;
                <img
                  src="https://i.ibb.co/FgV5bKn/moon.png"
                  alt="moon"
                  id="modeIcon"
                  onClick={ChangeMode}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
