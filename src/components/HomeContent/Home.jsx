import React from 'react';
import { Cpu, Users, Zap, Award, ChevronRight } from 'lucide-react';
import img from '../../assets/Banner/image.png'
import img2 from '../../assets/Banner/image-1.png'
import img3 from '../../assets/Banner/backup_table.png'
import img4 from '../../assets/Banner/atr.png'


const Home = () => {
    return (
        <div className='flex mt-32 gap-6 right-0' style={{
            background: 'linear-gradient(83.09deg, rgb(255, 111, 185) -65.063%,rgb(103, 151, 255) 23.729%)'
        }}>
            {/* hero */}
            <div className='w-[1440px] h-[750px] px-10'>
                <div>
                    <h1 className='text-4xl font-semibold'>Your AI- <br />Powered <br /> Sales Coach</h1>
                </div>
                <div className='flex gap-[40px] items-center'>
                    <img className='w-[204px] h-[198px] p-4' src={img2} alt="" />
                    <p className='w-[346px] h-[138px]'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                </div>
                <div className='flex gap-6'>
                    <div className='flex w-[294px] items-center gap-3'>
                        <div>
                            <img className='w-[46.42px] h-[46.42] px-2' src={img3} alt="" />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>2000+</h3>
                            <p className='text-sm '>Your protection</p>
                        </div>

                    </div>
                    <div className='flex w-[294px] items-center gap-3'>
                        <div>
                            <img className='w-[46.42px] h-[46.42]' src={img4} alt="" />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold'>7001</h3>
                            <p className='text-sm '>Provide tailored</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Like ai coatch */}
            <div className='relative w-[583px] h-[628px]'>
                <div className=''>
                    <img className='' src={img} alt="" />
                </div>
                <div className='w-[467px] h-[359px] bg-base-200 absolute -left-60 -bottom-20 rounded-xl p-6'>
                    <div className='flex justify-between px-6'>
                        <div className='text-xl font-semibold'>721+</div>
                        <div className='text-xl font-semibold'>1000+</div>
                    </div>
                    <h3 className='text-xl font-semibold py-6'>Growth is our priority.</h3>
                    <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
