import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from './FeaturedCompaniesPage'

const Home = () => {
  return (
    <div>
        <TopCompanies/>
        <FeaturedCompanies/>
        <FeaturedCompaniesPage/>
        <Roles/>
    </div>
  )
}

export default Home