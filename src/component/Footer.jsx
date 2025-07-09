import React from 'react'
import { LuCopyright } from 'react-icons/lu'

const Footer = () => {
    return (
        <div className='w-full flex items-center  justify-center mt-5'>
            <div className="last flex items-center gap-2">

                <p className='text-white text-center mb-5 flex items-center gap-2'> <LuCopyright className='text-white' /> Basant Raj Joshi 2025</p>

            </div>
        </div>
    )
}

export default Footer