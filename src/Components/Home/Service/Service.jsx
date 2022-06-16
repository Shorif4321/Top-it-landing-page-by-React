import React, { useEffect, useState } from 'react';
import "./Service.css"
/* import branding from "../../../Images/1.png"
import sass from "../../../Images/sass.png"
import grapich from "../../../Images/grapich.png"
import web from "../../../Images/web.png"
import affiliate from "../../../Images/Affiliate.png"
import seo from "../../../Images/Seo.png"
 */

const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mt-5'>
            <div className='service my-md-5 py-md-4'>
                <h6 className='service-head'>THIS IS A PLACE WHERE IDEAS GROW</h6>
                <h1 className='service-main'>We help our clients to recognize and develop their own identity</h1>
            </div>

            <div className='service-items'>
                {
                    services.map(service =>
                        <div key={service.id} className="service-new mb-md-5 mb-sm-3">

                            <img src={service.image} alt="" />
                            <h4 className='service-name'>{service.name}</h4>
                            <p className='service-des px-md-4'>{service.des}</p>

                        </div>)
                }


            </div>

        </div>
    );
};

export default Service;