import React from 'react';
import aboutimg from '../../images/about-us-01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck} from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
    return (
        <div className="bg-color container-padding">
        <div className='container' style={{color:"#918c7a"}}>
            <h1 className='text-center title-color'>About Us</h1><br /><br /><br />
            <h2>Who we are?</h2><br />
            <p>Experts in men's hair, skin care, manicure & massage <br /><br />
            We are a combination of having highly skilled, knowledgable t tempor, dolor mi laoreet ligula, id sodales arcu est non risus. Nulla facilisi. Aenean lobortis justo tincidunt elit mollis vel auctor sapien auctor. Proin scelerisque, ipsum quis rhoncus ultricies, orci tortor dignissim leo, nec facilisis dolor felis ac erat.
             </p>
             <br />
             <br />
             <div className="row"> 
                <div className="col-md-6 mt-4"> 
                <h5>Our Features Services</h5>
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-md-6 list-unstyled"> 
                                <li>
                                <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Male Grooming Packages</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Brazilian straightening</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Hair repair</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Hair extensions</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Male Bronzing</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Mens Eyebrow Re-shape</li>
                            </div>
                            <div className="col-md-6 list-unstyled">
                            <li>
                                <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                Male Grooming Packages</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Brazilian straightening</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Hair repair</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Hair extensions</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Male Bronzing</li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} className='me-2'/>
                                    Mens Eyebrow Re-shape</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                         <img src={aboutimg} alt="" />
                    </div>
                </div>
             </div>

        </div>
        </div>
    );
};

export default AboutUs;