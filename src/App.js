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
import sher from './img/sher.jpg'
import bgImg from './img/bg_img.jpg'
import bgNo from './img/AbrorjonPro.jpeg'
import 'antd/dist/antd.css';
import { toast } from "react-toastify";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0078ff;
`;

function App() {
  const name = ["Mirzayev Asqar"];
  const profile = ["Frontend developer"];
  const email = ["asqarmirzayev2@gmail.com"];
  const phone = '+998900940820';
  const maps = [
    "https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%BE%D0%BD%D0%B7%D0%BE%D1%80+%D0%BC%D0%B5%D1%82%D1%80%D0%BE/@41.275873,69.2010873,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a22d8b4347d:0x18b72c3133debcf4!8m2!3d41.275869!4d69.203276",
  ];

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

  const getLogin = () => {
    setLogin(true);
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
      imgUrl: sher,
      telegram: "sher_abdulxamidov1",
      instagram: "sher_abdulxamidov1",
    },
    {
      name: "Axmadov Abror",
      age: 21,
      yonalishi: "Backend",
      kasbi: "Dasturchi",
      imgUrl: bgNo,
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
      imgUrl: bgImg,
      telegram: "Mirzayev_14",
      instagram: "dasturchi_14",
    },
    {
      name: "Abdulhamidov Sherzod",
      age: 22,
      yonalishi: "IOS",
      kasbi: "Dasturchi",
      imgUrl: sher,
      telegram: "sher_abdulxamidov1",
      instagram: "sher_abdulxamidov1",
    },
    {
      name: "Axmadov Abror",
      age: 21,
      yonalishi: "Backend",
      kasbi: "Dasturchi",
      imgUrl: bgNo,
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

  const toastClick = () => {
    toast.success("🦄 Yes success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toastClick1 = () => {
    toast.warning("🦄 Yes warning ", {
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
    toast.error("🦄 No Error ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // window.addEventListener("scroll", function () {
  //   const upToTop = document.querySelector(".scrollTop");
  //   upToTop.classList.toggle("active", window.screenY > 0);
  // });
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
          <Navbar getLogin={getLogin} />
          <Home name={name} />
          <About
            name={name}
            profile={profile}
            email={email}
            phone={phone}
            data={data}
          />
          <Service profile={profile} />
          <Blog
            name={name}
            toastClick={toastClick}
            toastClick1={toastClick1}
            toastClick2={toastClick2}
          />
          <Contact
            phone={phone}
            email={email}
            toastClick={toastClick}
            toastClick2={toastClick2}
            maps={maps}
          />
          <Footer name={name} />
        </div>
      )}
    </>
  );
}

export default App;
