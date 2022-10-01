import React from 'react'
import DreamJob from '../Components/DreamJob'
import Footerr from '../Components/Footerr'
import Gallery from '../Components/DiscoverJob'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import '../Styles/Home.css'


const Home = () => {
  return (
    <div>
        <div className='homedivAyush'>
        <DreamJob/>
        </div>
        <div className='topAyush'>
        <TopCompanies/>
        </div>
        <FeaturedCompanies/>
        <Roles/>
        <Footerr/>
    </div>
  )
}

export default Home