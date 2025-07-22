import { useEffect } from "react";
import CustomCursor from "./CustomCursor"
import AnimatedComponent from "./AnimateComponent";
import Hero from "./Hero"
import Middle from "./Middle";
import About from "./About"
import Experience from "./Experience"
import MyRecentWork from "./MyRecentWork"
import Contact from "./Contact"
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"
const MyComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Running on the browser:", window.location.href);
    }
  }, []);

  return <div></div>;
};

const Home = () => {
  return (
    <div className='h-full  w-[100vw] flex items-center justify-center flex-col bg-[#1E1E38]'>
      {/* <Navigation/> */}
      <SmoothScroll />
      <MyComponent />
      <CustomCursor />
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>
      <Middle />
      <About />
      <AnimatedComponent>
        <Experience />
      </AnimatedComponent>


      <MyRecentWork />
      <Contact />
      <Footer />

    </div>
  )
}

export default Home
