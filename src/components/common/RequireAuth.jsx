import React, { useContext } from 'react';
import { AuthContext } from '../backend/context/Auth';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { user } = useContext(AuthContext);

    // Check if user is null or undefined
    if (!user || Object.keys(user).length === 0) {
        return <Navigate to='/admin/login' replace />;
    }

    return children;
}

export default RequireAuth;
