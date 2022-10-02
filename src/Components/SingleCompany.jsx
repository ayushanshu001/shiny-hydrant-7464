
import axios from 'axios';
import { Checkmark } from 'react-checkmark'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "../Styles/SingleCompany.css";
import { AiFillStar } from 'react-icons/ai';
import {useParams} from 'react-router-dom'

const SingleCompany = () => {
    const [data, setData] = useState({})
    console.log(data)
    const params=useParams()
    const getCompany = (title) => {
        return axios
            .get(`https://chalo-api.herokuapp.com/${title}`)
            .then(res => { setData(res.data) })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getCompany(params.id);
    }, [params.id])
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
                                    {data.section ? data.section.map((ele, index) => (
                                        <button key={index}>{ele}</button>
                                    )) : ""}
                                </div>
                            </div>
                        </div>
                        {/* about section start  */}
                        <div className="singleCompanyAbout">
                            <div className="introSelection">
                                <div>Overview</div>
                                <div>Why Join Us</div>
                                <div>Jobs</div>
                            </div>
                            <hr width="100%"></hr>
                        </div>
                        <div className="singleCompanyMid">
                            <div className="leftSection">
                                <div className="singleAbout">
                                    <p>{data.about ? data.about.heading : "About Us"}</p>
                                    <div className="singleAboutInner">
                                        <div className="aboutImage">
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pUpk63YaJbM" title="We Engineer Modern Businesses to Improve Everyday Life | Cognizant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <p>{data.about ? data.about.description : ""}</p>
                                    </div>
                                </div>
                                <div className="singleDiversity">
                                    <p>{data.diversity ? data.diversity.heading : "diversity"}</p>
                                    <div className="singleDiversityInner">
                                        <div className="diversityImage">
                                            <img src={data.diversity ? data.diversity.image : ""} alt="diversity" />
                                        </div>
                                        <p>{data.diversity ? data.diversity.description : "change"}</p>
                                    </div>
                                </div>
                                <div className="singleLeader">
                                    <p>Leaders at {data.name}</p>
                                    <div className="singleLeadersInner">
                                        {data.leaders && data.leaders.map((ele, index) => (
                                            <div className="singleLeaderCard" key={index}>
                                                <div className="singleLeaderImage">
                                                    <img src={ele.image} alt="Leader Image" />
                                                </div>
                                                <p className="singleLeaderName">{ele.employerName}</p>
                                                <p>{ele.roles}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="cognizantBase">
                                    <p>More Information</p>
                                    <div className="cognizantBaseInner">
                                        <div className="cognizantBaseLeft">
                                            <div className="cognizantBaseData">
                                                <p>Type</p>
                                                <p>:  {data.type}</p>
                                            </div>
                                            <div className="cognizantBaseData">
                                                <p>Company Size</p>
                                                <p>:  {data.size}</p>
                                            </div>
                                        </div>
                                        <div className="cognizantBaseRight">
                                            <div className="cognizantBaseData">
                                                <p>Founded</p>
                                                <p>:  {data.foundex}<span style={{ color: "#445578;" }}>{data.year}</span></p>
                                            </div>
                                            <div className="cognizantBaseLink">
                                                <p>Website</p>
                                                <a href={data.website}><p>: {data.website}</p></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightSection">
                                <div className="singleHighlight">
                                    <p>Key Highlight at {data.name}</p>
                                    <div className="singleHighlighInner">
                                        {data.keyhighlight && data.keyhighlight.map((ele, index) => (
                                            <div className="singleHighlightCard">
                                                <div className="highlightImage">
                                                    <img src={ele.image} alt="logo" />
                                                </div>
                                                <div className="highlightInfo">
                                                    <p>{ele.name}</p>
                                                    <p>{ele.feature}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="singleEmployeeSpeaks">
                                    <p>Employee Speaks</p>
                                    <div className="employeeSpeakInner">
                                        {data.employeeSpeak && data.employeeSpeak.map((ele, index) => (
                                            <div className="employeeSpeakCard">
                                                <AiFillStar style={{ color: "orange" }} />
                                                <p>{ele.rating}</p>
                                                <p>{ele.work}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="employeeSpeakBottom">
                                        <div className="employeeSpeakBottomRating">
                                            <AiFillStar style={{ color: "orange" }} />
                                            <p>5.0</p>
                                        </div>
                                        <div className="employeeSpeakBottomIntro">
                                            It was Great Experience Working with {data.name}
                                        </div>
                                        <p>Anonymous, E commerce</p>
                                    </div>
                                    <div className="singleAmbition">
                                        <div className="singleAmbitionLeft">
                                            <div className="singleAmbitionLogo">
                                                <img src={data.ambitionLogo} alt="ambitionLogo" />
                                            </div>
                                            <p>Ambition</p>
                                            <p>View All Review</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="companySocialMedia">
                                    <p>Connect with {data.name}</p>
                                    <div className="companySocialMediaInner">
                                        <div className="companyTwitterLogo">
                                            <a href={data.twitter}>
                                                <img src="https://static.naukimg.com/s/7/109/assets/images/twitter.c81b7cd2.svg" />
                                            </a>
                                        </div>
                                        <div className="companyFbLogo">
                                            <a href={data.fb}>
                                                <img src="https://static.naukimg.com/s/7/109/assets/images/facebook.3c34cbc4.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </SingleCompanyContainer >
    )

  }

export default SingleCompany

const SingleCompanyContainer=styled.div`
padding:0px;
margin:0px;

`;