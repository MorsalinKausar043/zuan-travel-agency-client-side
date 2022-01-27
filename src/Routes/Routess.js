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
import SingleProduct from '../pages/singleProduct/SingleProduct';
import Footer from '../components/Footer/Footer';
import AllOrder from '../components/allOrder/AllOrder';
import MyOrder from '../components/MyOrder/MyOrder';
import ManageOrder from '../components/ManageOrder/ManageOrder';
import Errorpage from '../components/errorpage/Errorpage';

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
                            <Route path="/dashboard/allorder" element={<AllOrder/>}/>
                            <Route path="/dashboard/myorder" element={<MyOrder/>}/>
                            <Route path="/dashboard/manageorder" element={<ManageOrder/>}/>
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/product/:_id" element={<SingleProduct />} />
                        <Route path="*" element={<Errorpage />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

export default Routess;