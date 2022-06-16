import React from 'react';
import FooterTop from '../Shared/FooterTop/FooterTop';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';
import HelpContent from './HelpContent/HelpContent';
import Protfolio from './Protfolio/Protfolio';
import Review from './Review/Review';
import Service from './Service/Service';
import SliderHome from './SliderHome/SliderHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SliderHome></SliderHome>
            <Service></Service>
            <Protfolio></Protfolio>
            <HelpContent></HelpContent>
            <Counter></Counter>
            <Review></Review>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;