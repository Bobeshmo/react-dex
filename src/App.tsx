import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {SignIn} from "./pages/signIn/signIn";
import {SignUp} from "./pages/signUp/signUp";
import {PrivateRoute} from "./PrivateRoute";
import {Teams} from "./pages/teams/teams";
import {Players} from "./pages/players/players";
import {AxiosInterceptorsSetup} from "./axios/interceptor";
import {NoMatch} from "./pages/noMatch/noMatch";
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
                    <Route path="/teams" element={<Teams/>}/>
                    <Route path="/players" element={<Players/>}/>
                </Route>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
    );
}

export default App;
