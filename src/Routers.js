import React from "react";
import Login from "./Componenets/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
