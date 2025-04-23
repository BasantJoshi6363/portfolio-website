import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
    const cursor = useRef();
    useGSAP(() => {
        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: .3
            })
        })
    })
    return (
        <div className=' cursor size-2 bg-white absolute top-0 left-0 rounded-full z-30' ref={cursor}></div>
    )
}

export default CustomCursor