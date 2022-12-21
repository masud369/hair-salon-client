import React from 'react';
import './WorkCard.css'

const WorkCard = ({workimg}) => {
    console.log(workimg)
    return (
        <div className="col-md-4 g-3" > 
        <div className="overflow-hidden overlay-color" style={{}}>
            <img style={{height:'200px'}} src={workimg.img} alt="" />
        </div></div>
    );
};

export default WorkCard;