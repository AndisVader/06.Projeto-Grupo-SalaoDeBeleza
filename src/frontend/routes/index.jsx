import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./App.jsx"
import HomePage from "./assets/pages/HomePages";
import AboutUsPage from "./assets/pages/AboutUsPages";
import ServicePage from "./assets/pages/ServicePages";
import ContactPage from "./assets/pages/ContactPages";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<IndexPage/>}/>
      <Route path='/Inicio' element={<HomePage/>}/>
      <Route path='/SobreNos' element={<AboutUsPage/>}/>
      <Route path='/Servicos' element={<ServicePage/>}/>
      <Route path='/Contatos' element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>
)

export default Rotas;