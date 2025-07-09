import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Hero = () => {
  const heroRef = useRef();

  useGSAP(() => {
    const elements = heroRef.current.children;

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.3, // delay between each animation
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className='flex gap-2 flex-col items-center text-center text-white pt-5 md:p-12'
    >
      <p className='opacity-70'>Hello I'm</p>
      <h2 className='text-4xl font-bold '>Basant Raj Joshi</h2>
      <h6 className='mt-2 opacity-70 text-[13px]'>Aspiring Fullstack Web Developer</h6>
      <button className='w-[200px] bg-indigo-900 mt-3 rounded-md px-4 py-2 text-xl hover:opacity-70 cursor-pointer duration-200'>
        <a href="#contact">Let's Talk</a>
      </button>
    </div>
  );
};

export default Hero;
