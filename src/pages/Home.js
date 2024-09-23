import React from 'react'
import Hero from '../components/Hero'
import LabSpecial from '../components/LabSpecial'
import SponsorShow from '../components/SponsorShow'
import BestSeller from '../components/BestSeller'
import HowItWorks from '../components/HowItWorks'
import Introduction from '../components/Introduction'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
        <Hero />
        <LabSpecial />
        <HowItWorks />
        <BestSeller />
        <Introduction />
        <Reviews />
        <SponsorShow />
    </div>
  )
}

export default Home