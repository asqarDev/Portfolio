import "./App.css";
import Footer from "./Componenets/Footer/Footer";
import Navbar from "./Componenets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Componenets/HomePages/Home";
import About from "./Componenets/HomePages/About";
import Service from "./Componenets/HomePages/Service";
import Blog from "./Componenets/HomePages/Blog";
import Contact from "./Componenets/HomePages/Contact";
function App() {
  const name = ["Mirzayev Asqar"]
  const profile = ['Frontend developer']
  const email = ["asqarmirzayev2@gmail.com"]
  const phone = ["+99 890 094 08 20"]
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About name={name} profile={profile} email={email} phone={phone} />
        <Service profile={profile} />
        <Blog name={name} />
        <Contact phone={phone} email={email} />
        <Footer name={name} />
      </div>

    </>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/service" element={<Service />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />

    // </BrowserRouter>
  );
}

export default App;
