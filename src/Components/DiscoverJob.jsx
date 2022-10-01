import React from 'react';
import Carousel from 'react-grid-carousel';
import "../Styles/DiscoverJob.css";
import { PopularRolesData } from '../Data/PopularRolesData';
import { HiOutlineChevronRight } from "react-icons/hi"

const DiscoverJob = () => {

  PopularRolesData.map((items) => {
    // console.log(items.ele)
  })

  // PopularRolesData.map((items) => {
  //   console.log(items.ele)
  // })

  return (
    <div className="discoverMainContainer">
      <Carousel cols={1} rows={1}>
        {PopularRolesData.map((items, index) => (
          <Carousel.Item key={index} >
            <div className="discoverCards">
              {items.ele.map((element, index) => (
                <div className="discoverSingleCard" key={index}>
                  <div className="discoverRoles">
                    <p className="discoverRolesName">{element.name}</p>
                    <div>
                      <p className="discoverRolesJob">{element.jobs}</p>
                      <p><HiOutlineChevronRight /></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))
        }
      </Carousel>
    </div>
  )
}
export default DiscoverJob