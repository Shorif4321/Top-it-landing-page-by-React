import React, { useEffect, useState } from 'react';

const CMS = () => {
    const [frontends, setFrontends] = useState([])
    useEffect(() => {
        fetch('./CMS.JSON')
            .then(res => res.json())
            .then(data => setFrontends(data))
    }, [])
    return (
        <div>
            <div className='container mt-5 d-flex justify-content-around pt-5 px-sm-2 px-md-5 '>
                {
                    frontends.map(frontend => <div
                        key={frontend.id} className='frontend' /* data-aos="flip-left"
                    data-aos-duration="1000" */>
                        <div>
                            <img className='img-fluid' src={frontend.image} alt="" />
                            <h4>{frontend.name}
                            </h4>
                        </div>


                    </div>)
                }
            </div>
        </div >
    );
};

export default CMS;