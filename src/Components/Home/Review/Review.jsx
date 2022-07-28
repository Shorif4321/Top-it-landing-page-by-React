import React, { useEffect, useState } from 'react';
import "./Review.css"
import leftarrow from "../../../Images/left arrow.png"
import rightarrow from "../../../Images/111.png"
import Slider from 'react-slick';

const Review = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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


    const [sliders, setSliders] = useState([])
    useEffect(() => {
        fetch('./Ratting.JSON')
            .then(res => res.json())
            .then(data => setSliders(data))
        console.log(sliders);
    }, [])

    return (
        <div className='portfolio-bg  py-5 review-start'>
            <div className='container protfolio-head mb-4'>
                <div className='w-md-50'>
                    <h4 className="latest-head">What Our Customer<br /> Say About Us</h4>
                </div>
                <div>
                    <img className='leftarrow' src={leftarrow} alt="" />
                    <img className='rightarrow' src={rightarrow} alt="" />
                </div>
            </div>

            <div className='slider-div container'>
                <Slider {...settings}>
                    {
                        sliders?.map(slider => <div className='portfolio' key={slider.id}>

                            <div className='portfolio-hove mx-md-3 py-2 p-md-3 star-review '>
                                <div className='user'>
                                    <div>
                                        <img src={slider.image} alt="" />
                                    </div>
                                    <div>
                                        <h6 className=''>Mr:  {slider?.name}</h6>


                                    </div>
                                </div>

                                <p>  <i className=" icon-custom fas fa-star"> </i>
                                    <i className=" icon-custom fas fa-star"></i>
                                    <i className=" icon-custom fas fa-star"> </i>
                                    <i className=" icon-custom fas fa-star"></i>
                                    <i className=" icon-custom fas fa-star"></i></p>
                                <h4 className='text-review'>
                                    {slider.des?.slice(0, 70)}
                                </h4>

                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Review;