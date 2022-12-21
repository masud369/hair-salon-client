import React, { useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRout = () => {
    const [loggedinUser,setLoggedinUser] = useContext(UserContext);
    const location = useLocation();
    console.log(loggedinUser.email);
    return loggedinUser.email? <Outlet />:<Navigate to="/login" replace state={{from:location}} />;
};

export default PrivetRout;