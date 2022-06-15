import React from 'react';
import "./SliderHome.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../../../Images/bannerUnder.png"

const SliderHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<div className='container'>

        <Slider {...settings}>
            <div>
                <img className='img-fluid' src={sliderImage} alt="" />
            </div>
            <div>
            <img className='img-fluid' src={sliderImage} alt="" />
            </div>
            <div>
            <img className='img-fluid' src={sliderImage} alt="" />
            </div>
            <div>
            <img className='img-fluid' src={sliderImage} alt="" />
            </div>
        </Slider>
    </div>


    );
};

export default SliderHome;