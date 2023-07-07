import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const base_url = "https://flipkartapi-9q66.onrender.com";

const Category = () => {
  const [fashion, setFashion] = useState("");
  const [electro, setElectro] = useState("");
  const [home, setHome] = useState("");

  const [appliances, setAppliances] = useState("");

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

  //for Electronics
  const renderElectronics = (data) => {
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

  //for Home
  const renderHome = (data) => {
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

  //for Beauty
  const renderBeauty = (data) => {
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
      <div className="categories" id="category">
        <div className="categoryContainer" id="category">
          <div className="categoryBlock" id="category_block">
            <div className="categoryImg">
              <img src="https://i.ibb.co/s5hjJt5/grocery.png" alt="grocery" />
            </div>
            <div>
              <Link to="/listing/1" className="categoryName">
                Grocery
              </Link>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img src="https://i.ibb.co/LJjh4Mb/mobiles.png" alt="mobiles" />
            </div>
            <div>
              <Link to="/listing/2" className="categoryName">
                Mobiles
              </Link>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img src="https://i.ibb.co/WyTtdS3/fashion.png" alt="fashion" />
            </div>
            <div className="dropdown">
              <span
                className="categoryName dropdown-toggle"
                id="fashionDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-mdb-toggle="dropdown"
              >
                Fashion
              </span>
              <ul className="dropdown-menu" aria-labelledby="fashionDropdown">
                {renderFashion(fashion)}
              </ul>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img
                src="https://i.ibb.co/175Hqqy/electronics.png"
                alt="electronics"
              />
            </div>
            <div className="dropdown">
              <span
                className="categoryName dropdown-toggle"
                id="electronicsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-mdb-toggle="dropdown"
              >
                Electronics
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="electronicsDropdown"
              >
                {renderElectronics(electro)}
              </ul>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img src="https://i.ibb.co/k3PPMsf/home.png" alt="home" />
            </div>
            <div className="dropdown">
              <span
                className="categoryName dropdown-toggle"
                id="homeDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-mdb-toggle="dropdown"
              >
                Home
              </span>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                {renderHome(home)}
              </ul>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img
                src="https://i.ibb.co/BZ7nhWY/appliances.png"
                alt="appliances"
              />
            </div>
            <div>
              <Link to="/listing/4?prodCatId=3" className="categoryName">
                Appliances
              </Link>
            </div>
          </div>
          {/* <div className="categoryBlock">
            <div className="categoryImg">
              <img src="https://i.ibb.co/bmXmDjm/travel.png" alt="travel" />
            </div>
            <div>
              <Link to="/" className="categoryName">
                Travel
              </Link>
            </div>
          </div> */}
          {/* <div className="categoryBlock">
            <div className="categoryImg">
              <img
                src="https://i.ibb.co/vPmsLNF/top-offers.png"
                alt="top-offers"
              />
            </div>
            <div>
              <Link to="/" className="categoryName">
                Top Offers
              </Link>
            </div>
          </div> */}
          <div className="categoryBlock">
            <div className="categoryImg">
              <img
                src="https://i.ibb.co/kJQC3tH/beauty-toys.png"
                alt="beauty-toys"
              />
            </div>
            <div className="dropdown">
              <span
                className="categoryName dropdown-toggle"
                id="beautyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-mdb-toggle="dropdown"
              >
                Beauty, Toys & More
              </span>
              <ul className="dropdown-menu" aria-labelledby="beautyDropdown">
                {renderBeauty(beauty)}
              </ul>
            </div>
          </div>
          <div className="categoryBlock">
            <div className="categoryImg">
              <img
                src="https://i.ibb.co/BtZtcjc/two-wheelers.png"
                alt="two-wheelers"
              />
            </div>
            <div>
              <Link to="/listing/7" className="categoryName">
                Two Wheelers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
