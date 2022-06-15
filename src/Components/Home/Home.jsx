import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
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
            <Header></Header>
            <Banner></Banner>
            <SliderHome></SliderHome>
            <Service></Service>
            <Protfolio></Protfolio>
            <HelpContent></HelpContent>
            <Counter></Counter>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;