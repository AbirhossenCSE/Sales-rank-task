import React from 'react';

const Newsletter = () => {
    return (
        <div className="max-w-7xl rounded-xl mx-auto bg-gradient-to-r from-blue-900 to-blue-600 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                    Ready to Hire Smarter?
                </h2>
                <p className="text-white text-opacity-80 mb-8 md:mb-10">
                    Unlock Exclusive Insights: Subscribe to Our Newsletter
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button className='btn bg-yellow-200 rounded-3xl text-black'>Join Now</button>

                </div>
            </div>
        </div>
    );
};

export default Newsletter;
