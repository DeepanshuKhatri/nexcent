import Achievements from '@/components/Achievements'
import Calender from '@/components/Calender'
import Clients from '@/components/Clients'
import Community from '@/components/Community'
import Customers from '@/components/Customers'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Unlock from '@/components/Unlock'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Clients/>
      <Community/>
      <Unlock/>
      <Achievements/>
      <Calender/>
      <Customers/>
    </div>
  )
}

export default page