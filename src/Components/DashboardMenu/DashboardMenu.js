import React, { useContext, useEffect, useState } from 'react';
import logo from '../logo/logo2.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookJournalWhills,
  faHome,
  faShoppingCart,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../../App';

const DashboardMenu = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext)
  const [checkAdmin, setCheckAdmin] = useState(false);
  console.log(loggedinUser.email)
  useEffect(()=>{
    fetch("https://hairsalon-server.onrender.com/checkAdmins?email="+loggedinUser.email)
    .then(res=>res.json())
    .then(data=>{
      data.map(dt=>{if(dt.email === loggedinUser.email){
        setCheckAdmin(!checkAdmin)
      }})
    })
  },[])
  console.log(checkAdmin)
    return (
        <div>
             <img src={logo} className='img-fluied my-3' style={{height:'50px',background:'#998623',borderRadius:'50%',}}  alt="" />
          <div className="list-unstyled text-light">
            <Link className="text-decoration-none" to="/home">
              <li
                className="mt-2 text-light"
              >
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faHome}
                />{" "}
                Home
              </li>
            </Link>
            {/* <Link className="text-decoration-none" to="/dashboard/book">
              <li
                className="mt-2 text-light"
              >
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faShoppingCart}
                />{" "}
                Book
              </li>
            </Link> */}
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
            { checkAdmin&& <Link className="text-decoration-none" to="/dashboard/orderList">
              <li className="mt-2 text-light">
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faStreetView}
                />
                Order List
              </li>
            </Link>}
           {checkAdmin&& <Link className="text-decoration-none" to="/dashboard/addServices">
              <li className="mt-2 text-light">
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faStreetView}
                />
                Add Service
              </li>
            </Link>}
            {checkAdmin&&<Link className="text-decoration-none" to="/dashboard/makeAdmin">
              <li className="mt-2 text-light">
                <FontAwesomeIcon
                  className="fs-6 me-2 text-light"
                  icon={faStreetView}
                />
                Make Admin
              </li>
            </Link>}
          </div>
        </div>
    );
};

export default DashboardMenu;