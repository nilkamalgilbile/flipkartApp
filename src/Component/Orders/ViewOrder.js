import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayOrder from "./DisplayOrder";

const url = "https://flipkartapi-9q66.onrender.com/orders";

const ViewOrder = () => {
  const [orders, setOrder] = useState();
  let sessionData = sessionStorage.getItem("userInfo");
  let data = JSON.parse(sessionData);
  // const email = "shreya@gmail.com";

  useEffect(() => {
    axios.get(`${url}?email=${data.email}`).then((res) => {
      setOrder(res.data);
    });
  });

  return (
    <>
      <DisplayOrder orderData={orders} />
    </>
  );
};

export default ViewOrder;
