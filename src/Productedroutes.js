import React from "react";
import {  Outlet } from "react-router-dom";
import Login from "./components/Login";
function ProtectedRoutes() {
  const rootprotect = localStorage.getItem("Token");
  return rootprotect ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;