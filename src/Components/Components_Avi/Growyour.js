import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
import Styles from "../Components_Avi/styles_Avi/Growyour.module.css";
import { Navigation } from "swiper";
export default function Growyour() {
  return (
    <>
      <div className={Styles.GrowBox}>
        <div className={Styles.GrowFirst}>
          <h2>
            Grow your career <br></br>through learning
          </h2>
          <img
            src="https://static.naukimg.com/s/0/0/i/learn-icon.svg"
            alt="photo"
            style={{height:"150px",width:"150px"}}
          />
        </div>
        <div className={Styles.Scroll_Avi}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={Styles.swiper_Avi}
          >
            <SwiperSlide className="SwiperSlide_Avi">
              <div style={{ display: "flex", marginTop: "80px",marginRight:"50px" }}>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "60px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Data Science</p>
                  <h3>Artificial Intelligence</h3>
                  <p style={{ color: "gray" }}>
                    Learn in demand AI skills like Deep learning, NLP, Computer
                    vision and more for career growth across different roles.
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    600 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    28 Providers
                  </button>
                </div>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "30px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Cloud Technologies</p>
                  <h3>AWS</h3>
                  <p style={{ color: "gray" }}>
                    Get certified for high demand cloud computing skills for
                    Cloud Practitioner, Architect, Developer, and Operations
                    roles.
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    800 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    16 Providers
                  </button>
                </div>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "30px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Programming</p>
                  <h3>Data Structure & Algorithms</h3>
                  <p style={{ color: "gray" }}>
                    Master DS and Algorithms for entry level engineering roles
                    in product companies and for competitive programming.
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    800 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    13 Providers
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SwiperSlide_Avi">
              <div style={{ display: "flex", marginTop: "80px",marginLeft:"50px" }}>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "30px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Management</p>
                  <h3>Digital Marketing</h3>
                  <p style={{ color: "gray" }}>
                    A fast growing field with opportunities in PPC, SEO, Email
                    marketing, Marketing analytics, Content marketing and more.
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    800 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    13 Providers
                  </button>
                </div>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "30px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Management</p>
                  <h3>Strategy & Leadership</h3>
                  <p style={{ color: "gray" }}>
                    Learn to lead and thrive in a world of increasing
                    uncertainty and volatility - get certified from top
                    universities.
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    800 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    26 Providers
                  </button>
                </div>
                <div
                  style={{
                    borderRadius: "20px 0px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    marginLeft: "30px",
                    width: "400px",
                    height: "300px",
                  }}
                >
                  <p style={{ color: "gray" }}>Management</p>
                  <h3>Business analytics</h3>
                  <p style={{ color: "gray" }}>
                    Improve your business decision making with dashboards,
                    real-time analytics, scenario analysis, and reporting skills
                  </p>
                  <button
                    style={{ borderRadius: "10px", backgroundColor: "white" }}
                  >
                    500 Course
                  </button>
                  <button
                    style={{marginLeft:"10px", borderRadius: "10px", backgroundColor: "white" }}
                  >
                    42 Providers
                  </button>
                </div>
              </div>
            </SwiperSlide>
            {/* 2nd */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
