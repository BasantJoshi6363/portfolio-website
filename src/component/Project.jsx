import React from 'react';

const Project = () => {
  return (
    <div className='mt-30'>
      <div id='experience' className="text-center">
        <p className='uppercase'>My Recent Work</p>
        <h6 className='uppercase mt-5 text-2xl text-[#4DB4FE]'>Portfolio</h6>
      </div>
      <div className="boxes flex items-center lg:flex-row flex-col lg:justify-center gap-10 mt-12">
        <div className="bg-[#262659] rounded-3xl p-8 w-80 text-center shadow-lg exp-box">
          <h2 className="text-cyan-400 text-2xl font-semibold mb-6">Ecommerce Website</h2>
          <div className="flex justify-center text-white">
            <a href="/" className='bg-blue-600 px-4 py-3 mt-5 capitalize rounded-md hover:opacity-65 cursor-pointer'>
              Github
            </a>
          </div>
        </div>

        <div className="bg-[#262659] rounded-3xl p-8 w-80 text-center shadow-lg exp-box">
          <h2 className="text-cyan-400 text-2xl font-semibold mb-6">Blog Website</h2>
          <div className="flex justify-center text-white">
            <a href="/" className='bg-blue-600 px-4 py-3 mt-5 capitalize rounded-md hover:opacity-65 cursor-pointer'>
              Github
            </a>
          </div>
        </div>

        <div className="bg-[#262659] rounded-3xl p-8 w-80 text-center shadow-lg exp-box">
          <h2 className="text-cyan-400 text-2xl font-semibold mb-6">MCQ Website</h2>
          <div className="flex justify-center text-white">
            <a href="/" className='bg-blue-600 px-4 py-3 mt-5 capitalize rounded-md hover:opacity-65 cursor-pointer'>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;