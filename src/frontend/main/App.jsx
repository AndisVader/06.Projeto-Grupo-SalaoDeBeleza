import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Logo from "../components/template/Logo/Logo"
import Navbar from '../components/template/Nav/Nav'
import Rotas from '../routes/Routes'
import Footer from '../components/template/Footer/Footer'

export default props =>
  <div className="grid-container">
    <BrowserRouter>
        <Logo />
        <Navbar />
        <Rotas />
        <Footer />  
    </BrowserRouter>
  </div>