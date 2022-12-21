import React from 'react';
import workpic1 from '../../images/istockphoto-146795152-612x612.jpg'
import workpic2 from '../../images/istockphoto-482907157-612x612.jpg'
import workpic3 from '../../images/istockphoto-495422285-612x612.jpg'
import workpic4 from '../../images/istockphoto-606714824-612x612.jpg'
import workpic5 from '../../images/istockphoto-848580508-612x612.jpg'
import workpic6 from '../../images/istockphoto-973284782-612x612.jpg'
import WorkCard from './WorkCard/WorkCard';

const OurWorks = () => {
    const workimgs = [
        {img:workpic1,id:'01'},
        {img:workpic2,id:'02'},
        {img:workpic3,id:'03'},
        {img:workpic4,id:'04'},
        {img:workpic5,id:'05'},
        {img:workpic6,id:'06'},
    ]

    return (
        <div className="bg-color container-padding">
            <div className="container">
                <h2 className='text-center fs-1 title-color py-4'>Our Works</h2> 
                <div className="row"> 
                    {
                        workimgs.map(workimg=><WorkCard workimg={workimg} key={workimg.id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurWorks;