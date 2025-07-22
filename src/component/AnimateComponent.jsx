import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Check if ScrollTrigger is available
    if (!ScrollTrigger) {
      console.error("ScrollTrigger is not loaded");
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // For large screens (desktop/tablet)
        "(min-width: 769px)": () => {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        },
        // For small screens (mobile)
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

    // Refresh ScrollTrigger on resize (important for mobile)
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    // iOS-specific fix: Ensure ScrollTrigger is refreshed on load
    const handleLoad = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    // Additional iOS-specific fix: Use a timeout to ensure everything is loaded
    const iOSFix = () => {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 1000);
      }
    };

    iOSFix();

    return () => {
      ctx.revert(); // Cleanup animations
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div ref={ref} className="w-full">{children}</div>;
};

export default AnimatedComponent;
