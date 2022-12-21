import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className='my-5'>
            <p className='text-center py-5'>opp,...something went wrong go to home page <small> <Link to="/home">home</Link></small> </p>
        
        </div>
    );
};

export default NoMatch;