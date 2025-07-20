import React, { use } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) return <Loading></Loading>

    if (user && user?.email) return children;
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;