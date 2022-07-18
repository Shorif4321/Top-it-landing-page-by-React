import React, { useEffect, useState } from 'react';
import './Frontend.css'




const Frontend = () => {


    const [frontends, setFrontends] = useState([])
    useEffect(() => {
        fetch('./FrontendData.JSON')
            .then(res => res.json())
            .then(data => setFrontends(data))
        console.log(frontends);
    }, [])

    return (
        <div>
            <div className='container mt-5   pt-5 px-sm-2 px-md-5 technologist-items'>
                {
                    frontends.map(frontend => <div
                        key={frontend.id} className=' frontend' /* data-aos="flip-left"
                        data-aos-duration="1000" */>
                        <div>
                            <img className='img-fluid' src={frontend.image} alt="" />
                            <h4 className='mb-4'>{frontend.name}
                            </h4>
                        </div>


                    </div>)
                }
            </div>


        </div >
    );
};

export default Frontend;