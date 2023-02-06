import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./assets/App.jsx"
import HomePage from "./assets/App.jsx";
import ServicePage from "./assets/pages/HomePages/";
import ContactPage from "./assets/pages/ContactPages/";
import AboutUsPage from "./assets/pages/AboutUsPages/";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='./assets/App.jsx' element={<IndexPage/>}/>
      <Route path='./assets/pages/HomePages/App.jsx' element={<HomePage/>}/>
      <Route path='./assets/pages/ServicePages/' element={<ServicePage/>}/>
      <Route path='./assets/pages/ContactPages/' element={<ContactPage/>}/>
      <Route path='./assets/pages/AboutUsPages/' element={<AboutUsPage/>}/>
    </Routes>
  </BrowserRouter>
)

export default Rotas;