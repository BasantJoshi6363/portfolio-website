import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'
import img from "../assets/img.png"

const Middle = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-12 text-white mt-10'>
            {/* Social icons */}
            <div className="left flex flex-col items-center gap-3">
                <div className="socialhandle opacity-95 flex flex-col items-center gap-3">
                    <a className='text-[15px] hover:opacity-85' href="https://www.facebook.com/basant.joshi.710487/"><FaFacebook /></a>
                    <a className='text-[15px] hover:opacity-85' href="https://www.linkedin.com/in/basant-raj-joshi-887741313/"><FaLinkedin /></a>
                    <a className='text-[15px] hover:opacity-85' href="https://www.linkedin.com/in/basant-joshi-995918369/"><FaGithub /></a>
                    <a className='text-[15px] hover:opacity-85' href="https://www.tiktok.com/@basantjoshi8350"><FaTiktok /></a>
                </div>
                <div className='h-10 w-[1px] bg-blue-800 mt-3'></div>
            </div>

            {/* Profile image */}
            <div className="bichko w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-purple-600 rounded-full overflow-hidden relative">
                <img src={img} className='w-full h-full object-cover' alt="profile" />
            </div>

            {/* Scroll text */}
            <div className="right flex flex-col items-center text-white opacity-95">
                <h5 className='rotate-90 whitespace-nowrap'>Scroll</h5>
                <h5 className='rotate-90 whitespace-nowrap mt-5'>Down</h5>
            </div>
        </div>
    )
}

export default Middle
