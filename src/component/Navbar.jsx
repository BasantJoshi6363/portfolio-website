import React from 'react'
import { FiHome, FiUser, FiSettings, FiBarChart2, FiMessageCircle } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="nav flex items-center justify-between px-5 fixed top-[85%] left-[33%] z-10 bg-[#151525] blur-[.5px] w-1/3 h-15 rounded-2xl">
            <a className="cursor-pointer text-[#4DB4FE] text-2xl hover:opacity-65" href="#"><FiHome /></a>
            <a className="cursor-pointer text-[#4DB4FE] text-2xl hover:opacity-65" href="#about"><FiUser /></a>
            <a className="cursor-pointer text-[#4DB4FE] text-2xl hover:opacity-65" href="#"><FiSettings /></a>
            <a className="cursor-pointer text-[#4DB4FE] text-2xl hover:opacity-65" href="#"><FiBarChart2 /></a>
            <a className="cursor-pointer text-[#4DB4FE] text-2xl hover:opacity-65" href="#"><FiMessageCircle /></a>
        </div>
    )
}

export default Navbar