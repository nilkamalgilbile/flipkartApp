import React, { useEffect, useState } from "react";
import "./Submenu.css";
import { Link } from "react-router-dom";

const base_url = "https://flipkartapi-9q66.onrender.com";

const Submenu = () => {
  const [fashion, setFashion] = useState("");
  const [electro, setElectro] = useState("");
  const [home, setHome] = useState("");
  const [beauty, setBeauty] = useState("");
  const [subType, setSubType] = useState("");

  useEffect(() => {
    fetch(`${base_url}/productTypes/3`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setFashion(data);
      });
    fetch(`${base_url}/productTypes/4`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setElectro(data);
      });
    fetch(`${base_url}/productTypes/5`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
      });
    fetch(`${base_url}/productTypes/6`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBeauty(data);
      });
  }, []);

  // ----for Fashion----
  const renderFashion = (data) => {
    //console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <li>
              <option
                key={item._id}
                value={item.productCategory_id}
                className="dropdown-item"
                onMouseOver={(event) => handleCategory(event, item.category_id)}
              >
                {item.productCategory_name}
              </option>
              {renderCategoryType(subType)}
            </li>
          </>
        );
      });
    }
  };

  const handleCategory = (event, id) => {
    // console.log(event.target.value);
    let prodCatId = event.target.value;
    let catId = id;
    // console.log(prodCatId);
    fetch(`${base_url}/productTypes/${catId}?prodCatId=${prodCatId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSubType(data);
        // console.log(subType);
      });
  };

  const renderCategoryType = (data) => {
    if (data) {
      return data.map((item) => {
        let catId = item.category_id;
        let proCatId = item.productCategory_id;

        return (
          <>
            <ul className="dropdown-menu dropdown-submenu">
              {item.productType.map((submenu) => {
                let prodTypeId = submenu.productType_id;
                //console.log(prodTypeId);
                return (
                  <>
                    <li>
                      <Link
                        to={`/listing/${catId}?prodCatId=${proCatId}&prodTypeId=${prodTypeId}`}
                        key={submenu._id}
                        value={submenu.productType_name}
                        className="dropdown-item"
                        id="fashionSubDropdown"
                      >
                        {submenu.productType_name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </>
        );
      });
    }
  };

  // ----for Electronics----
  const renderElectronics = (data) => {
    //console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <li>
              <option
                key={item._id}
                value={item.productCategory_id}
                className="dropdown-item"
                onMouseOver={(event) => handleCategory(event, item.category_id)}
              >
                {item.productCategory_name}
              </option>
              {renderCategoryType(subType)}
            </li>
          </>
        );
      });
    }
  };

  // ----for Home----
  const renderHome = (data) => {
    //console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <li>
              <option
                key={item._id}
                value={item.productCategory_id}
                className="dropdown-item"
                onMouseOver={(event) => handleCategory(event, item.category_id)}
              >
                {item.productCategory_name}
              </option>
              {renderCategoryType(subType)}
            </li>
          </>
        );
      });
    }
  };

  // ----for Beauty----
  const renderBeauty = (data) => {
    //console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <li>
              <option
                key={item._id}
                value={item.productCategory_id}
                className="dropdown-item"
                onMouseOver={(event) => handleCategory(event, item.category_id)}
              >
                {item.productCategory_name}
              </option>
              {renderCategoryType(subType)}
            </li>
          </>
        );
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg submenu">
        <div className="container">
          <button
            className="navbar-toggler toggleBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars toggleIcon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link to="/listing/1" className="nav-link me-2">
                  Grocery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/listing/2" className="nav-link me-2">
                  Mobiles
                </Link>
              </li>

              <li className="nav-item dropdown me-2">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  //data-bs-toggle="collapse"
                  data-bs-target="#collapseDropdown"
                  data-display="static"
                >
                  Fashion
                </span>
                <ul className="dropdown-menu">{renderFashion(fashion)}</ul>
              </li>

              <li className="nav-item dropdown me-2">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  //data-bs-toggle="collapse"
                  data-bs-target="#collapseDropdown"
                  data-display="static"
                >
                  Electronics
                </span>
                <ul className="dropdown-menu">{renderElectronics(electro)}</ul>
              </li>
              <li className="nav-item dropdown me-2">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  //data-bs-toggle="collapse"
                  data-bs-target="#collapseDropdown"
                  data-display="static"
                >
                  Home
                </span>
                <ul className="dropdown-menu">{renderHome(home)}</ul>
              </li>
              <li className="nav-item dropdown me-2">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  //data-bs-toggle="collapse"
                  data-bs-target="#collapseDropdown"
                  data-display="static"
                >
                  Beauty, Toys & more
                </span>
                <ul className="dropdown-menu">{renderBeauty(beauty)}</ul>
              </li>
              <li className="nav-item dropdown me-2">
                <Link to="/listing/7" className="nav-link">
                  Two Wheelers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Submenu;
