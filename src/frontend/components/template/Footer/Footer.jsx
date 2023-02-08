import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container-flex">
        <div className="flex-itens">
          <h2>Quem somos?</h2>
          <p></p>
        </div>
        <div className="flex-itens">
          <h2>Suporte</h2>
          <p>SAC</p>
          <p>Portal do Cliente</p>
          <h3>Nossos contatos</h3>
          <p>E-mail: FofinhasHair@outlock.com</p>
          <p>Tel: (21)4565-8745</p>
        </div>
        <div className="flex-itens">
          <h2>Nossas Lojas</h2>
        </div>
      </div>
      <div className="flex-copyright">
        <p>© Desenvolvido por programadores cariocas</p>
      </div>
    </footer>
  )
}