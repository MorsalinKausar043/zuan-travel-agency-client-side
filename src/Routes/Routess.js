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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MakeAdmin from '../pages/makeAdmin/MakeAdmin';

const Routess = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                            <Route path="/dashboard" element={<Profile/>}/>
                            <Route path="/dashboard/addtravels" element={<PrivateRoute><AddTravel/></PrivateRoute>}/>
                            <Route path="/dashboard/allorder" element={<PrivateRoute><AllOrder/></PrivateRoute>}/>
                            <Route path="/dashboard/myorder" element={<PrivateRoute><MyOrder/></PrivateRoute>}/>
                            <Route path="/dashboard/manageorder" element={<PrivateRoute><ManageOrder/></PrivateRoute>}/>
                            <Route path="/dashboard/makeadmin" element={<PrivateRoute><MakeAdmin/></PrivateRoute>}/>
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/product/:_id" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
                        <Route path="*" element={<Errorpage />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

export default Routess;