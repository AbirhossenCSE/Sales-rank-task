// import React from 'react';

// const Faq = () => {
//     return (
//         <div className='p-10'>
//             <h3>Frequently asked questions</h3>
//             <h1 className='font-semibold text-3xl text-center'>Constant Colaboration is how we <br /> roll. Let's see if we area good fit</h1>

//             <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
//                 <div className="collapse-title font-semibold">Why should I choose Humestic?</div>
//                 <div className="collapse-content text-sm">
//                     Click the "Sign Up" button in the top right corner and follow the registration process.
//                 </div>
//             </div>
//             <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
//                 <div className="collapse-title font-semibold">HI like your works, how do yw start a project</div>
//                 <div className="collapse-content text-sm">
//                     Click the "Sign Up" button in the top right corner and follow the registration process.
//                 </div>
//             </div>
//             <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
//                 <div className="collapse-title font-semibold">How do I create an account?</div>
//                 <div className="collapse-content text-sm">
//                     Click the "Sign Up" button in the top right corner and follow the registration process.
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Faq;


import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Faq = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(prevOpenItem => (prevOpenItem === index ? null : index));
    };

    const faqData = [
        {
            id: 1,
            question: 'Why should I choose Humestic?',
            answer: 'bottleneck miss my capacity to fun, no Inconvenience necessary add to start asking on social media, or helicopter slow for what the Lets put a pin in that we need to build out the',
        },
        {
            id: 2,
            question: 'I like your works, how do we start a project?',
            answer: 'So, that\'s going to be a hard no. What\'s our bandwidth on this, baseline, touch base, we need to future-proof our marketing and.',
        },
        {
            id: 3,
            question: 'What info is required to get a quotation?',
            answer: 'Are we able to leverage this, or are we just going to spin our wheels? Can we ballpark the.',
        },
    ];

    return (
        <div className="bg-gray-50 max-w-7xl mx-auto py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-lg">
                    Frequently asked <br /> questions
                </h2>
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Constant collaboration is how we roll. <br />
                        Let&apos;s see if we are a good fit.
                    </h1>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md border border-gray-200"
                        >
                            <div
                                className="flex items-center justify-between p-4 cursor-pointer"
                                onClick={() => toggleItem(item.id)}
                            >
                                <div className='flex items-center gap-2'>
                                    <span className='text-gray-500 font-bold'>{String(item.id).padStart(2, '0')}</span>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                                </div>
                                {openItem === item.id ? (
                                    <ChevronUp className="h-6 w-6 text-blue-500" />
                                ) : (
                                    <ChevronDown className="h-6 w-6 text-blue-500" />
                                )}
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: openItem === item.id ? 'auto' : 0,
                                    opacity: openItem === item.id ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 text-gray-600 text-sm border-t border-gray-200">
                                    {item.answer}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
