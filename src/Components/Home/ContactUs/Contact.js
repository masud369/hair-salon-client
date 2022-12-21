import React from "react";
import Form from "react-bootstrap/Form";
import "./Contact.css"
const Contact = () => {
  return (
    <div className="bg-color container-padding">
    <div className="container">
      <h1 className="title-color text-center py-5">Contact</h1>
      <Form>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3 demo" controlId="exampleForm.ControlInput1">
              <Form.Control className="rounded-0 border-0 " style={{color:'white',backgroundColor:'#ddd'}} type="text" placeholder="first name" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control className="rounded-0 border-0" style={{color:'white',backgroundColor:'#ddd'}} type="text" placeholder="sur name" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control className="rounded-0 border-0" style={{color:'white',backgroundColor:'#ddd'}} type="email" placeholder="your email" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control className="rounded-0 border-0" style={{color:'white',backgroundColor:'#ddd'}} type="number" placeholder="phone number" />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
          <Form.Control className="rounded-0 border-0" style={{color:'white',backgroundColor:'#ddd'}} as="textarea" rows={3}  placeholder="Your message"/>
        </Form.Group>
      </Form>
    </div>
    </div>
  );
};

export default Contact;
