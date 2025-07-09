import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursor = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
            });
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursor}
            className="absolute top-0 left-0 size-3 bg-white rounded-full border-none z-50  pointer-events-none"
        ></div>
    );
};

export default CustomCursor;