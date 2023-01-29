import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

const ListDetails = ({ order }) => {
  const [stutas, setStutas] = useState({});
const changeStutas = (e,id)=>{
  console.log(e.target.options[e.target.selectedIndex].innerText);
  console.log(id)
  // const newStutas = 
  // setStutas(document.getElementById("newStutas").innerText)
  const newStutas = {...stutas}
  newStutas.id = id;
  newStutas.name = e.target.options[e.target.selectedIndex].innerText;
  // newStutas.id = id;
  setStutas(newStutas);
}
  useEffect(()=>{
    fetch('https://hairsalon-server.onrender.com/orderLists',{
          method:"PUT",
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify(stutas)
        })
  })
  console.log(stutas);
  return (
    <tr className="table-active" >
      <td style={{padding:'20px'}}>{order.name}</td>
      <td style={{padding:'20px'}}>{order.email}</td>
      <td style={{padding:'20px'}}>{order.serviceName}</td>
      <td style={{padding:'20px'}} colSpan="1">
      <Form.Select onChange={(e)=>changeStutas(e,order._id)} id="newStutas" aria-label="Default select example">
      <option id="oldStutas" value="1">{order.stutas}</option>
      <option value="2">Pending</option>
      <option value="3">Done</option>
    </Form.Select>
      </td>
    </tr>
  );
};

export default ListDetails;
