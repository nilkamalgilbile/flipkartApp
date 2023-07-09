import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const url = "https://flipkartapi-9q66.onrender.com/orders";
const base_url = "https://flipkartapi-9q66.onrender.com";

const PlaceOrder = () => {
  let params = useParams();
  let navigate = useNavigate();
  let [prodDetails, setProdDetails] = useState();
  let [prodName, setProdName] = useState();
  let [prodCost, setProdCost] = useState();

  let sessionData = sessionStorage.getItem("userInfo");
  let data = JSON.parse(sessionData);
  console.log(data);
  let itemId = params.itemId;

  useEffect(() => {
    prodDetail();
  }, [prodDetails, prodName, prodCost]);

  const prodDetail = async () => {
    const pdata = await axios.get(`${base_url}/details/${itemId}`);
    setProdDetails(pdata.data[0]);
    setProdName(pdata.data[0].product_name);
    setProdCost(pdata.data[0].cost);
  };

  const initialValues = {
    id: Math.floor(Math.random() * 100000),
    prod_name: prodName,
    // name: data.name,
    name: "Shreya",
    // email: data.email,
    email: "shreya@gmail.com",
    cost: prodCost,
    // phone: data.phone,
    phone: 8745986254,
    address: "Hno 12 Sec 34",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const checkout = () => {
    // console.log(values);
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(navigate(`/viewOrder`));
  };

  return (
    <>
      <div className="container">
        <div className="card border-primary mt-5 mb-5">
          <div className="card-header bg-primary text-white">
            <h3 style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
              Order For {prodName}
            </h3>
          </div>
          <div className="card-body">
            {/* <input type="hidden" name="cost" value={values.cost}/>
                        <input type="hidden" name="id" value={values.id}/>
                        <input type="hidden" name="prod_name" value={values.prod_name}/> */}
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="fname" className="form-label mt-2">
                  Name
                </label>
                <input
                  className="form-control"
                  id="fname"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email" className="form-label mt-2">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email" className="form-label mt-2">
                  Phone
                </label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="address" className="form-label mt-2">
                  Address
                </label>
                <input
                  className="form-control"
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <h2>Total Price is Rs. {prodCost}</h2>
              </div>
            </div>
            <button className="btn btn-success mt-2" onClick={checkout}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
