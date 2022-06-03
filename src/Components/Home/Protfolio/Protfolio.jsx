import React, { useEffect, useState } from 'react';
import "./Protfolio.css"
import leftarrow from "../../../Images/left arrow.png"
import rightarrow from "../../../Images/right arrow.png"

const Protfolio = () => {
    const [portfolios, setPortfolios] = useState([])
    useEffect(() => {
        fetch('./Portfolio.JSON')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])
    return (
        <>
            <div className='px-md-5 px-sm-4 protfolio-head mb-4'>
                <div className='w-md-50'>
                    <p className='latest-project'>LATEST PROJECT</p>
                    <h4 className="latest-head">Checkout  Our <br /> Amazing work</h4>
                </div>
                <div className='mt-sm-4 mb-sm-5'>
                    <img className='leftarrow' src={leftarrow} alt="" />
                    <img className='rightarrow' src={rightarrow} alt="" />
                </div>
            </div>

            {/* portfolio start */}
            <div>
                <div className='portfolio px-5'>
                    {
                        portfolios.map(portfolio => <div key={portfolio.id}>
                            <div className="mb-2">
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
        </>
    );
};

export default Protfolio;