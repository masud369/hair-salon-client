import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import ListDetails from "../ListDetails/ListDetails";

const OrderList = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    fetch("https://hairsalon-server.onrender.com/orderList")
      .then((res) => res.json())
      .then((data) => {
        setOrdersList(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="bg-color" style={{ height: "100%" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <DashboardMenu />
          </div>
          <div className="col-md-10 px-0">
            <div className="d-flex justify-content-between">
              <h4 className="mt-5 px-3 title-color">Order List</h4>
              <h4 className="mt-5 px-3 title-color">
                {loggedinUser.displayName}
              </h4>
            </div>
            <div
              className="py-3 px-4 "
              style={{ backgroundColor: "gray", height: "auto" }}
            >
              <h2 className="text-light">This is orderlist page</h2>
              <table className="table table-dark">
                <tr className="p-2" style={{backgroundColor:"#54544b",}}>
                  <th className="text-center" scope="col" style={{padding:'20px'}}>Name</th>
                  <th className="text-center" scope="col" style={{padding:'20px'}}>Email ID</th>
                  <th className="text-center" scope="col" style={{padding:'20px'}}>Service</th>
                  <th className="text-center" scope="col" style={{padding:'20px'}}>Status</th>
                </tr>
                <tbody>
                  {
                    ordersList.map(order=><ListDetails order={order} key={order._id} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
