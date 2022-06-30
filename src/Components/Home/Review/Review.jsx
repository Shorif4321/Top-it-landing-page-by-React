import React from 'react';
import "./Review.css"
import leftarrow from "../../../Images/left arrow.png"
import rightarrow from "../../../Images/111.png"
import reviwImage from "../../../Images/Group18449.png"
import john from "../../../Images/client.jpg"

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
                            <p>5.00 <i className=" icon-custom fas fa-star"> </i>
                                <i className=" icon-custom fas fa-star"></i>
                                <i className=" icon-custom fas fa-star"> </i>
                                <i className=" icon-custom fas fa-star"></i>
                                <i className=" icon-custom fas fa-star"></i></p>
                            <h4 className='text-review'>
                                ”Great service,delivery,price, what more can i say Top it Ltd“
                            </h4>
                            <div className='user pt-3'>
                                <div>
                                    <img src={john} alt="" />
                                </div>
                                <div>
                                    <h6>ROBERT JOHN</h6>
                                    <p>Manager, CVS Health</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className='col-md-12 col-lg-4 col-12'>
                        <img className='review-left-image img-fluid rounded' src={john} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;