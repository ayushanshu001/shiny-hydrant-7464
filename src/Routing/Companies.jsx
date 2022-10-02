import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Footerr from '../Components/Footerr'
import SingleCompany from '../Components/SingleCompany'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from '../Pages/FeaturedCompaniesPage'
import SingleCompanyPage from '../Pages/SingleCompanyPage'

const Companies = () => {
  return (
    <div>
        <TopCompanies/>
        <FeaturedCompanies/>
        <FeaturedCompaniesPage/>
    </div>
  )
}

export default Companies