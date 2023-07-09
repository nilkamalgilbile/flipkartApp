import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/register";

const RegisterComponent = () => {
  let navigate = useNavigate();
  const initialValues = {
    name: "Arpit",
    email: "arpit1@gmail.com",
    password: "12345678",
    phone: "9876543211",
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
    console.log(values);
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(navigate(`/login`));
  };

  return (
    <>
      <div className="container">
        <div className="card border-primary mt-5 mb-5">
          <div className="card-header bg-info">
            <h3>Register</h3>
          </div>
          <div className="card-body">
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
                  Password
                </label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  name="password"
                  value={values.password}
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
            </div>

            <button className="btn btn-success mt-3" onClick={checkout}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
