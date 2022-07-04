
import React from 'react'
import { useSelector } from "react-redux";
import  {Navigate, useLocation}  from 'react-router-dom'
//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const isAuth = useSelector((store)=>store.Authreducer)
    console.log(isAuth);
    const location = useLocation();
    
    const from = {
        pathname: location.pathname,
      };

    if(isAuth.data.isAuth) return children;
    return <Navigate to={"/login"} state={from} replace />
};

export default ReqAuth;
