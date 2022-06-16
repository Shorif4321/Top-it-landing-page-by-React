import React from 'react';
import "./Review.css"
import leftarrow from "../../../Images/left arrow.png"
import rightarrow from "../../../Images/111.png"
import reviwImage from "../../../Images/Group18449.png"
import john from "../../../Images/john.png"

const Review = () => {
    return (
        <div className=' my-5 py-md-4 review-start'>
            <div className='container protfolio-head mb-4'>
                <div className='w-md-50'>
                    <h4 className="latest-head">What Our Customer<br /> Say About Us</h4>
                </div>
                <div>
                    <img className='leftarrow' src={leftarrow} alt="" />
                    <img className='rightarrow' src={rightarrow} alt="" />
                </div>
            </div>

            <div className='container mt-md-5 pb-5 all-review'>
                <div className=' m-auto d-lg-flex align-items-center'>
                    <div className='col-md-12 col-lg-8 col-12'>
                        <div className='star-review pe-md-5 '>
                            <p>4.00 <i className=" icon-custom fas fa-star"> </i>
                                <i className=" icon-custom fas fa-star"></i>
                                <i className=" icon-custom fas fa-star"> </i>
                                <i className=" icon-custom fas fa-star"></i>
                                <i className=" icon-custom fas fa-star"></i></p>
                            <h4 className='text-review'>
                                ”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum st turpis.“
                            </h4>
                            <div className='user pt-3'>
                                <div>
                                    <img src={john} alt="" />
                                </div>
                                <div>
                                    <h6>Jane Cooper</h6>
                                    <p>User Interface Design</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className='col-md-12 col-lg-4 col-12'>
                        <img className='review-left-image' src={reviwImage} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;