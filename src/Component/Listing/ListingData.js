import React from "react";
import "./ListingData.css";
import { Link } from "react-router-dom";

const ListingData = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <>
              <div className="productBlock" key={item._id}>
                <Link to={`/details/${item.item_id}`} id="detailLink">
                  <div className="imgBlock">
                    <img src={item.product_img} alt="product" />
                  </div>
                  <div className="descBlock">
                    <div className="brandName">
                      {item.product_details[0].brand}
                    </div>
                    <div className="productName">{item.product_name}</div>
                    <div className="productDescBlock">
                      <span className="productCost">&#x20B9;{item.cost}</span>
                      <span className="productActualCost">
                        <del>&#x20B9;{item.actual_price}</del>
                      </span>
                      <span className="productOffer">{item.offer}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        });
      } else {
        return <h2>No Data Found</h2>;
      }
    } else {
      return (
        <div>
          <h2>Loading</h2>
          <img src="/images/loader.gif" alt="loader" />
        </div>
      );
    }
  };
  return (
    <div id="content" className="listBlock">
      {renderData(props)}
    </div>
  );
};

export default ListingData;
