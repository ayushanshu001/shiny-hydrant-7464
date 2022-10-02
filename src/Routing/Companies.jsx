import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import SingleCompany from '../Components/SingleCompany'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from '../Pages/FeaturedCompaniesPage'
import SingleCompanyPage from '../Pages/SingleCompanyPage'

const Companies = () => {
  return (
    <div>
        <FeaturedCompanies/>
        <FeaturedCompaniesPage/>
    </div>
  )
}

export default Companies