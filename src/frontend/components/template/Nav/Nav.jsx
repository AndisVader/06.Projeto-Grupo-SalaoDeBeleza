import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";


export default props =>
  <nav className='navbar'>
    <Link to="/">Início</Link>
    <Link to="/SobreNos">Sobre Nós</Link>
    <Link to="/Servicos">Nossos Serviços</Link>
    <Link to="/Contatos">Contatos</Link>
  </nav>
