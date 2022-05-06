import "./App.css";
import Footer from "./Componenets/Footer/Footer";
import Navbar from "./Componenets/Navbar/Navbar";
import Home from "./Componenets/HomePages/Home";
import About from "./Componenets/HomePages/About";
import Service from "./Componenets/HomePages/Service";
import Blog from "./Componenets/HomePages/Blog";
import Contact from "./Componenets/HomePages/Contact";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

import devImg from "./img/devImg.jpg";
import dostlar from "./img/IMG_20210222_124702.jpg";
import men from "./img/man.jpg";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0078ff;
`;

function App() {
  const name = ["Mirzayev Asqar"];
  const profile = ["Frontend developer"];
  const email = ["asqarmirzayev2@gmail.com"];
  const phone = ["+99 890 094 08 20"];

  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  let [color, setColor] = useState("#0078ff");
  const [login, setLogin] = useState(false);

  const getStudents = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setLoader(false);
        setUsers(res.data);
      })
      .catch((res) => {
        console.log("Error");
      });
  };
  const data = [
    {
      name: "Mirzayev Asqar",
      age: 21,
      yonalishi: "Frontend",
      kasbi: "Dasturchi",
      imgUrl: devImg,
      telegram: "Mirzayev_14",
      instagram: "dasturchi_14",
    },
    {
      name: "Abdulhamidov Sherzod",
      age: 22,
      yonalishi: "IOS",
      kasbi: "Dasturchi",
      imgUrl: dostlar,
      telegram: "sher_abdulxamidov1",
      instagram: "sher_abdulxamidov1",
    },
    {
      name: "Axmadov Abror",
      age: 21,
      yonalishi: "Backend",
      kasbi: "Dasturchi",
      imgUrl: men,
      telegram: "AbrorjonAxmadov",
      instagram: "axmadov_abrorjon",
    },

    {
      name: "Narzullayev Azizbek",
      age: 22,
      yonalishi: "Flutter",
      kasbi: "Dasturchi",
      imgUrl: dostlar,
      telegram: "AzizbekNarzullayev",
      instagram: "azizbek_12_01",
    },
    {
      name: "Mirzayev Asqar",
      age: 21,
      yonalishi: "Frontend",
      kasbi: "Dasturchi",
      imgUrl: devImg,
      telegram: "Mirzayev_14",
      instagram: "dasturchi_14",
    },
    {
      name: "Abdulhamidov Sherzod",
      age: 22,
      yonalishi: "IOS",
      kasbi: "Dasturchi",
      imgUrl: dostlar,
      telegram: "sher_abdulxamidov1",
      instagram: "sher_abdulxamidov1",
    },
    {
      name: "Axmadov Abror",
      age: 21,
      yonalishi: "Backend",
      kasbi: "Dasturchi",
      imgUrl: men,
      telegram: "AbrorjonAxmadov",
      instagram: "axmadov_abrorjon",
    },

    {
      name: "Narzullayev Azizbek",
      age: 22,
      yonalishi: "Flutter",
      kasbi: "Dasturchi",
      imgUrl: dostlar,
      telegram: "AzizbekNarzullayev",
      instagram: "azizbek_12_01",
    },
  ];

  useEffect(() => {
    getStudents();
  }, []);

  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector(".scrollTop");
    upToTop.classList.toggle("active", window.screenY > 0);
  });
  return (
    <>
      {loader ? (
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ width: "100%", height: "100vh" }}
          >
            <div className="col">
              <div className="sweet-loading">
                <CircleLoader
                  color={color}
                  loading={loader}
                  css={override}
                  size={150}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          
          <Navbar />
          <Home name={name} />
          <About
            name={name}
            profile={profile}
            email={email}
            phone={phone}
            data={data}
          />
          <Service profile={profile} />
          <Blog name={name} />
          <Contact phone={phone} email={email} />
          <Footer name={name} />
        </div>
      )}
    </>
  );
}

export default App;
