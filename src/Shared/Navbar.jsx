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
        <div className="fixed max-w-7xl lg:w-[1440px] md:h-[108px] top-0 mx-auto shadow-sm ">
            <div className="navbar items-center h-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SalesRank.AI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;