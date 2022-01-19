import React from 'react';
import {Route, Routes} from "react-router-dom";
import {SignIn} from "./pages/signIn/signIn";
import {SignUp} from "./pages/signUp/signUp";
import PrivateRoute from "./PrivateRoute";
import {Home} from "./pages/home/home";
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
