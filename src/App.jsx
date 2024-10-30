import { Navbar } from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero";
import Features from "./assets/components/Features";
import Contents from "./assets/components/Contents";
import Gallery from "./assets/components/Gallery";
import Partners from "./assets/components/Partners";
import Testimonials from "./assets/components/Testimonials";
import CTA from "./assets/components/CTA";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  ) 
}

export default App;
