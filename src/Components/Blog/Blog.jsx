import React from 'react';
import "./Blog.css"
import right from "../../Images/rightServiceArrow.png"
import blog1 from "../../Images/ecommerce.jpg"
import blog2 from "../../Images/blog2.png"
import blog3 from "../../Images/blog3.png"
import blog4 from "../../Images/blog4.png"
import left1 from "../../Images/left1.png"
import left2 from "../../Images/left2.png"
import left3 from "../../Images/left3.png"
import f from "../../Images/f.png"
import t from "../../Images/t.png"
import i from "../../Images/i.png"
import youtube from "../../Images/youtube.png"
import { Link } from 'react-router-dom';
import Aside from '../Shared/Aside/Aside';

const Blog = () => {
    return (
        <>
            <section id='blog' className='container'>
                <div className='contact-hero container col-11 col-md-8 col-lg-5 m-auto my-md-5'>
                    <h2>Our Blog News</h2>
                    <p>
                        we are trying to help people by our blog.
                    </p>

                </div>
                {/* <div className='container pb-5'>
                      <p className='navigation text-left'>Home <img className='mx-3' src={right} alt="" /> Blog</p> 
                </div> */}
            </section>

            {/* ======= blog Main start ======== */}
            <section className='container d-lg-flex'>
                <div className="col-12 col-md-12 col-lg-7">
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4' >
                        <div className='' data-aos="fade-up"
                            data-aos-duration="3000" >
                            <img className='img-fluid rounded' src={blog1} alt="" />
                        </div>
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small'>
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1500">eCommerce in Bangladesh</h2>
                        <div className='read-box'>
                            <p data-aos="fade-up"
                                data-aos-duration="1700">Describes how widely e-Commerce is used, sectors that sell through e-commerce, and products/services in each sector sold versus brick-and-mortar retail. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
                    {/* =======blog Main 1 ======== */}
                    {/*  <div className='blog py-4'>
                        <div data-aos="fade-up"
                            data-aos-duration="3000">
                            <img className='img-fluid' src={blog1} alt="" />
                        </div>
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small' >
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1500">Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box' data-aos="fade-up"
                            data-aos-duration="1700">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div> */}
                    {/* =======blog Main 1 ======== */}
                    {/* <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" data-aos="fade-up"
                            data-aos-duration="3000" />
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small'>
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1500">Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p data-aos="fade-up"
                                data-aos-duration="1700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div> */}
                    {/* =======blog Main 1 ======== */}
                    {/* <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" data-aos="fade-up"
                            data-aos-duration="3000" />
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small'>
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1500">Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p data-aos="fade-up"
                                data-aos-duration="1700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div> */}
                    {/* =======blog Main 1 ======== */}
                    {/*  <div className='blog py-4 '>
                        <div >
                            <img className='img-fluid' src={blog1} alt="" data-aos="fade-up"
                                data-aos-duration="3000" />
                        </div>
                        <div className='blog-author' data-aos="fade-up"
                            data-aos-duration="1200">
                            <div className='blog-small'>
                                <i className="font-awesome fas fa-folder-open"></i>
                                <h5>Ux Design</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-clock"></i>
                                <h5>May28,2022</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-user-alt"></i>
                                <h5>Admin</h5>
                            </div>
                            <div className='blog-small ps-4'>
                                <i className="font-awesome fas fa-comment-alt"></i>
                                <h5>18</h5>
                            </div>
                        </div>

                        <h2 data-aos="fade-up"
                            data-aos-duration="1500">Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p data-aos="fade-up"
                                data-aos-duration="1700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div> */}
                </div>

                {/* =======left star ======== */}
                <div className="col-12 col-md-12 col-lg-5 py-4 ms-lg-4">
                    <Aside></Aside>


                </div>
            </section>

        </>
    );
};

export default Blog;