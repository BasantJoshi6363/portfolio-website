import React from 'react'
import { FaBriefcase, FaHome, FaPhone } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { IoIosPerson } from 'react-icons/io'

const Navigation = () => {
  return (
    <div className='fixed top-[82%] left-115 text-white h-16 w-1/3 bg-zinc-600 rounded-full'>
      <li className='flex items-center justify-between h-full px-10'>
        <div className="circle size-10 flex items-center justify-center rounded-full hover:bg-zinc-500 duration-300">

          <a className='text-xl cursor-pointer' href="#"><FaHome /></a>
        </div>
        <div className="circle size-10 flex items-center justify-center rounded-full hover:bg-zinc-500 duration-300">

          <a className='text-xl cursor-pointer' href="#"><FaPerson /></a>

        </div>
        <div className="circle size-10 flex items-center justify-center rounded-full hover:bg-zinc-500 duration-300">

          <a className='text-xl cursor-pointer' href="#"><FaBriefcase /></a>

        </div>
        <div className="circle size-10 flex items-center justify-center rounded-full hover:bg-zinc-500 duration-300">
          <a className='text-xl cursor-pointer' href="#"><IoIosPerson /></a>

        </div>
        <div className="circle size-10 flex items-center justify-center rounded-full hover:bg-zinc-500 duration-300">
          <a className='text-xl cursor-pointer' href="#"><FaPhone /></a>

        </div>

      </li>
    </div>
  )
}

export default Navigation