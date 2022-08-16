import React from 'react'
import { Route, Navigate  } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    return (
        <BrowserRouter>
        <Route {...rest} render={(props)=> {
        if (isAuth){
            return <Component />;
         }else {    
            return ( 
            <Navigate  to={{ pathname: "./components/Sayfa2", state: { from: props.location } }} /> );
        }
        }} />
        </BrowserRouter>
  );    
}

export default ProtectedRoute