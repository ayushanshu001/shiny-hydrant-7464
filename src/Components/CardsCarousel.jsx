import React from 'react'
import "../Styles/CardsCarousel.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardsCarousel = ({CompanyData}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <Carousel responsive={responsive} className='carouselTop'>
            {CompanyData.map((ele, index) => (
                <div className='company' key={index}>
                    <div className="singleCard">
                        <p className="companyName">{ele.name}</p>
                        <p className="description">{ele.description}</p>
                        <div className="images">
                            {ele.images.map((image, index) => (
                                <div key={index} className='imageContainer'><img src={image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default CardsCarousel