import React, { useEffect, useState } from "react";
import Submenu from "./Submenu";
import ListingData from "./ListingData";
import Filter from "../Filters/Filters";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const base_url = "https://flipkartapi-9q66.onrender.com";

const ListingLogic = () => {
  let params = useParams();
  let queryParams = new URLSearchParams();

  const [prodList, setProdList] = useState();
  const [filterList, setFilterList] = useState();
  let catid = params.catId;
  const [searchParams, setSearchParams] = useSearchParams();
  let prodcatid = searchParams.get("prodCatId");
  let prodtypeid = searchParams.get("prodTypeId");

  useEffect(() => {
    sessionStorage.setItem("catId", catid);
    sessionStorage.setItem("prodCatId", prodcatid);
    sessionStorage.setItem("prodTypeId", prodtypeid);
    //for productList
    axios
      .get(
        `${base_url}/products/${catid}?prodCatId=${prodcatid}&prodTypeId=${prodtypeid}`
      )
      .then((res) => {
        setProdList(res.data);
      });
    //for filterList
    axios
      .get(
        `${base_url}/listFilter/${catid}?prodCatId=${prodcatid}&prodTypeId=${prodtypeid}`
      )
      .then((res) => {
        setFilterList(res.data);
      });
  }, [catid, prodcatid, prodtypeid]);

  const setDataPerFilter = (data) => {
    setProdList(data);
  };

  return (
    <>
      <Submenu />
      <div className="container listingBlock">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
            <Filter
              filterData={filterList}
              catId={catid}
              prodCatId={prodcatid}
              prodTypeId={prodtypeid}
              prodPerFilter={(data) => {
                setDataPerFilter(data);
              }}
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 col-xl-10 border">
            <ListingData listData={prodList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingLogic;
