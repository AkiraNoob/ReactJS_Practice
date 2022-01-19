// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Main from "./components/APIdemo_ReactRouterV6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/APIdemo_ReactRouterV6/Home";
import Product from "./components/APIdemo_ReactRouterV6/Product";
import Weather from "./components/APIdemo_ReactRouterV6/Weather";
import SignUp from "./components/APIdemo_ReactRouterV6/SignUp";
import Login from "./components/APIdemo_ReactRouterV6/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="product" element={<Product />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
