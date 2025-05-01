import React from 'react';
import { MessageCircle, ThumbsUp, ThumbsDown, Settings, Zap } from 'lucide-react';
import img1 from '../../assets/AI/Frame-1.png'; 
import img2 from '../../assets/AI/Frame-2.png';
import img3 from '../../assets/AI/Frame-3.png';
import ChatBox from './ChatBox/ChatBox';

const LiveAi = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20 px-6 lg:px-16">
            {/* Titles */}
            <div className="mb-10 text-center">
                <h4 className="text-sm text-blue-200 font-medium">Live AI Coach</h4>
                <h1 className="text-3xl lg:text-5xl font-semibold">Take a Suggestion Coaching</h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 items-start max-w-7xl mx-auto">
                {/* Chat Box */}
                 <div className="col-span-3 bg-white rounded-xl shadow-lg p-4">
                    <ChatBox></ChatBox>
                </div>
                

                {/* Sidebar */}
                <div className="hidden lg:flex flex-col items-center gap-6 mt-4">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <img src={img2} alt="Real-time Analysis" className="w-full rounded-lg" />
                    </div>
                </div>

                {/* Analysis + Actions */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <img src={img3} alt="Quick Actions" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveAi;
