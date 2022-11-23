import { Navigate } from 'react-router-dom';
import React from 'react';
// import { useAuthContext } from '../../contexts/AuthContext';

import { auth } from '../../firebase-config';

const PrivateRoute = ({ children }) => {


    return auth ? children : <Navigate to="/login" />
};

export default PrivateRoute;

// import { Navigate } from 'react-router-dom';
// import React from 'react';
// // import { useAuthContext } from '../../contexts/AuthContext';

// const PrivateRoute = ({ children }) => {
//     let auth = 'true';
//     if (!auth) {
//      return <Navigate to="/login" />
//     }

//     return children;
// };

// export default PrivateRoute;