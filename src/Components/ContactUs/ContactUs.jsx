import React, { useEffect } from 'react';
import "./ContactUs.css"
import right from "../../Images/rightServiceArrow.png"
import messageBox from "../../Images/massagebox.png"
import locationbox from "../../Images/locationbox.png"
import phoneBox from "../../Images/phoneBox.png"
import Map from '../Shared/Map/Map';

const ContactUs = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    /* ========= Page Load from top of the page code end ========= */
    return (
        <>
            {/*    <div className='contact-hero container col-11 col-md-8 col-lg-5 m-auto my-md-5'>
                <h2>Contact  Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis varius ut in.
                </p>

            </div>
             <div className='container pb-5'>
                <p className='navigation text-left'>Home <img className='mx-3' src={right} alt="" /> Service</p>
            </div> */}

            {/* ========== contact from heading ========== */}
            <section id='contact' className='contact-from container pt-5'>
                <div className='mb-md-5'>
                    <h6>Contact Us</h6>
                    <h3>We Want to Hear from You</h3>
                </div>
                <div className="contact-custom row g-4">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Full Name <span>*</span></label>
                        <input type="email" className="form-control" placeholder='Full Name...' id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label text-left">Your Email <span>*</span></label>
                        <input type="email" className="form-control" placeholder='Your Email...' id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Subject  <span>*</span></label>
                        <input type="text" className="form-control" placeholder='Your Subject...' id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Your Number</label>
                        <input min="0" type="number"
                            placeholder='Your Number...' className="form-control number-input" id="inputEmail4" />
                    </div>

                    <div className="col-12">

                        <textarea className='w-100' name="" placeholder='write your message here...' id="" cols="30" rows="10"></textarea>

                    </div>
                    <div className="col-12 my-4 contact-button">
                        <button type="submit" className="last-child">Submit Now</button>
                    </div>
                </div>
            </section>
            {/* ========== contact from heading ========== */}
            <section className='container'>
                <div className='from-icon mb-md-5 py-5 d-lg-flex justify-content-between
'>
                    <div className='iconBOx p-5 col-12 col-md-12 col-lg-4' data-aos="flip-left"
                        data-aos-duration="1000">
                        <img className='img-fluid' src={messageBox} alt="" />
                        <h5>Email</h5>
                        <p>
                            contact@topitltd.com
                            <br />
                            support@topitltd.com </p>
                    </div>
                    <div className='iconBOx p-5 col-12 col-md-12 col-lg-4' data-aos="flip-left"
                        data-aos-duration="1000">
                        <img className='img-fluid' src={locationbox} alt="" />
                        <h5>Location</h5>
                        <p>1207, 1/4, Block-E, Sat-Mosjid Road, Bus Stand, Opposite Allah Kareem Mosque
                            <br /> Dhaka 1207</p>
                    </div>
                    <div className='iconBOx p-5 col-12 col-md-12 col-lg-4' data-aos="flip-left"
                        data-aos-duration="1000">
                        <img className='img-fluid' src={phoneBox} alt="" />
                        <h5>Phone</h5>
                        <p> Phone: +880 1616-028947 <br />Whatsapp: +880 1681-477270</p>
                    </div>
                </div>
            </section>
            <section className='container pb-5'>
                <div className='google-map'>
                    <Map></Map>
                </div>
            </section>


        </>
    );
};

export default ContactUs;