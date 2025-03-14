/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from '../components/HomePage'
import ServicosMenu from '../components/ServicosMenu'
import TopBarbers from '../components/TopBarbers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <HomePage />
        <ServicosMenu />
        <TopBarbers />
        <Banner />
    </div>
  )
}

export default Home