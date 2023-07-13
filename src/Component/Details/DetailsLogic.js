import React, { useEffect, useState } from "react";
import "./Details.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const base_url = "https://flipkartapi-9q66.onrender.com";

const DetailsLogic = () => {
  let params = useParams();

  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let [prodDetails, setProdDetails] = useState();
  let [catId] = useState(sessionStorage.getItem("catId"));
  let itemId = params.itemId;

  const goBack = () => {
    navigate(-1);
  };

  const prodDetail = async () => {
    const pdata = await axios.get(`${base_url}/details/${itemId}`);
    setProdDetails(pdata.data[0]);
  };

  useEffect(() => {
    prodDetail();
  }, []);

  const changeImage = (event) => {
    let clicked_id = event.target.getAttribute("id");
    let src = event.target.getAttribute("src");
    document.getElementById("showImg").src = src;
    document.getElementById(clicked_id).style.border = "2px solid yellow";
  };

  const renderSize = (sizeList) => {
    if (sizeList) {
      return (
        <>
          <div>
            <span className="prodSizeText">Size</span>
            {handleSize(sizeList)}
          </div>
        </>
      );
    }
  };

  const handleSize = (sizeList) => {
    return sizeList.map((size) => {
      return (
        <>
          <span className="prodSize">{size}</span>
        </>
      );
    });
  };

  const renderProdDetails = (detailData) => {
    const keys = Object.keys(detailData[0]);
    return <>{handleKeys(keys, detailData)}</>;
  };

  const handleKeys = (keys, details) => {
    return keys.map((key) => {
      return (
        <>
          <tr>
            <th>{key.replaceAll("_", " ")}</th>
            {handlevalues(key, details)}
          </tr>
        </>
      );
    });
  };

  const handlevalues = (key, details) => {
    return details.map((data) => {
      return (
        <>
          <td>{data[key]}</td>
        </>
      );
    });
  };

  const proceed = () => {
    navigate(
      `/placeOrder/${prodDetails.item_id}?prodName=${prodDetails.product_name}&prodCost=${prodDetails.cost}`
    );
  };

  const renderDetails = () => {
    if (prodDetails) {
      return (
        <>
          <div className="container detailBox">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="row">
                  <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                    <div className="imgListBox">
                      <div className="imgBox">
                        <img
                          src={prodDetails.images[0]}
                          alt="product"
                          id="productimg1"
                          onClick={changeImage}
                        />
                      </div>
                      <div className="imgBox">
                        <img
                          src={prodDetails.images[1]}
                          alt="product"
                          id="productimg2"
                          onClick={changeImage}
                        />
                      </div>
                      <div className="imgBox">
                        <img
                          src={prodDetails.images[2]}
                          alt="product"
                          id="productimg3"
                          onClick={changeImage}
                        />
                      </div>
                      <div className="imgBox">
                        <img
                          src={prodDetails.images[3]}
                          alt="product"
                          id="productimg4"
                          onClick={changeImage}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                    <div className="imgShowBox">
                      <img
                        src={prodDetails.product_img}
                        alt="product"
                        id="showImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="prodDetailBox">
                  <div className="prodBrand">
                    {prodDetails.product_details[0].brand}
                  </div>
                  <div className="prodName">{prodDetails.product_name}</div>
                  <div>
                    <span className="prodCost">&#x20B9;{prodDetails.cost}</span>
                    <span className="prodActualCost">
                      <del>&#x20B9;{prodDetails.actual_price}</del>
                    </span>
                    <span className="prodOffer">{prodDetails.offer}</span>
                  </div>
                  <div>
                    <span className="prodRating">
                      {prodDetails.average_rating}{" "}
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="prodRatingText">
                      {prodDetails.rating_text}
                    </span>
                  </div>
                  {renderSize(prodDetails.size)}
                  <div>
                    <div className="prodDetails">Product Details:</div>
                    <table className="table table-striped">
                      {renderProdDetails(prodDetails.product_details)}
                    </table>
                  </div>
                  <hr />
                  <div className="col-md-12 text-center">
                    <button
                      className="btn btn-danger btnDetail"
                      to=""
                      onClick={goBack}
                    >
                      Back
                    </button>
                    &emsp;&emsp;
                    <button
                      className="btn btn-success btnDetail"
                      onClick={proceed}
                    >
                      Procced
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div>{renderDetails()}</div>
    </>
  );
};

export default DetailsLogic;
