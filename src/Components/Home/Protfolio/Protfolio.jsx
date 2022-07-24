import React, { useEffect, useState } from 'react';
import "./Protfolio.css"

const Protfolio = () => {
    const [portfolios, setPortfolios] = useState([])
    useEffect(() => {
        fetch('./Portfolio.JSON')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])
    return (
        <div className='portfolio-bg py-5'>
            <div className='container px-sm-4 protfolio-head mb-4 pt-5'>
                <div className='w-md-50'>
                    <p className='latest-project'>LATEST PROJECT</p>
                    <h4 className="latest-head">Checkout  Our <br /> Amazing work</h4>
                </div>
                <div className='mt-sm-4 mb-sm-5'>
                    <button className='latest-project-button'>Explore All <i class="ms-3 fas fa-arrow-right"></i></button>
                </div>
            </div>

            {/* portfolio start */}
            <div className='pb-5'>
                <div className='container portfolio'>
                    {
                        portfolios.map(portfolio => <div key={portfolio.id}>
                            <div className="mb-2 portfolio-hove" /* data-aos="zoom-in-down"
                                data-aos-easing="linear"
                                data-aos-duration="500" */>
                                <div>
                                    <img src={portfolio.image} alt="" />
                                </div>
                                <div className='portfolio-text'>
                                    <p>{portfolio.name}</p>
                                    <h5>{portfolio.des}</h5>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Protfolio;