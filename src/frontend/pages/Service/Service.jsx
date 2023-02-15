import React, { Component } from 'react'
import Main from '../../components/template/Main/Main'
import CabeloAPI from '../../components/others/API/CabeloAPI'
import DepilacaoAPI from '../../components/others/API/DepilacaoAPI'
import ManicureAPI from '../../components/others/API/ManicureAPI'

export default function Service() {
  return (
    <Main>
      <h1>Conheça nossos Serviços!</h1>
      <CabeloAPI />
      <DepilacaoAPI />
      <ManicureAPI />
    </Main>
  )

}