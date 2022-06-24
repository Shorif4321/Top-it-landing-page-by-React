import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Showall.css"

const Showall = () => {

    const [showalls, setShowalls] = useState([]);
    useEffect(() => {
        fetch('./Showall.JSON')
            .then(res => res.json())
            .then(data => setShowalls(data))
    }, [])

    return (
        <div className='container p-0'>
            <div className='row'>
                {showalls.map(showall =>
                    <div className="col-12 col-md-6 col-lg-4 py-2" data-aos="flip-left"
                        data-aos-duration="1000">
                        <div className="">
                            <img className="img-fluid showall-image" src={showall.image} alt="..."></img>
                            <div className="card-body">
                                <h4 className="showall-head">{showall.name}</h4>
                                <h6 className='showall-des'>{showall.des}</h6>

                                {/* =========Dinamic Route setup=========== */}
                                {/* <Link to={`/purchase/${_id}`} ><button className="btn-sm live login"><i className="fas fa-cart-plus"></i> Buy Now</button></Link> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Showall;