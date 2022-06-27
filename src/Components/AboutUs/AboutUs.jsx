import React from 'react';
import "./AboutUs.css"
import aboutMain from '../../Images/Boss1.jpg'
import right from '../../Images/rightServiceArrow.png'
import sign from "../../Images/signleSIgn.png"
import about1 from "../../Images/bossWithDeins.jpeg"
import about2 from "../../Images/about2.png"
import about20 from "../../Images/bosswithDenish2.jpg"
import about3 from "../../Images/about3.png"
import LetsTalk from '../Shared/LetsTalk/LetsTalk';

const AboutUs = () => {
    return (
        <>
            {/* ======= about head start========= */}
            <div id='about' className='container d-lg-flex justify-content-between align-items-center  py-md-5' data-aos="fade-up"
                data-aos-duration="500">
                <div className='col-12 col-md-12 col-lg-6' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='service-banner'>
                        <h1>About Us</h1>
                        <h6 className=''>The 21st Century is called the century of acquiring new skills of information and technology because the previous century has created the utmost development of this sector randomly all around the world by the hand of thousands of technologists like Bil Gates, Steve Jobs and so on.
                        </h6>
                        <h6 className=''>
                            The inventions and discoveries of those great souls to technology have made uncountable contributions to the world economy and human resources. The Topitltd has the same motives to make a skilled generation of information and technology in Bangladesh and worldwide.
                        </h6>
                    </div>
                    {/*  <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Service</p> */}
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='service-banner-img'>
                        <img className='img-fluid' src={aboutMain} alt="" />
                    </div>
                </div>
            </div>


            {/* ======= about who are you start ========= */}
            <div className="aboutUs d-lg-flex  justify-content-between align-items-center container my-md-5 py-5" >
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 " data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <div>
                        <img className='img-fluid w-100 mb-sm-5' src={about1} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-7" data-aos="zoom-out-up"
                    data-aos-duration="1000">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-3 '>Who We Are?</h2>
                    <p>
                        The beginning of the Topitltd was started in 2010 by Shahadat Shahin Rupok, the Founder and CEO of the company. He took an office in Dhanmondi, the commercial region of Dhaka, and started to provide training, services and support in several segments of information and technology, especially in Web Development, Web Design, Digital Marketing and Branding.
                    </p>
                    <p>
                        A lot of people who love to work with information and technology in business and corporations come here and take all types of training, services and support from Bangladesh and countries around the world. As a result, the company has acquired much popularity because of its better services.
                    </p>
                    {/* <p>
                        When the Covid-19 spread out all over the world, Government and Non-Government offices were bound to stop their official duties. Though they thought of continuing their home offices, they needed various types of technological support and the Topitltd provided them with all types of support with much care.
                    </p>
                    <p>
                        As the range of services was broadened gradually, the company took various steps with setting up a new office at Mohammadpur, Dhaka in 2021. Now, all classes of people in the country and those abroad are getting the best services 24/7 from Topitltd.
                    </p> */}

                    <div className='my-3'>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Making lives easier</h6>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Get every solution right here</h6>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Innovation and creativity</h6>
                    </div>
                </div>
            </div>


            {/* =======about service 2 start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container my-md-5 pb-5">
                <div className="col-12 col-md-12 col-lg-7" data-aos="zoom-out-up"
                    data-aos-duration="1000">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-4'>Be Skilled, Be Confident.</h2>
                    <p className='about-p'>
                        The Topitltd hais such a type of information and technology platform that can make your dreams come true. You must be able to make yourself skilled and innovative. Your skills and innovative ideas will help to invent millions of creatives. Thus, you will be able to work in Bangladesh and all over the world. As the information and technology sectors of Bangladesh are growing faster, thousands of skilled human resources are needed here to boost the overall development. In this case, if you have any skills in digital platforms, thousands of doors of work open for you. So, don’t be late taking the right decision right now. Go ahead with the best Skills Development and Services of the Topitltd
                    </p>
                    <p className='about-p mt-3'>

                    </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 " data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <div>
                        <img className='img-fluid w-100' src={about20} alt="" />
                    </div>
                </div>
            </div>
            {/* ======= about missions service 3 start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container my-5 py-md-5">
                <div className="col-12 col-md-12 col-lg-7" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className=' mb-4'>Mission</h2>
                    <p className='about-p'>
                        The mission of the Topitltd is to ensure the best services of the Information and Technology to the all classes people of Bangladesh and other countries of the world. It is klnown to all that the advantages of technology has created a new window of business that are bringing remarkable contribution to the national economy of the countr. As a result, the country has been benefited in various ways.
                    </p>
                    <p className='about-p mt-3'>
                        As the people of the worldwide are getting involved in the metaverse of the technology both in their personal life and business, they need the best services and support so that they can get the best benefit of the technology for the betterment of their business.
                    </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 " data-aos="zoom-out-up"
                    data-aos-duration="1000">
                    <div>
                        <img className='img-fluid w-100' src={about2} alt="" />
                    </div>
                </div>
            </div>

            {/* =======vision service start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container pb-5">
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 " data-aos="zoom-out-up"
                    data-aos-duration="1000">
                    <div>
                        <img className='img-fluid w-100 mb-sm-5' src={about3} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-3 '>Visions</h2>
                    <p className='about-p'>
                        The Government of Bangladesh has announced the digitalization of the country under the government project named "Digital Bangladesh by 2021.”
                    </p>
                    <p className=' mt-3'>
                        The project has main two aims, one is to reach the facilities of information and technology to every person in the country and another goal is to make skilled human resources so that they can engage themselves with every spare technology.
                    </p>
                    <p className=' mt-3'>
                        Bangladesh turns into a developed country within “ Vision 2041”. To make the project successful, the Government gives priority to the Non-Governed sectors.
                    </p>
                    <p className=' mt-3'>
                        The main visions of Topitltd are to provide the best training, services and support for information and technology. As Bangladesh is going to digitize every sector from top to bottom, the government and non-government sectors need employees who have the best skills in information and technology.
                    </p>
                    <p className=' mt-3'>
                        But most of the job seekers in the country don’t have enough skills. As a result, the number of unemployed people is increasing day by day. The problem of unemployment will be reduced gradually if the job seekers are well trained in information and technology.
                    </p>
                    <p className=' mt-3'>
                        To create skilled human resources and contribute to the national economy the Topitltd is working restlessly.
                    </p>
                </div>
            </div>

            <div className=''>
                <LetsTalk></LetsTalk>
            </div>


        </>
    );
};

export default AboutUs;