import React, { Component } from 'react'
import Main from '../../components/template/Main/Main'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/Cabelo'
const initialState = {
  cabelo: {id: '', nome: '', valor: '', tempo: '', img: ''},
  list: []
}

export default class Service extends Component {
  
  state = {...initialState}
  
  clear(){
    this.setState({user: initialState})
  }

  save(){
    const user = this.state.cabelo
  }
  
  render(){
    return(
      <Main>
       
      </Main>
    )
  }
}