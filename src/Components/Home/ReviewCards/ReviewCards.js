import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faStar} from '@fortawesome/free-solid-svg-icons'

const ReviewCards = ({review}) => {
    return (
        <div className='col-md-4 text-color text-light'>
        <div className="p-5"  style={{backgroundColor:'gray',width:'100%'}}>
           <div className="row d-flex">
                <div className="d-flex px-2 align-items-center">
                <div className="image pe-2">
                    <img className='img-fluide' src={review?.image} style={{height:'60px',width:'50px',borderRadius:'50%'}} alt="" />
                </div>
                <div className="title ps-2">
                   <h5 className='' style={{fontSize:'16px',fontWeight:'bolder'}}>{review.name}</h5>
                   <h6 style={{fontSize:'15px'}}>{review.designation}</h6>
                </div></div>
            </div>
            <p className='pt-3'>{review.description}</p>
            {review.ratingPoint === "1" && <div className='yellow-color'><FontAwesomeIcon icon={faStar} /></div>}
            {review.ratingPoint === "2" && <div className='yellow-color'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>}
            {review.ratingPoint === "3" && <div className='yellow-color'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>}
            {review.ratingPoint === "4" && <div className='yellow-color'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>}
            {review.ratingPoint === "5" && <div className='yellow-color'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>}
            </div>  
        </div>
    );
};

export default ReviewCards;