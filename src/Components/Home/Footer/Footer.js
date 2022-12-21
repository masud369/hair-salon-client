import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagramSquare, faSkype, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
    return (
        <div className='py-5' style={{backgroundColor:'#998623',borderTop:'1px solid #ddd'}}>
           <div className="container py-5 text-light"> 
            <div className="row"> 
                <div className="col-md-4 d-flex ">
                 <div className="flex-shrink-0">
                 </div> <FontAwesomeIcon className='mt-1 fs-3 me-1' icon={faLocationDot} />
                <h5> H#000(0th Floor),Road#000,<br />DOHS,Mohakhali, Dhaka, Bangladesh </h5> 
                 
                 </div>
                <div className="col-md-4">
                    <div className="row"> 
                        <div className="col-md-6 list-unstyled">
                            <h3 className='mb-4'>Company</h3>
                        <li>About</li>
                        <li>Porject</li>
                        <li>Our Team</li>
                        <li>Teams Conditions</li>
                        <li>Submit Listing</li>
                        </div>
                        <div className="col-md-6 list-unstyled">
                        <h3 className='mb-4'>Quick Links</h3>
                        <li>About</li>
                        <li>Porject</li>
                        <li>Our Team</li>
                        <li>Teams Conditions</li>
                        <li>Submit Listing</li>
                        </div>
                    </div>
                     </div>
                <div className="col-md-4"> 
                    <h3 className='mb-4'>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, distinctio!</p>
                   
                      <p className='d-flex list-unstyled row-cols-auto'> 
                        <li className=' my-2 px-1'><FontAwesomeIcon className='fs-5' icon={faFacebook}/></li>
                        <li className=' mx-2 px-1'><FontAwesomeIcon className='fs-5' icon={faInstagramSquare}/></li>
                        <li className=' mx-2 px-1'><FontAwesomeIcon className='fs-5' icon={faTwitter}/></li>
                        <li className=' mx-2 px-1'><FontAwesomeIcon className='fs-5' icon={faSkype}/></li>
                        </p>

                </div>
            </div>
           </div> 
        </div>
    );
};

export default Footer;