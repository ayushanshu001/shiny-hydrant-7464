import React from 'react'
import Gallery from '../Components/DiscoverJob'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import TopCompanies from '../Components/TopCompanies'

const Home = () => {
  return (
    <div>
        <TopCompanies/>
        <FeaturedCompanies/>
        <Gallery/>
    </div>
  )
}

export default Home