import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return; // Prevent null errors

        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 }, // Start hidden
            {
                opacity: 1,
                y: 0,
                duration: 3,
                yoyo : true,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div ref={ref} className="w-full">
            {children}
        </div>
    );
};

export default AnimatedComponent;