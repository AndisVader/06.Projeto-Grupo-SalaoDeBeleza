import React from "react";
import './style.css'

function Footer() {
  return (
    <footer>
      <div className="container-flex">
        <div className="flex-itens">
          <h2>Quem somos?</h2>
        </div>
        <div className="flex-itens">
          <h2>Suporte</h2>
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

export default Footer