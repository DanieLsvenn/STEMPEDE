import React from 'react'
import Hero from '../components/Hero'
import LabSpecial from '../components/LabSpecial'
import SponsorShow from '../components/SponsorShow'
import BestSeller from '../components/BestSeller'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <div>
        <Hero />
        <LabSpecial />
        <HowItWorks />
        <BestSeller />
        <SponsorShow />
    </div>
  )
}

export default Home