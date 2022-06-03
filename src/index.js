import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Componenets/Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./Routers";
import App from "./App";
import AdminPanel from "./Componenets/ProfileSaidbar/AdminPanel";
import Login from "./Componenets/Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <ToastContainer />
        {/* <Routers /> */}
        {/* <AdminPanel /> */}
        {/* <Login/>/ */}
      </AuthProvider>
      <App/>
    </Router>
  </React.StrictMode>
);
