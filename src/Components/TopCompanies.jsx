import React from 'react'
import { TopCompanyData } from "../Data/TopCompanyData"
import CardsCarousel from './CardsCarousel';
import style from "styled-components"
// import "../Resources/Mnc"

const TopCompanies = () => {

    return (
        <TopCompany>
            <h1>Top Companies Hiring Now</h1>
            <CardsCarousel CompanyData={TopCompanyData}/>
        </TopCompany>
    )
}
const TopCompany=style.div`
    width:100%;
    h1{
        font-size: 27px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        color: #1B2437;
    }

    @media only screen and (max-width: 600px) {
        h1{
            font-size:24px;
        }
    }

    @media only screen and (max-width: 400px) {
        h1{
            font-size:20px;
        }
    }
`;

export default TopCompanies