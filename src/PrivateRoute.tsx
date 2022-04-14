import React, {useEffect, useState} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useSelector} from "react-redux";
import {RootState} from "./core/redux/store";

export const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const user = useSelector((state: RootState) => state.auth.user)

    useEffect(() => {
        user
            ? setIsAuthenticated(true)
            : setIsAuthenticated(false)
    }, [user]);

    if (isAuthenticated === null) return null;

    return <>{isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>}</>;
};