import Hero from "../components/Hero";
import About from "../components/About";
import Purpose from "../components/Purpose";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Plans from "../components/Plans";
import Contact from "../components/Contact";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Purpose />

      <Services />
            <Plans />
      <WhyUs />

      <Contact />
    </>
  );
};

export default Home;
