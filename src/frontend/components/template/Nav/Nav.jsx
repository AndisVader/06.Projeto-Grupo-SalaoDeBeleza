import React from "react";
import './Nav.css'

function Nav(){
  return(
    <nav className='navBar'>
      <a href="./assets/pages/HomePages/">Início</a>
      <a href="./assets/pages/AboutUsPages/">Sobre Nós</a>
      <a href="./assets/pages/ServicePages/">Nossos Serviços</a>
      <a href="">Agende-se</a>
      <a href="./assets/pages/ContactPages/">Contatos</a>
    </nav>
  )
}

export default Nav