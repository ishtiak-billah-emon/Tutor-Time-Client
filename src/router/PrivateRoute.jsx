import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  const location = useLocation();

  if(user && user?.email) {
    return children;
  }
  return (
    <div>
        <Navigate 
        state={location.pathname}
        to={'/login'}
         
        ></Navigate>
    </div>
  );
};

export default PrivateRoute;