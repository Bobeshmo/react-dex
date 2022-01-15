import React, {useEffect, useState} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {connect} from "react-redux";

const PrivateRoute  = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        token && props.user ? setIsAuthenticated(true) : setIsAuthenticated(false)

    }, [isAuthenticated]);

    if (isAuthenticated === null) return null;

    return <>{isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>}</>;
};

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(PrivateRoute)