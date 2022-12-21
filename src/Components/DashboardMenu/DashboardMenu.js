import React from 'react';
import logo from '../logo/logo2.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookJournalWhills,
  faShoppingCart,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

const DashboardMenu = () => {
    return (
        <div>
             <img src={logo} className='img-fluied my-3' style={{height:'50px',background:'#998623',borderRadius:'50%',}}  alt="" />
          <div className="list-unstyled text-light">
            <Link className="text-decoration-none" to="/dashboard/book">
              <li
                className="mt-2 text-light"
              >
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faShoppingCart}
                />{" "}
                Book
              </li>
            </Link>
            <Link className="text-decoration-none" to="/dashboard/bookingList">
              <li className="mt-2 text-light">
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faBookJournalWhills}
                />
                Booking List
              </li>
            </Link>
            <Link className="text-decoration-none" to="/dashboard/review">
              <li className="mt-2 text-light">
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faStreetView}
                />
                Review
              </li>
            </Link>
          </div>
        </div>
    );
};

export default DashboardMenu;