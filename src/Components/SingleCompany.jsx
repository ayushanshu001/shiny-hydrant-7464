import axios from 'axios';
import { Checkmark } from 'react-checkmark'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "../Styles/SingleCompany.css";
import {useParams} from 'react-router-dom'

import { AiFillStar } from 'react-icons/ai';

const SingleCompany = () => {

    const [data, setData] = useState({})
    const params=useParams()
    console.log(data)
    const getCompany = (title) => {
        return axios.get(`https://chalo-api.herokuapp.com/${title}`).then(res => { 
                    setData(res.data)
                
             })
    }

    
    // const handleGetData2=async()=>{
    //     const data=await getCompany(params.id)
    //     setData(data)
    // }
    useEffect(() => {
       getCompany(params.id)
    }, [params.id])
    console.log(params)

    return (
        <SingleCompanyContainer>
            {data &&
                <div className="singleMainContainer">
                    <div className="bannerContainer">
                        <img src={data.banner} className="banner" />
                        <div className="manage">
                            <p>Managed by employer</p>
                            <Checkmark size="small"></Checkmark>
                        </div>
                    </div>
                    <div className="singleContent">
                        <div className="singleCompanyIntro">
                            <div className="singleCompanyLogo">
                                <img src={data.image} alt="companyLogo"></img>
                            </div>
                            <div className="singleCompanyIntroRight">
                                <div className="singleCompanyHead">
                                    <p className="singleCompanyTitle">{data.name}</p>
                                    <p className="singleCompanyRating">{data.rating}</p>
                                    <AiFillStar style={{ color: "orange" }} />
                                    <p className="singleCompanyReview">{data.review}</p>
                                </div>
                                <div className="singleCompanySubhead">
                                    <p className="singleCompanyTagline">{data.subHead}</p>
                                    <div className="singleCompanyFollow">
                                        <p>{"116.4k followers" || data.followers}</p>
                                        <a href=""><button>+Follow</button></a>
                                    </div>
                                </div>
                                <div className="singleCompanySection">
                                    {data.section?data.section.map((ele,index) => (
                                        <button key={index}>{ele}</button>
                                    )):""}
                                </div>
                            </div>
                        </div>
                        {/* about section start  */}
                        <div className="introSelection">
                            <div>Overview</div>
                            <div>Why Join Us</div>
                            <div>Jobs</div>
                        </div>
                    </div>
                </div>
            }
        </SingleCompanyContainer>
    )
}
const SingleCompanyContainer = styled.div`  
padding:0px;
margin:0px;
`;
export default SingleCompany