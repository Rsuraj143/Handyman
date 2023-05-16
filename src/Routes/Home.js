import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import AboutHighlight from '../Components/AboutComponent/AboutHighlight'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import Highlight from '../Components/Highlight/Highlight'
import PricingcardComponent from '../Components/PricingCard/PricingcardComponent'
import FAQComponenent from '../Components/FAQComponent/FAQComponenent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <AboutComponent/>
        <AboutHighlight/>
        <ServiceComponent/>
        <Highlight/>
        <PricingcardComponent/>
        <FAQComponenent/>
        <TeamComponent/>

        <Footer/>
    </div>
  )
}

export default Home