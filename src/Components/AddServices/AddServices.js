import React, { useContext } from 'react';
import { UserContext } from '../../App';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

const AddServices = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    return (
        <div className="bg-color" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <DashboardMenu />
          </div>
          <div className="col-md-10 px-0">
            <div className="d-flex justify-content-between">
              <h4 className="mt-5 px-3 title-color">Booking List</h4>
              <h4 className="mt-5 px-3 title-color">
                {loggedinUser.displayName}
              </h4>
            </div>
            <div
              className="py-3 px-4 "
              style={{ backgroundColor: "gray", height: "87.1vh" }}
            >
              <h2 className="text-light">This is add service page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddServices;