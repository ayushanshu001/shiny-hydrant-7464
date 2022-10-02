import React from 'react'
import { FeaturedCompanyData } from "../Data/FeaturedCompanyData"
import MultiCardsCarousel from './MultiCardsCarousel';
import style from "styled-components"
import {Link} from 'react-router-dom'
const FeaturedCompanies = () => {
    return (
        <FeaturedCompany>
            <h1>Featured companies actively hiring</h1>
            <MultiCardsCarousel FeaturedCompany={FeaturedCompanyData} />
            <Link  to={`/feature`}><button className="viewAll">View all companies</button></Link>
        </FeaturedCompany>
    );
}
const FeaturedCompany = style.div`
    margin-top:50px;
    width:100%;
    h1{
        font-size: 27px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        color: #1B2437;
    }
    .viewAll{
        margin-top:25px;
        border: 1px solid #88ADFF;
        border-radius: 100px;
        font-size: 17px;
        font-weight: 600;
        padding: 12px 20px;
        color: #457EFF;
        line-height: 24px;
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