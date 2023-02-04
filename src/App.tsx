import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Products from './components/Productslist'
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Home from './components/Homepage';
import Navigationbar from './components/Navigationbar';
import ProtectedRoutes from './Productedroutes';
const App: React.FC = () =>{

  return (
    <>
   <Navigationbar/>
      <Routes>
        <Route element={<ProtectedRoutes />}>
        <Route  path="/homepage" element={<Home/>} ></Route>
        <Route  path="/add-user" element={<Addproduct/>} ></Route>
        <Route  path="/edit-user/:id" element={<Addproduct/>} ></Route>
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
 
  );
}

export default App;
