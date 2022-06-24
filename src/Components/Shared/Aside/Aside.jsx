import React from 'react';
import "./Aside.css"
import left1 from "../../../Images/left1.png"
import left2 from "../../../Images/left2.png"
import left3 from "../../../Images/left3.png"
import f from "../../../Images/f.png"
import t from "../../../Images/t.png"
import i from "../../../Images/i.png"
import youtube from "../../../Images/youtube.png"
import { Link } from 'react-router-dom';

const Aside = () => {
    return (
        <div>
            <div className='left-search mb-4'>
                <div className=' py-5 px-4'>
                    <div class="" role="search">
                        <h4 className='left-search' data-aos="fade-up"
                            data-aos-duration="1200">Search</h4>
                        <input class="form-control" type="search" placeholder="Search your keyword..." aria-label="Search" data-aos="fade-up"
                            data-aos-duration="1200" />
                    </div>
                </div>
            </div>
            <div className='left-search mb-4'>
                <div className=' py-5 px-4'>
                    <div class="" role="search">
                        <h4 className='left-search' data-aos="fade-up"
                            data-aos-duration="1200">Recent Post</h4>
                        <div className=' d-lg-flex justify-content-between align-items-center left-post ' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='col-12 col-md-12 col-lg-3 me-3' >
                                <img className='img-fluid' src={left1} alt="" />
                            </div>
                            <div className='col-12  col-md-12 col-lg-9'>
                                <h6>UX Design</h6>
                                <h5>When the musics over turn
                                    off the light</h5>
                                <p>May 28, 2022</p>
                            </div>
                        </div>
                        <div className='my-3 d-lg-flex justify-content-between align-items-center left-post ' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='col-12 col-md-12 col-lg-3 me-3'>
                                <img className='img-fluid' src={left2} alt="" />
                            </div>
                            <div className='col-12  col-md-12 col-lg-9'>
                                <h6>UX Design</h6>
                                <h5>When the musics over turn
                                    off the light</h5>
                                <p>May 28, 2022</p>
                            </div>
                        </div>
                        <div className=' d-lg-flex justify-content-between align-items-center left-post ' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='col-12 col-md-12 col-lg-3 me-3'>
                                <img className='img-fluid' src={left3} alt="" />
                            </div>
                            <div className='col-12  col-md-12 col-lg-9'>
                                <h6>UX Design</h6>
                                <h5>When the musics over turn
                                    off the light</h5>
                                <p>May 28, 2022</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='left-search mb-4'>
                <div className=' py-5 px-4'>
                    <div class="" role="search">
                        <h4 className='left-search' data-aos="fade-up"
                            data-aos-duration="1200">Categories</h4>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            Branding & Identity (20)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            SAAS Development (18)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            Graphic Deisgn (50)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            Web Design (23)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            Affiliate Marketing (33)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            SEO & Marketing (14)
                        </h3>
                        <h3 className='catetegory-text' data-aos="fade-up"
                            data-aos-duration="1200">
                            Web Development  (10)
                        </h3>
                    </div>
                </div>
            </div>
            {/* <div className='left-search mb-4'>
                <div className=' py-5 px-4'>
                    <div class="" role="search">
                        <h4 className='left-search'>Tag</h4>
                        <button className='tag-button'>Website</button>
                        <button className='tag-button'>Development</button>
                        <button className='tag-button'>Desing</button>
                        <button className='tag-button'>Marketing</button>
                        <button className='tag-button'>Application</button>
                        <button className='tag-button'>Application</button>
                    </div>
                </div>
            </div> */}
            {/* ============ follow========== */}
            <div className='left-search mb-4' >
                <div className=' py-5 px-4'>
                    <div class="" role="search" data-aos="fade-up"
                        data-aos-duration="1200">
                        <h4 className='left-search'>Follow</h4>
                        <Link to="/" target="_blank" className='follow'><img src={f} alt="" /></Link>
                        <Link to="/" target="_blank" className='follow'><img src={t} alt="" /></Link>
                        <Link to="/" target="_blank" className='follow'><img src={i} alt="" /></Link>
                        <Link to="/" target="_blank" className='follow'><img src={youtube} alt="" /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aside;