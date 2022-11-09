import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Loader/UserContext';

import { PacmanLoader } from 'react-spinners';



const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext) ;
    const location = useLocation() ;
    if(loading){
        return <PacmanLoader color="#36d7b7" className='mx-auto my-28'></PacmanLoader>
    }
  if(user && user.uid){
    return children ;
  }
  return <Navigate to='/login' state= {{from: location}}></Navigate>
};

export default PrivateRoute;