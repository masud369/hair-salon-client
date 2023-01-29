import React, { useContext } from 'react';
import { UserContext } from '../../App';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
        fetch('http://localhost:5000/makeAdmin',{
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
            document.getElementById("email").value = " ";
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
              <h4 className="mt-5 px-3 title-color">Make Admin</h4>
              <h4 className="mt-5 px-3 title-color">
                {loggedinUser.displayName}
              </h4>
            </div>
            <div
              className="py-3 px-4 "
              style={{ backgroundColor: "gray", height: "87.1vh" }}
            >
              <h2 className="text-light">Make An Admin Here</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="p-2 my-2" style={{width:'70%'}} id="name" defaultValue={loggedinUser.displayName} {...register("name",{ required: true })} type="text" placeholder="Admin name" /> <br />
            <input className="p-2 my-2" style={{width:'70%'}} id="designation"  {...register("designation",{ required: true })} type="text" placeholder="Admin designation" /><br />
            <input className="p-2 my-2" style={{width:'70%'}} id="email"  {...register("email",{ required: true })} type="text" placeholder="Admin Email" /><br />
      <input type="submit" />
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MakeAdmin;