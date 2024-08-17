import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MissionAndHistory from './components/MissionAndHistory'
import ServiceCards from './components/ServiceCards'
import Packages from './components/Packages'
import Corporate from './Corporate'
import Cultural from './Cultural'
import Wedding from './Wedding'
import Milestone from './Milestone'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MissionAndHistory />
      <ServiceCards />
      <Packages />
      <Corporate />
      <Cultural/>
      <Wedding />
      <Milestone/>
    </div>
  )
}

export default LandingPage
