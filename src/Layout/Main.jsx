import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../components/HomeContent/Home';
import About from '../components/HomeContent/About';

const Main = () => {
    return (
        <div className='bg-[#f9f9f9] px-6 md:px-20'>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
        </div>
    );
};

export default Main;