import React from 'react';

const About = () => {
    return (
        <div className='mt-20 overflow-x-hidden w-full'>
            <div className="upperabout text-center">
                <h2 className="text-white text-2xl font-semibold mb-2">GET TO KNOW</h2>
                <h1 className="text-blue-400 text-4xl font-bold mb-12">ABOUT ME</h1>
            </div>

            <div className="aboutmecontainer w-full mt-10 flex flex-col items-center justify-center">
                <p className='text-white text-center opacity-95 w-[80%] max-w-2xl'>
                    I’m Basant, a passionate full-stack web developer skilled in React, Node.js, Express, and MongoDB, with a love for creating clean, responsive designs using Tailwind CSS. I enjoy building functional apps, exploring UI/UX design, and sharing knowledge through content creation. Always eager to learn and grow, I aim to blend technology, creativity, and user experience in everything I build.
                </p>

                <button 
                    aria-label="Contact me"
                    className='bg-indigo-900 mt-5 text-white rounded-md px-4 py-2 text-xl w-[200px] hover:opacity-70 cursor-pointer duration-200'
                >
                    <a href="#contact" className="block w-full h-full">Let's Talk</a>
                </button>
            </div>
        </div>
    );
};

export default About;
