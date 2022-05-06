import React, { useEffect, useState, useRef, useContext } from "react";
import "./Login.css";
import AuthContext from "../Context/AuthProvider";
import axios from "../Api/Axios";
const LOGIN_URL = "/auth";
export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    users.map((item) =>
      item.username === setUser(e) && item.password === setPwd(e)
        ? (setSuccess(true), console.log("sss"))
        : "NO Success"
    );

    console.log(e.target.value);
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
      {success ? (
        <section>
          <h1>You are logged in! </h1>
          <br />
          <p>
            <a href="#2">Go to Home</a>
          </p>
        </section>
      ) : (
        <div className="bg_login">
          <div className="container loginContainer">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="card p-4">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <h1 className="text-center">Hello Login</h1>
                  <div className="">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label for="username" className="form-label">
                          UserName
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
                        <button type="submit" className="btn btn-primary">
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
      )}
    </>
  );
}
