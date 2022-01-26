import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/Home/Home';
import AuthProvider from '../context/AuthProvider';
import AddTravel from '../pages/AddTravel/AddTravel';
import LoginPage from '../pages/LoginPage/LoginPage';
import Profile from "../pages/profile/Profile";

const Routess = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route path="/dashboard" element={<Profile/>}/>
                            <Route path="/dashboard/addtravels" element={<AddTravel/>}/>
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

export default Routess;