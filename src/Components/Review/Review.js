import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import { useForm } from "react-hook-form";

const Review = () => {
    const [loggedinUser,setLoggedinUser] = useContext(UserContext);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
        fetch('http://localhost:5000/postReviews',{
          method:"POST",
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
          console.log(result)
          if(result){
            document.getElementById("name").value = " ";
            document.getElementById("designation").value = " ";
            document.getElementById("description").value = " ";
          }
        })
      
  };
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
              <h4 className="mt-5 px-3 title-color">{loggedinUser.displayName}</h4>
            </div>
            <div className="py-3 px-4 " style={{backgroundColor:'gray',height:'87.1vh'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="p-2 my-2" style={{width:'70%'}} id="name" defaultValue={loggedinUser.displayName} {...register("name",{ required: true })} type="text" placeholder="your name" /> <br />
            <input className="p-2 my-2" style={{width:'70%'}} id="designation"  {...register("designation",{ required: true })} type="text" placeholder="Company name & your designation" /><br />
            <textarea className="p-2 my-2" style={{width:'70%'}} id="description" {...register("description",{ required: true })} type="text" rows="4" placeholder='description'></textarea><br />
      <input type="submit" />
    </form>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Review;