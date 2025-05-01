import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../components/HomeContent/Home';
import About from '../components/HomeContent/About';
import LiveAi from '../components/HomeContent/LiveAi';
import OurCourses from '../components/HomeContent/OurCourses';
import Faq from '../components/HomeContent/Faq';
import TestimonialSlider from '../components/HomeContent/TestimonialSlider';
import Newsletter from '../components/HomeContent/Newsletter';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='bg-[#f9f9f9] px-6 md:px-20'>
            <Navbar></Navbar>
            <Home></Home>
            <LiveAi></LiveAi>
            <OurCourses></OurCourses>
            <Faq></Faq>
            <TestimonialSlider></TestimonialSlider>
            <Newsletter></Newsletter>
            <Footer></Footer>

        </div>
    );
};

export default Main;