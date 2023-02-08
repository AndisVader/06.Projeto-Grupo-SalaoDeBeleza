import React from 'react'
import './App.css'

import Header from "../components/template/Header/Header"
import Navbar from '../components/template/Nav/Nav'
import Main from '../components/template/Main/Main'
import Footer from '../components/template/Footer/Footer'

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
