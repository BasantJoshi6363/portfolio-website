import React from 'react';
import { CiMail, CiPhone } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div className="text-center mt-20">
                <p className='uppercase'>get to know</p>
                <h6 className='uppercase mt-3 text-2xl text-[#4DB4FE]'>About Me</h6>
            </div>
            <div className="mt-20 flex justify-center">


                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10">
                    {/* Left Container */}

                    <div className="flex flex-col gap-8 w-full md:w-[40%]">

                        {/* Contact Options */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-blue-900 flex items-center flex-col justify-center hover:bg-transparent border border-blue-600 rounded-2xl p-4 text-center md:text-left transition duration-300">
                                <div className="text-3xl mb-2"><CiMail /></div>
                                <p className="text-gray-300 mt-2">basantjoshi6363@gmail.Com</p>
                            </div>

                            <div className="bg-blue-900 flex items-center flex-col justify-center hover:bg-transparent border border-blue-600 rounded-2xl p-4 text-center md:text-left transition duration-300">
                                <div className="text-3xl mb-2"><FaFacebook /></div>
                                <h2 className="text-white text-xl font-bold"><a href='https://www.facebook.com'>Facebook</a></h2>
                            </div>

                            <div className="bg-blue-900 flex items-center flex-col justify-center hover:bg-transparent border border-blue-600 rounded-2xl p-4 text-center md:text-left transition duration-300">
                                <div className="text-3xl mb-2"><CiPhone /></div>
                                <p className="text-gray-300 mt-2">+9779860637373</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="flex flex-col gap-6 w-full md:w-[60%]">
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="bg-transparent border border-blue-400 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border border-blue-400 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="bg-transparent border border-blue-400 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 w-32">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
