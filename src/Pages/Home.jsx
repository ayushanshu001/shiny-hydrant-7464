import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from './FeaturedCompaniesPage'
import SingleCompanyPage from './SingleCompanyPage'

const Home = () => {
  return (
    <div>
        <TopCompanies/>
        <FeaturedCompanies/>
        <FeaturedCompaniesPage/>
        <Roles/>
        <SingleCompanyPage/>
    </div>
  )
}

export default Home