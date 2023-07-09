import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/login";

const LoginComponent = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: "niki@gmail.com",
    password: "12345678",
  };

  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState();

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
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          setMessage(data.token);
        } else {
          sessionStorage.setItem("ltk", data.token);
          navigate(`/`);
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="card border-warning mt-5 mb-5">
          <div className="card-header bg-warning">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <h2 style={{ color: "red" }}>{message}</h2>
              <div className="col-md-6 form-group">
                <label for="email" className="form-label mt-2">
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
                <label for="email" className="form-label mt-2">
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
            </div>

            <button className="btn btn-danger mt-3" onClick={checkout}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
