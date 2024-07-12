import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
 import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div style={{ backgroundColor: '#F0F0F0', minHeight: '100vh' }}>
      
        <Hero />
        <Pricing />
        <Benefits />       
        <Roadmap />
        <Footer />
      </div>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
