import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style.scss";
import Home from "./NavbarClass/home";
import AboutUs from "./NavbarClass/aboutUs";
import Account from "./NavbarClass/account";
import LogIn from "./NavbarClass/logIn";
import Layout from "./NavbarClass/Layout";


function Navbar() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="account" element={<Account />} />
          <Route path="logIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
