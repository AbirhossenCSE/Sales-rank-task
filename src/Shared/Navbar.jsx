import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            <li><Link to="/" onClick={() => handleScroll("pricing")}>Pricing</Link></li>
            <li><Link to="/" onClick={() => handleScroll("consulting")}>Consulting</Link></li>
            <li><Link to="/" onClick={() => handleScroll("ai-coach")}>AI-Coach</Link></li>
        </>
    );

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-black transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-10 lg:ml-20">
                        <a className="text-2xl font-bold hidden lg:block">SalesRank.AI</a>

                        {/* Desktop Links */}
                        <ul className="hidden lg:flex menu menu-horizontal text-sm">
                            {links}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 z-50">
                                {links}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Get Started Button */}
                    <div className="lg:mr-20">
                        <button className="px-4 py-1 border rounded-2xl">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;
