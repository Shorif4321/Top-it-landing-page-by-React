import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter'>
            <div className='count-text col-6 col-md-3'>
                <h1>120+</h1>
                <p>Completed Projects</p>
            </div>
            <div className='count-text col-6 col-md-3'>
                <h1>1.2k</h1>
                <p>Happy Clients</p>
            </div>
            <div className='count-text col-6 col-md-3 '>
                <h1>90%</h1>
                <p>Reports Faster</p>
            </div>
            <div className='count-text col-6 col-md-3'>
                <h1>100+</h1>
                <p>Worldwide Office</p>
            </div>

        </div>
    );
};

export default Counter;