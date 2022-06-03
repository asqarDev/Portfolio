import React from "react";
import Login from "./Componenets/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pages from "./Componenets/HomePages/Pages";
import ScratchGame from "./Componenets/HomePages/ScratchGame";
import AdminPanel from "./Componenets/ProfileSaidbar/AdminPanel";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <div className="login__page">
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<AdminPanel />} />
            <Route path="/pagination" element={<Pages />} />
            <Route path="/scratch" element={<ScratchGame />} />
          </div>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
