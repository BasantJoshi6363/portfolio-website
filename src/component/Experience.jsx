import React from 'react'
import { MdVerified } from 'react-icons/md'

const Experience = () => {
    return (
        <div className='mt-20 w-full text-white opacity-95 px-4'>
            <div className="upperabout text-center">
                <h2 className="text-white text-2xl font-semibold mb-2">What skills I have</h2>
                <h1 className="text-blue-400 text-4xl font-bold mb-12">My Experience</h1>
            </div>

            <div className="experienceContainer flex flex-col lg:flex-row justify-center items-center gap-10">
                {/* Frontend Box */}
                <div className="boxes flex flex-col items-center justify-center p-6 w-full max-w-md bg-indigo-900 hover:border hover:border-purple-700 duration-300 rounded-3xl hover:bg-transparent">
                    <h5 className='font-semibold text-2xl mb-4'>Frontend Experience</h5>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>HTML</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>CSS</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>JavaScript</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>React JS</h3>
                        </li>
                    </ul>
                </div>

                {/* Backend Box */}
                <div className="boxes flex flex-col items-center justify-center p-6 w-full max-w-md bg-indigo-900 hover:border hover:border-purple-700 duration-300 rounded-3xl hover:bg-transparent">
                    <h5 className='font-semibold text-2xl mb-4'>Backend Experience</h5>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>Node JS</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>Express JS</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>MongoDB</h3>
                        </li>
                        <li className='flex items-center gap-3 text-lg sm:text-xl'>
                            <MdVerified />
                            <h3>SQL</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
