import React, {useEffect, useState} from 'react'
import jwtDecode from "jwt-decode";
import {Navigate} from 'react-router-dom'

interface IPrivateRoute {
    children: React.ReactNode;
}

const PrivateRoute = ({children}: IPrivateRoute) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken: number = jwtDecode<any>(token).exp;
            const date: number = new Date().getTime() / 1000;

            setIsAuthenticated(decodedToken >= date);
        } else {
            setIsAuthenticated(false);
        }
    });

    if (isAuthenticated === null) return null;

    return <>{isAuthenticated ? children : <Navigate to='/login' replace/>}</>;
};

export default PrivateRoute;