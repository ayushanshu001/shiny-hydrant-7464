import React from 'react'
import { FeaturedCompanyData } from "../Data/FeaturedCompanyData"
import MultiCardsCarousel from './MultiCardsCarousel';
import style from "styled-components"
const FeaturedCompanies = () => {
    return (
        <FeaturedCompany>
            <h1>Featured companies actively hiring</h1>
            <MultiCardsCarousel FeaturedCompany={FeaturedCompanyData}/>
        </FeaturedCompany>
    );
}
const FeaturedCompany=style.div`
    margin-top:50px;
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
export default FeaturedCompanies