import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuthContext();

    return user.email ? children : <Navigate to="/login" />
};

export default PrivateRoute;