import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ✅ For large screens (desktop/tablet)
        "(min-width: 769px)": () => {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 2.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        // ✅ For small screens (mobile)
        "(max-width: 768px)": () => {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        },
      });
    }, ref);

    // ✅ Refresh ScrollTrigger on resize (important for mobile)
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    return () => {
      ctx.revert(); // Cleanup animations
      window.removeEventListener("resize", refresh);
    //   ScrollTrigger.kill(); // Optional: clean up triggers
    };
  }, []);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
};

export default AnimatedComponent;
