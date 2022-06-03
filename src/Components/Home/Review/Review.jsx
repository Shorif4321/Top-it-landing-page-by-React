import React from 'react';
import "./Review.css"
import leftarrow from "../../../Images/left arrow.png"
import rightarrow from "../../../Images/right arrow.png"
import reviwImage from "../../../Images/Group18449.png"
import john from "../../../Images/john.png"

const Review = () => {
    return (
        <div className='my-5 py-md-4 review-start'>
            <div className='px-md-5 protfolio-head mb-4'>
                <div className='w-md-50'>
                    <h4 className="latest-head">What Our Customer<br /> Say About Us</h4>
                </div>
                <div>
                    <img className='leftarrow' src={leftarrow} alt="" />
                    <img className='rightarrow' src={rightarrow} alt="" />
                </div>
            </div>

            <div className='d-md-flex align-items-center mt-md-5 px-md-5 all-review'>
                <div className='col-md-8 col-12'>
                    <div className='star-review pe-md-5 '>
                        <p>4.00 <i className="fas fa-star"> </i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i></p>
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
                <div className='col-md-4 col-12'>
                    <img className='review-left-image' src={reviwImage} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Review;