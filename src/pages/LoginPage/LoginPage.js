import React from 'react';
import Navbar from '../navbar/Navbar';
// import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {

    const { SigninGoogle, SigninGithub } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_location = location.state?.from || "/home";

    const googleSingIn = () => {
        SigninGoogle(navigate, redirect_location);
    };

    const githubSignIn = () => {
        SigninGithub(navigate, redirect_location);
    };

    return (
        <>
            <Navbar/>
           <div className="w-full mx-auto mt-4 md:mt-40 max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                   
                    <h1 className='text-center text-xl mb-4 font-bold text-blue-600'>SignIn</h1>
                    <div className='flex justify-center items-center flex-col'>
                        <button onClick={googleSingIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            LogIn With Google
                        </button>
                        <button onClick={githubSignIn} className="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            LogIn With Github
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div> 
        </>
    );
};

export default LoginPage;