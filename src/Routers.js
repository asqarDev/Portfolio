import React from "react";
import Login from "./Componenets/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pages from "./Componenets/HomePages/Pages";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        {/* <App/> */}
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagination" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
