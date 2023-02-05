import React from 'react'
import './App.css'

import Header from './assets/components/template/Header/'
import Navbar from './assets/components/template/Navbar'
import Footer from './assets/components/template/Footer/'

function App() {
  return (
    <body className="grid-container">
      <Header/>
      <Navbar/>
      <Footer/>
    </body>
  )
}

export default App
