import Info from "./component/Info"
import Hero from "./component/Hero"
import About from "./component/About"
import Experience from "./component/Experience"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
const Home = () => {
    return (
        <div className="flex items-center justify-center flex-col relative" >
            <div className="style w-[80%] h-screen">
                <Info />
                <Hero />
                <About />
                <Experience />
                <Project />
                <Contact />
            </div>
                <Footer />
        </div>
    )
}

export default Home