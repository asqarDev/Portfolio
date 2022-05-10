import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Routers from "./Routers";

import { AuthProvider } from "./Componenets/Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminPanel from "./Componenets/ProfileSaidbar/AdminPanel";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <ToastContainer />
      <Routers /> */}
      <AdminPanel/>
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>
);
