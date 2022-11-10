import React from 'react';
import useTitle from '../../useTitle';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Hero from './Hero';
import OurJourney from './OurJourney';
import ServiceView from './ServiceView';

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Hero></Hero>
           <Banner></Banner>
           <ServiceView></ServiceView>
           <AboutUs></AboutUs>
           <OurJourney></OurJourney>
        </div>
    );
};

export default Home;