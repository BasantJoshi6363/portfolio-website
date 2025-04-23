import React from 'react';

const Experience = () => {
  return (
    <div className='mt-30'>
      <div id='experience' className="text-center">
        <p className='uppercase'>What Skills I Have</p>
        <h6 className='uppercase mt-5 text-2xl text-[#4DB4FE]'>My Experience</h6>
      </div>
      <div className="boxes flex lg:justify-between lg:flex-row flex-col justify-center items-center gap-10 mt-12">
        <div className="bg-[#262659] rounded-3xl p-8 w-1/2 text-center shadow-lg exp-box">
          <h2 className="text-cyan-400 text-2xl font-semibold mb-6">Frontend Experience</h2>
          <div className="flex justify-center text-white">
            <div className='flex flex-col gap-2'>
              <div className="flex gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">HTML</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">CSS</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">JavaScript</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">React JS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#262659] rounded-3xl p-8 w-1/2 text-center shadow-lg hover:bg-transparent hover:border-[.5px] exp-box">
          <h2 className="text-cyan-400 text-2xl font-semibold mb-6">Backend Experience</h2>
          <div className="flex justify-center text-white">
            <div className='flex flex-col gap-2'>
              <div className="flex gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">JavaScript</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">Node JS</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">Express JS</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>✔️</span>
                <span className="font-semibold">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;