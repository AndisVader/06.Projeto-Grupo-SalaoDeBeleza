import React from 'react'
import Main from '../../components/template/Main/Main'
import Banner from '../../assets/img/BannerFundo.jpg'
import './Home.css'

export default props =>
  <Main>
    <section className='banner'>
      <img src={Banner} alt="banner" />
    </section>
  </Main>
  