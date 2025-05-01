import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const links = (
        <>
            <li><Link to="/" onClick={() => handleScroll("home")}>Home</Link></li>
            <li><Link to="/" onClick={() => handleScroll("about")}>About</Link></li>
            <li><Link to="/" onClick={() => handleScroll("projects")}>Projects</Link></li>
            <li><Link to="/" onClick={() => handleScroll("pricing")}>Pricing</Link></li>
            <li><Link to="/" onClick={() => handleScroll("consulting")}>Consulting</Link></li>
            <li><Link to="/" onClick={() => handleScroll("ai-coach")}>AI-Coach</Link></li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow transition-all duration-300">
                    <div className="navbar max-w-7xl mx-auto py-4 px-4">
                        <div className="navbar-start lg:ml-20">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
                                    {links}
                                </ul>
                            </div>
                            <a className="flex items-center gap-2 text-xl font-bold">
                                <span className="text-2xl">SalesRank.AI</span>
                            </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-sm">
                                {links}
                            </ul>
                        </div>
        
                        <div className="navbar-end lg:mr-20">
                            <button>Get Started</button>
                        </div>
        
                    </div>
                </div>
    );
};

export default Navbar;