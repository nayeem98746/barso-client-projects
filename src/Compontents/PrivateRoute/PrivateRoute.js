import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const PrivateRoute = ({ children, ...rest }) => {
   
        const { user, isLoading } = useAuth();
            let location = useLocation();
            if (isLoading) { return <CircularProgress /> }
            if (user.email) {
                return children;
            }
            return <Navigate to="/login" state={{ from: location }} />;
   
};

export default PrivateRoute;







// import { CircularProgress } from '@mui/material';
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAuth from '../../Hooks/UseAuth';

// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     let location = useLocation();
//     if (isLoading) { return <CircularProgress /> }
//     if (user.email) {
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} />;
// };

// export default PrivateRoute;