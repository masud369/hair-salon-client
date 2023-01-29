import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardMenu from "../DashboardMenu/DashboardMenu";


const Dashboard = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const newData = {...data}
    newData.stutas = "Not Opened";
        fetch('https://hairsalon-server.onrender.com/postOrder',{
          method:"POST",
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(result=>{
          console.log(result)
          if(result){
            document.getElementById("name").value = " ";
            document.getElementById("email").value = " ";
            document.getElementById("title").value = " ";
            document.getElementById("price").value = " ";
          }
        })
      
  };
  
 const services = JSON.parse(sessionStorage.service || null);
  return (
    <div className="bg-color" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row">
        <div className="col-md-2">
         <DashboardMenu />
        </div>
        <div className="col-md-10 px-0">
          <div className="d-flex d-flex justify-content-between">
            <h4 className="mt-5 px-3 title-color">Book</h4>
            <h4 className="mt-5 px-3 title-color">{services?.userName}</h4>
          </div>
          <div className="py-3 px-4 " style={{backgroundColor:'gray',height:'87.1vh'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="p-2 my-2" style={{width:'70%'}} id="name" defaultValue={services?.userName} {...register("name",{ required: true })} type="text" /> <br />
            <input className="p-2 my-2" style={{width:'70%'}} id="email" defaultValue={services?.email} {...register("email",{ required: true })} type="email"/><br />
            <input className="p-2 my-2" style={{width:'70%'}} id="title" defaultValue={services?.title} {...register("serviceName",{ required: true })} type="text" /><br />
            <input className="p-2 my-2" style={{width:'70%'}} id="price" defaultValue={services?.price} {...register("servicePrice",{ required: true })} type="number" /><br />
      
      <input type="submit" />
    </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
