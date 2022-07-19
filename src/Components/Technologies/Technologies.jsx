import React, { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Backend from './Backend/Backend';
import CMS from './CMS/CMS';
import Database from './Database/Database';
import DevOps from './DevOps/DevOps';
import Frontend from './Frontend/Frontend';
import Mobile from './Mobile/Mobile';

const Technologies = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container'>
            <div className='my-5 py-5 service-banner'>
                <h4 className='text-center mb-5'>Our Technologies</h4>
                <Tabs
                    defaultActiveKey="Frontend"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Frontend" title="Frontend">
                        <Frontend />
                    </Tab>
                    <Tab eventKey="Backend" title="Backend">
                        <Backend />
                    </Tab>
                    <Tab eventKey="Database" title="Database">
                        <Database />
                    </Tab>
                    <Tab eventKey="CMS" title="CMS">
                        <CMS />
                    </Tab>
                    <Tab eventKey="Mobile" title="Mobile">
                        <Mobile />
                    </Tab>
                    <Tab eventKey="DevOps" title="Infra and DevOps">
                        <DevOps />
                    </Tab>
                </Tabs>

            </div>

        </div>
    );
};

export default Technologies;