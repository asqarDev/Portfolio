import React, { useEffect, useState, useRef, useContext } from "react";
import "./Login.css";
import AuthContext from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import axios from "../Api/Axios";
import AdminPanel from "../ProfileSaidbar/AdminPanel";
// const LOGIN_URL = "/auth";
export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // let history = useHistory();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const users = [
    { username: "AsqarDev", password: "testing321" },
    { username: "developer", password: "testing321" },
  ];

  const toastClick = () => {
    toast.success("🦄 Tabriklayman siz ro'yxatdan o'tdiz", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastClick2 = () => {
    toast.error("🦄 Iltimos username yoki parolni to'g'ri kiritng ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSubmit = () => {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if (users[0].username === username && users[0].password === password) {
      setSuccess(true);
      toastClick();
      // history.push("profile");
      // window.localStorage.setItem(success);
    } else if (
      users[1].username === username &&
      users[1].password === password
    ) {
      toastClick();
      // history.push("profile");

      // window.localStorage.setItem(success);
      setSuccess(true);
    } else if (username === 0 && password === 0) {
      alert("Iltimos username va parolni kiriting");
    } else {
      toastClick2();
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         LOGIN_URL,
  //         JSON.stringify({ user, pwd }),
  //         {
  //           headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       );
  //       console.log(JSON.stringify(response?.data));
  //       //   console.log(JSON.stringify(response));
  //       const accessToken = response?.data?.accessToken;
  //       const rols = response?.data?.rols;
  //       setAuth({ user, pwd, rols, accessToken });
  //       setUser("");
  //       setPwd("");
  //       setSuccess(true);
  //     } catch (err) {
  //       if (!err?.response) {
  //         setErrMsg("No Server Responsive");
  //       } else if (err.response?.status === 400) {
  //         setErrMsg("Missing Username or pasword");
  //       } else if (err.response?.status === 401) {
  //         setErrMsg("Unauthorized");
  //       } else {
  //         setErrMsg("Login Failed");
  //       }
  //       errRef.current.focus();
  //     }
  //   };

  return (
    <>
      {
        success ? (
          <section>
            <AdminPanel />
          </section>
        ) :
        <div className="bg_login">
          <div className="container loginContainer">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="card p-4">
                  {/* <p
                    ref={errRef}
                    className={success ? "disabled" : "disabled"}
                    aria-live="assertive"
                  >
                    kechirasi username yoki parol xato
                  </p> */}
                  <h1 className="text-center" style={{ color: "white" }}>
                    Hello Login
                  </h1>
                  <div className="">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label for="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          autofocus
                          className="form-control"
                          id="username"
                          aria-describedby="emailHelp"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label for="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-end w-100">
                        <button
                          type="button"
                          className="btn btn-success py-2 px-3"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
