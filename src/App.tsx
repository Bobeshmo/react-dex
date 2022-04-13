import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {AxiosInterceptorsSetup} from "./axios/interceptor";
import {privateRoutes, publicRoutes} from "./router";
import styles from './App.module.sass';

function AxiosInterceptorNavigate() {
    let navigate = useNavigate();
    AxiosInterceptorsSetup(navigate);
    return <></>;
}

function App() {
    return (
        <div className={styles.App}>
            {<AxiosInterceptorNavigate/>}
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Navigate to="/teams"/>}/>
                    {
                        privateRoutes.map((route, index) => {
                            return <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element/>}
                            />
                        })
                    }
                </Route>
                {
                    publicRoutes.map((route) => {
                        return <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    })
                }
            </Routes>
        </div>
    );
}

export default App;
