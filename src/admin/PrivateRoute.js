import React from 'react'
import { useNavigate } from "react-router-dom";
import AdminRoutes from  './routes'
function PrivateRoute() {

    const isAuthorized = Boolean(localStorage.getItem('userToken'));
    const navigate = useNavigate();

    if (!isAuthorized) {
        navigate('/login');
        return null;
    }

    return <AdminRoutes />;
}

export default PrivateRoute;