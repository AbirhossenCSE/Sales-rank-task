import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-100 max-w-7xl mx-auto py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Description */}
                <div className="col-span-2 flex flex-col">
                    <div>
                        <img src="" alt="" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Logo</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        SalesRank.AI is a comprehensive suite of AI-powered solutions to help you find
                        and evaluate top sales professionals who can elevate every aspect of your business.
                        From performance ratings and skill verification to industry benchmarking and real-time
                        analytics, we provide the insights you need to optimize your sales strategy and
                        drive growth.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookSquare className='text-blue-700 w-6 h-6' />
                        <FaTwitter className='text-blue-700 w-6 h-6' />
                        <FaLinkedin className='text-blue-700 w-6 h-6' />
                        <FaSquareInstagram className='text-red-400 w-6 h-6' />
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Agency
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Case Study
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Resource
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Licence */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Licence</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Copyright
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                                Email Address
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-blue-500" />
                            <span className="text-gray-600 text-sm">(406) 156-0120</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <a
                                href="mailto:heyboosta@helloboosta.com"
                                className="text-gray-600 hover:text-blue-500 text-sm"
                            >
                                heyboosta@helloboosta.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-1 text-blue-500" />
                            <span className="text-gray-600 text-sm">
                                2072 Westheimer Rd. Santa Ana, <br />
                                Illinois 85486
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
