import React from "react";
import Login from "./Componenets/Login/Login";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Pages from "./Componenets/HomePages/Pages";
import ScratchGame from "./Componenets/HomePages/ScratchGame";
import { useEffect } from "react";
import { useState } from "react";

const Routers = () => {
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate()
  const rout = [
    { path: "/home", exact: "true" },
    { path: "/user", exact: "true" },
    { path: "/profil", exact: "true" },
  ];
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    }else{
      navigate("/")
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* <App/> */}
        <Routes>
          isToken ? (
          <div className="Layout">
            {rout.map((link, index) => {
              return (
                <Route
                  path={link.path}
                  exact={link.exact}
                  element={<link.element />}
                />
              );
            })}
          </div>
          ) : (
          <div className="login__page">
            <Route path="*" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pagination" element={<Pages />} />
            <Route path="/scratch" element={<ScratchGame />} />
          </div>
          )
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
