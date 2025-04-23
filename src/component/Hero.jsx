import React from 'react'
import logo from "../assets/logo.png"
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className="hero mt-10 flex justify-between items-center">
            <div className="left">
                <div className="social flex flex-col items-center gap-3 text-[#4DB4FE]">
                    <a className='text-xl hover:text-white hover:transition-all' href="/"><CiLinkedin /></a>
                    <a className='text-xl hover:text-white hover:transition-all' href="/"><CiFacebook /></a>
                    <a className='text-xl hover:text-white hover:transition-all' href="/"><AiFillGithub /></a>
                    <a className='text-xl hover:text-white hover:transition-all' href="/"><CiInstagram /></a>
                    <div className="line w-[1px] h-10 bg-[#4DB4FE]"></div>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative top-4 left-5 h-[300px] md:w-80 md:h-80">
                    <div className="absolute size-[80%] rounded-full bg-blue-600 opacity-20 animate-pulse "></div>
                    <img
                        src={logo}
                        alt="Developer"
                        className="rounded-full size-[80%] object-cover border-4 border-blue-400"
                    />
                </div>
            </div>
            <div className="random text-[#4DB4FE] text-[12px] [writing-mode:vertical-rl] rotate-180 tracking-wider font-sans">
                Scroll Down
            </div>
        </div>
    )
}

export default Hero