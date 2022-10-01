import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from './FeaturedCompaniesPage'
import DreamJob from '../Components/DreamJob'
import '../Styles/Home.css'
import SingleCompanyPage from './SingleCompanyPage'



const Home = () => {
        return (
                <div>
                        <div className='homedivAyush'>
                                <DreamJob />
                        </div>
                        <div className='topAyush'>
                                <TopCompanies />
                        </div>
                        <FeaturedCompanies />
                        <FeaturedCompaniesPage />
                        <SingleCompanyPage/>
                        <Roles />

                </div >
        )
}

export default Home