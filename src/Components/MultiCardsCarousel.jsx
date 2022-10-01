import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import "../Styles/MultiCardsCarousel.css";


import { AiFillStar } from 'react-icons/ai';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import "../Styles/MultiCardsCarousel.css";
import {Link} from 'react-router-dom'

const MultiCardsCarousel = ({ FeaturedCompany }) => {
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            // pagination={{
            //     clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {FeaturedCompany.map((ele, index) => (
                <Link to={`/singlecompany/${ele.title}`}>
                <SwiperSlide key={index}>
                    <div className="FeatureSingleCard">
                        <div className="featureImage"><img src={ele.image} alt="logo" /></div>
                        <div className="featureInfo">
                            <p className="featureCompanyName">{ele.title}</p>
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
                </SwiperSlide></Link>
            ))}
        </Swiper>
    )
}

export default MultiCardsCarousel