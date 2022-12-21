import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const [loggedinUser] = useContext(UserContext);
  const navigate = useNavigate();
  const handelServices = (service)=>{
      const newItem = {...service}
      newItem.email = loggedinUser.email
      newItem.userName = loggedinUser.name
  sessionStorage.setItem("service",JSON.stringify(newItem));
 navigate('/dashboard');
  }
console.log(loggedinUser.email)
  return (
    <div className="col-md-4 px-0">
      <Card className="rounded-0" style={{ width: "100%", }}>
        <h2 className="my-0 py-3 text-light text-center" style={{backgroundColor:'#898262'}}>{service.title}</h2>
        <h1 className="my-0 py-4 text-center text-light" style={{backgroundColor:'#b0b0b0'}}>${service.price}</h1>
        <ListGroup  className="text-center rounded-0">
          <ListGroup.Item className="odd-color">{service.item1}</ListGroup.Item>
          <ListGroup.Item className="even-color">{service.item2}</ListGroup.Item>
          <ListGroup.Item className="odd-color">{service.item3}</ListGroup.Item>
          <ListGroup.Item className="even-color">{service.item4}</ListGroup.Item>
          <ListGroup.Item className="odd-color">{service.item5}</ListGroup.Item>
          <ListGroup.Item className="even-color">{service.item6}</ListGroup.Item>
        </ListGroup>
        <div className="py-3" style={{backgroundColor:'#898262',}}>
            <button onClick={()=>handelServices(service)} className="m-auto rounded py-2 border-0 d-block fs-4 text-light text-center" style={{backgroundColor:'#212529',width:'40%'}}>Book Now</button>
        </div>
      </Card>
    </div>
  );
};

export default ServiceDetails;
