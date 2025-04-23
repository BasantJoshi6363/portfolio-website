import React from 'react'

const About = () => {
    return (
        <div id='about' className='mt-30  relative z-0'>
            <div className="text-center">
                <p className='uppercase'>get to know</p>
                <h6 className='uppercase mt-3 text-2xl text-[#4DB4FE]'>About Me</h6>
            </div>
            <div className='flex flex-row mt-10'>

                <div className=" flex-1 flex items-center flex-col justify-center">
                    <p className='w-[80%] text-center'>Hi, I am Basant!
                        I am a passionate IT professional and BCA student, skilled in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I love building responsive projects like weather apps, chat apps, and CRUD applications. I’m dedicated to continuous learning and creating amazing user experiences.</p>
                    <a href='#contact' className='bg-blue-600 px-4 py-3 mt-5 capitalize rounded-md hover:opacity-65 cursor-pointer'>let's talk</a>

                </div>
            </div>
        </div>
    )
}

export default About