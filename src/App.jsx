import React from 'react'
import './App.css'

import Header from './assets/components/template/Header'
import Navbar from './assets/components/template/Navbar'
import Main from './assets/components/template/Main'
import Footer from './assets/components/template/Footer'

function App() {
  return (
    <div className="grid-container">
      <Header className=""></Header>
      <Navbar className=""></Navbar>
      <Main className=""></Main>
      <Footer className=""></Footer>
    </div>
  )
}

export default App
