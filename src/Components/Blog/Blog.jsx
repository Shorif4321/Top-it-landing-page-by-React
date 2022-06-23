import React from 'react';
import "./Blog.css"
import right from "../../Images/rightServiceArrow.png"
import blog1 from "../../Images/blog1.png"
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
            <section className='container'>
                <div className='contact-hero container col-11 col-md-8 col-lg-5 m-auto my-md-5'>
                    <h2>Our Blog News</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis varius ut in.
                    </p>

                </div>
                {/* <div className='container pb-5'>
                      <p className='navigation text-left'>Home <img className='mx-3' src={right} alt="" /> Blog</p> 
                </div> */}
            </section>

            {/* =======blog Main start ======== */}
            <section className='container d-lg-flex'>
                <div className="col-12 col-md-12 col-lg-7">
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className='blog-author'>
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

                        <h2>Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className='blog-author'>
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

                        <h2>Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className='blog-author'>
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

                        <h2>Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className='blog-author'>
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

                        <h2>Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4 '>
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className='blog-author'>
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

                        <h2>Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est sed suspendisse adipiscing porttitor ornare faucibus ultrices tempor. Feugiat posuere lorem sed quam. Fermentum, nunc pellentesque imperdiet pharetra. <Link className='read-more' to="/blog-full"> Read More ...</Link></p>
                        </div>
                    </div>
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