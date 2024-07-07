import Achievements from '@/components/Achievements'
import Calender from '@/components/Calender'
import Clients from '@/components/Clients'
import Community from '@/components/Community'
import Customers from '@/components/Customers'
import Footer from '@/components/Footer'
import GetDemo from '@/components/GetDemo'
import Hero from '@/components/Hero'
import Unlock from '@/components/Unlock'
import Updates from '@/components/Updates'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <Updates/>
      <GetDemo/>
      <Footer/>   
    </div>
  )
}

export default HomePage