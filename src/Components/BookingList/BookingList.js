import React, { useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

const BookingList = () => {
  const [loggedinUser,setLoggedinUser] = useContext(UserContext);
  const [lists, setLists] = useState([]);
  useEffect(()=>{
    fetch("https://hairsalon-server.onrender.com/getOrders?email="+loggedinUser.email)
    .then(res=>res.json())
    .then(result=>setLists(result))
  },[])
  console.log(lists)
    return (
        <div className="bg-color" style={{ height: "100%" }}>
      <div className="container">
        <div className="row">
        <div className="col-md-2">
         <DashboardMenu />
        </div>
        <div className="col-md-10 px-0">
          <div className="d-flex justify-content-between">
            <h4 className="mt-5 px-3 title-color">Booking List</h4>
            <h4 className="mt-5 px-3 title-color">{loggedinUser.displayName}</h4>
          </div>
          <div className="py-3 px-4 " style={{backgroundColor:'gray',}}>
            <h4 className='text-light'>You have {lists.length} bookings</h4>
            <div className="row">
            {
              lists.map(list=>(<div className="col-md-4">
                         <Card className="my-2" style={{ width: '15rem' }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
        <FontAwesomeIcon className='fw-4 title-color mt-5'  icon={faSmile}/>
            <h4 className="mt-5 px-3 title-color">Order Status</h4>
        </div>
        <Card.Title>{list.name}</Card.Title>
        <Card.Text>
          <h2> {list.serviceName}</h2> {list.servicePrice}
        </Card.Text>
      </Card.Body>
    </Card>
              </div>) )
            }
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
};

export default BookingList;