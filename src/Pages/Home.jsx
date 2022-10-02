import React from 'react'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import Footerr from '../Components/Footerr'
import DreamJob from '../Components/DreamJob'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Accelerateyourjob from '../Components/Components_Avi/Accelerateyourjob'
import Growyour from '../Components/Components_Avi/Growyour'
import Standout from '../Components/Components_Avi/Standout'



const Home = () => {

  return (

                <div>
                        <div className='homedivAyush'>
                              <DreamJob />
                        </div>
                        <div className='topAyush'>
                              <TopCompanies />
                        </div>
                        <FeaturedCompanies/>
                        <Accelerateyourjob/>
                        <Growyour/>
                        <Standout/>
                        <Roles />
                        
                        <Footerr/>

                </div >
        )

}

export default Home