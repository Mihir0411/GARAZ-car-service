import React from 'react';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../Service/OurServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <Feature></Feature>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;