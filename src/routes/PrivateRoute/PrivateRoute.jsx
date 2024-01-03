/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        // console.log(user);
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;

};

export default PrivateRoute;