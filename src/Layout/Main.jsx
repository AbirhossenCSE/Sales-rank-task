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

// bg-white bg-[radial-gradient(100%_50%_at_0%_0%,rgba(59,130,246,0.13)_0,rgba(59,130,246,0)_50%),radial-gradient(100%_50%_at_0%_100%,rgba(59,130,246,0.13)_0,rgba(59,130,246,0)_50%)]

const Main = () => {
    return (
        <div className='bg-white bg-[radial-gradient(100%_50%_at_0%_0%,rgba(59,130,246,0.25)_0,rgba(59,130,246,0)_50%),radial-gradient(100%_50%_at_0%_100%,rgba(59,130,246,0.25)_0,rgba(59,130,246,0)_50%)]

'>
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