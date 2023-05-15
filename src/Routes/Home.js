import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import AboutComponent from '../Components/AboutComponent/AboutComponent'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <AboutComponent/>

        <Footer/>
    </div>
  )
}

export default Home