import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import './App.css';
import Home from "./Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
