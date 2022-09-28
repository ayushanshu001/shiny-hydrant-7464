import React from 'react'
import { TopCompanyData } from "../Data/TopCompanyData"
import CardsCarousel from './CardsCarousel';
// import "../Resources/Mnc"

const TopCompanies = () => {

    return (
        <div>
            <h1>Top Companies Hiring Now</h1>
            <CardsCarousel CompanyData={TopCompanyData}/>
        </div>
    )
}

export default TopCompanies