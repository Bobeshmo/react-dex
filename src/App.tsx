import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {SignIn} from "./pages/signIn/signIn";
import {SignUp} from "./pages/signUp/signUp";
import PrivateRoute from "./PrivateRoute";
import styles from './App.module.css';
import {Team} from "./pages/team/team";
import {Players} from "./pages/players/players";
import {AxiosInterceptorsSetup} from "./axios/interceptor";

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
                    <Route path="/teams" element={<Team/>}/>
                    <Route path="/players" element={<Players/>}/>
                </Route>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
