import React from "react";

const DisplayOrder = (props) => {
  const renderData = ({ orderData }) => {
    if (orderData) {
      return orderData.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.prod_name}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>Rs. {item.cost}</td>
            <td>{item.phone}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-3">Orders</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Pname</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{renderData(props)}</tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayOrder;
