import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  const token = localStorage.getItem('idToken');

  if (isLoading && !token)
    {
      return (
        <Loading />
      )
      }
      return( token ? children :  <Navigate to="/login" state={{ from: location }} /> 
      )
};

export default PrivateRoute;