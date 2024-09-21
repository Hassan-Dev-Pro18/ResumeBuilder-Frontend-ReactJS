import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';


function ProtectedRoute(props) {
    const {Component} = props;
    const navigate = useNavigate();
    
    useEffect(()=>{
        let login = localStorage.getItem('token')
        if(!login){
            navigate('/login')
        }
        
      });
    
  return (
    <>
    <Component/>
    </>
  );
}

export default ProtectedRoute;
