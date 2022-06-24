import React from 'react';
import './BlogFull.css'
import right from "../../Images/rightServiceArrow.png"
import blog1 from "../../Images/blog1.png"
import john from "../../Images/jane.png"
import comment from "../../Images/comment.png"
import comment2 from "../../Images/comment2.png"
import comment3 from "../../Images/comment3.png"
import f from "../../Images/f.png"
import t from "../../Images/t.png"
import i from "../../Images/i.png"
import youtube from "../../Images/youtube.png"
import red from "../../Images/redarrow.png"
import { Link } from 'react-router-dom';
import Aside from '../Shared/Aside/Aside';

const BlogFull = () => {
    return (
        <>
            <section className='container'>
                <div className='contact-hero container col-11 col-md-8 col-lg-5 m-auto my-md-5'>
                    <h2>Our Blog News</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis varius ut in.
                    </p>

                </div>
                {/*  <div className='container pb-5'>
                      <p className='navigation text-left'>Home <img className='mx-3' src={right} alt="" /> Blog</p>
                </div> */}
            </section>

            {/* ======= blog Main start ======== */}
            <section className='container d-lg-flex'>
                <div className="col-12 col-md-12 col-lg-7">
                    {/* =======blog Main 1 ======== */}
                    <div className='blog py-4'>
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
                            data-aos-duration="1000">Agency vs Freelancer for Your Digital Products</h2>
                        <div className='read-box'>
                            <p className='my-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismod consequat habitant ultrices dictum lobortis vulputate. Dictum gravida sed ut lacinia lectus lorem.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismod consequat habitant ultrices dictum lobortis vulputate. Dictum gravida sed ut lacinia lectus lorem.
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismod
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismodconsectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismod
                            </p>

                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque,
                            </p>
                            <p className='mb-4' data-aos="fade-up"
                                data-aos-duration="1200">
                                consectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismodconsectetur adipiscing elit. Suscipit vitae risus viverra faucibus porttitor. Eget nunc condimentum sit suspendisse ut tellus faucibus malesuada. Volutpat maecenas quam faucibus urna nisi. Mauris velit elit in enim dolor sed. Id neque risus mi egestas. Neque, mauris nulla sit dapibus. Habitasse dictum purus, vulputate curabitur ut etiam morbi. Etiam viverra euismod
                            </p>
                            {/* ========= share section start ======= */}
                            <div className='share' data-aos="fade-up"
                                data-aos-duration="1200">
                                <p className='pe-4'>Shere</p>
                                <div className=''>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={f} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'>   <img className='img-fluid mx-2' src={t} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={i} alt="" /> </Link>
                                    <Link to="/" target="_blank" className='link-style'> <img className='img-fluid mx-2' src={youtube} alt="" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========= under sahre section start ======= */}
                    <div className='review-section d-lg-flex   pe-5 ps-4 py-4 mb-5' data-aos="fade-up"
                        data-aos-duration="1200">
                        <div className='col-12 col-md-12 col-lg-2'>
                            <img className='w-100' src={john} alt="" />
                        </div>
                        <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                            <h3 className=''>Jane Cooper</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. officia consequat duis enim velit mollit</p>
                            <Link className='view-all' to='*'>View All Post <img className='ms-2' src={red} alt="" /></Link>
                        </div>
                    </div>

                    {/* ======== comments ======== */}
                    <div className='comment'>
                        <h5 className='text-start my-4'>Comments</h5>
                        <div className='review-section mb-5'>
                            <div className=' d-lg-flex pe-5 ps-4 py-4 ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100' src={comment} alt="" />
                                </div>
                                <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Jane Cooper</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. officia consequat duis enim velit mollit</p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-lg-flex   pe-5 ps-4 py-4  ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100 ' src={comment2} alt="" />
                                </div>
                                <div className='text-start ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Jane Cooper</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. officia consequat duis enim velit mollit</p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-lg-flex   pe-5 ps-4 py-4 ' data-aos="fade-up"
                                data-aos-duration="1200">
                                <div className='col-12 col-md-12 col-lg-2'>
                                    <img className='img-fluid w-100 ' src={comment3} alt="" />
                                </div>
                                <div className='text-start  ms-lg-4 col-12 col-md-12 col-lg-10'>
                                    <h3 className=''>Jane Cooper</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. officia consequat duis enim velit mollit</p>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Write your comment..." aria-label="Search" />
                                        <button className="reply" type="submit">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ====== comment section ======= */}
                    <div className='comment' data-aos="fade-up"
                        data-aos-duration="1200">
                        <h5 className='text-start my-4'>Add a comment</h5>
                        <div className=' mb-5'>
                            <div className="contact-custom row g-4">
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder='Your Full Name..' id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder='Email..' id="inputEmail4" />
                                </div>
                                <div className="col-12">
                                    <textarea className='w-100' name="" placeholder='write your message here...' id="" cols="30" rows="7"></textarea>
                                </div>
                                <div className="col-12 my-4 contact-button">
                                    <button type="submit" className="last-child">Submit Now</button>
                                </div>
                            </div>
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

export default BlogFull;