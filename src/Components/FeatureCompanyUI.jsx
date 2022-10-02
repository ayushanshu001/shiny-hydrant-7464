import React from 'react'
import "../Styles/FeaturesCompanyUI.css"
import { AiFillStar } from 'react-icons/ai';
import {Link} from 'react-router-dom'
const FeatureCompanyUI = ({ companies }) => {
    // console.log(companies)
    return (
        <div>
            <div className="companiesMainContainer">
                <p className="result">Showing {companies.length} companies</p>
                <div className="companiesContainer">
                    {companies.map((ele, index) => (
                        <div className="FeatureSingleCard" key={index}>
                            <div className="featureImage"><img src={ele.logoImage} alt="logo" /></div>
                            <div className="featureInfo">
                                <p className="featureCompanyName">{ele.compName}</p>
                                <div className="featureRatingContainer">
                                    <AiFillStar style={{ color: "orange" }} />
                                    <p className="featureRating">{ele.rating}</p>
                                    <p className="featureReviews">{ele.review}</p>
                                </div>
                            </div>
                            <div className="featureDescription">
                                <p >{ele.description}</p>
                            </div>
                            <button>View Jobs</button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FeatureCompanyUI