import React from 'react';
import img from '../../assets/Banner/image.png';
import img2 from '../../assets/Banner/image-1.png';
import img3 from '../../assets/Banner/backup_table.png';
import img4 from '../../assets/Banner/atr.png';

const Home = () => {
    return (
        <div className='pt-2 mb-8'>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-10 py-20">
                
                {/* Left Content */}
                <div className="flex-1 space-y-10 max-w-xl">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Your AI-<br />
                        <span className="text-gray-700">Powered</span><br />
                        Sales Coach
                    </h1>

                    <div className="flex items-start gap-6">
                        <img className="w-24 h-24" src={img2} alt="AI Icon" />
                        <p className="text-gray-600 text-lg">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-lg">
                            <img className="w-12 h-12" src={img3} alt="Icon" />
                            <div>
                                <h3 className="text-xl font-semibold text-blue-950">2000+</h3>
                                <p className="text-gray-500 text-sm">Your protection</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-lg">
                            <img className="w-12 h-12" src={img4} alt="Icon" />
                            <div>
                                <h3 className="text-xl font-semibold text-blue-950">7001+</h3>
                                <p className="text-gray-500 text-sm">Provide tailored</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative mt-16 lg:mt-0 flex-1 flex justify-center items-center">
                    <div className="rounded-2xl overflow-hidden md:ml-40 shadow-xl w-[400px] h-[500px]">
                        <img src={img} alt="AI Robot" className="w-full h-full object-cover" />
                    </div>

                    {/* Floating Box */}
                    <div className="absolute -bottom-16 left-12 bg-white shadow-lg rounded-xl p-6 w-[320px]">
                        <div className="flex justify-between mb-4 text-2xl font-bold text-blue-950">
                            <span>721+</span>
                            <span>1000+</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 py-4">Growth is our priority.</h3>
                        <p className="text-sm text-gray-600">
                            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
