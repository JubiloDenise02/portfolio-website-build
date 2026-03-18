import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HomeSection from "./components/HomeSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HomeSection />
        <AboutSection/>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
};

export default Home;
