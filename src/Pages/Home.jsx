import React from 'react'
import Gallery from '../Components/DiscoverJob'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'

const Home = () => {
  return (
    <div>
        <TopCompanies/>
        <FeaturedCompanies/>
        <Roles/>
        
    </div>
  )
}

export default Home