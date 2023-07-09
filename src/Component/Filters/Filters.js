import React, { useState } from "react";
import "./Filters.css";
import { data } from "jquery";
import axios from "axios";

const url = "https://flipkartapi-9q66.onrender.com/filter";
const purl = "https://flipkartapi-9q66.onrender.com/products";

const Filters = (props) => {
  const renderFilterValues = (valueList, filterName) => {
    return valueList.map((value) => {
      return (
        <>
          <div className="radioBtn">
            <label className="radioBtn-label" htmlFor={value}>
              <input
                className="radioBtn-input"
                type="radio"
                name={filterName}
                value={value}
                autoComplete="off"
              />
              {value}
            </label>
          </div>
        </>
      );
    });
  };

  const handleFilter = (event) => {
    let catId = props.catId;
    let prodCatId = props.prodCatId;
    let prodTypeId = props.prodTypeId;
    let filterValue = event.target.value;
    let filterTitle = event.target.name;
    let filterUrl = "";
    if (filterValue === "") {
      filterUrl = `${purl}/${catId}?prodCatId=${prodCatId}&prodTypeId=${prodTypeId}`;
    } else if (filterTitle === "cost") {
      console.log("cost");
      let cost = filterValue.split("-");
      let lcost = cost[0];
      let hcost = cost[1];
      filterUrl = `${url}/${catId}?lcost=${lcost}&hcost=${hcost}`;
    } else {
      filterUrl = `${url}/${catId}?${filterTitle}=${filterValue}`;
    }

    axios.get(filterUrl).then((res) => {
      props.prodPerFilter(res.data);
    });
  };

  const renderFilter = ({ filterData }) => {
    if (filterData) {
      if (filterData.length > 0) {
        return filterData.map((item) => {
          return item.filter.map((filters) => {
            return (
              <>
                <div className="filterBlock" key={filters._id}>
                  <div className="filterName">{filters.filter_name}</div>
                  <div className="filterOption" onChange={handleFilter}>
                    <div className="radioBtn">
                      <label className="radioBtn-label" htmlFor="All">
                        <input
                          className="radioBtn-input"
                          type="radio"
                          name={filters.filter_name}
                          value=""
                          autoComplete="off"
                        />
                        ALL
                      </label>
                    </div>
                    {renderFilterValues(
                      filters.filter_values,
                      filters.filter_name
                    )}
                  </div>
                </div>
              </>
            );
          });
        });
      } else {
        return <h2>No Data Found</h2>;
      }
    }
  };
  return (
    <div id="filters" className="filterListBlock">
      {renderFilter(props)}
    </div>
  );
};

export default Filters;
