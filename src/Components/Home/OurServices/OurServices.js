import React, { useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const OurServices = () => {
  const services = [
    {
      title: "Basic",
      price: "19",
      item1: "Mens Hairdressing",
      item2: "Traditional Barber Shave",
      item3: "Mens Facials",
      item4: "Massage for Men",
      item5: "Mens Waxing",
      item6: "Male Bronzing",
      id: "01",
    },
    {
      title: "Silver",
      price: "39",
      item1: "Mens Hairdressing",
      item2: "Traditional Barber Shave",
      item3: "Mens Facials",
      item4: "Massage for Men",
      item5: "Mens Waxing",
      item6: "Male Bronzing",
      id: "02",
    },
    {
      title: "Gold",
      price: "99",
      item1: "Mens Hairdressing",
      item2: "Traditional Barber Shave",
      item3: "Mens Facials",
      item4: "Massage for Men",
      item5: "Mens Waxing",
      item6: "Male Bronzing",
      id: "03",
    },
  ];
// const [services,setServices] = useState([]);
  return (
    <div className="bg-color container-padding">
      <div className="container">
        <h1 className="title-color text-center py-5">Our Services</h1>
        <div className="row" style={{border:'1px solid #998623'}}>
            {services.map((service) => (
              <ServiceDetails service={service} key={service.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
