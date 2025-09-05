// App.jsx
// src/App.jsx

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";
import ReadyToStart from "./components/ReadyToStart";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import MyProgram from "./components/MyProgram";
import IntroSection from "./components/AboutSection";
import FitnessGuide from "./components/HealthyTips";




// Main App component
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <MyProgram />
      <FitnessGuide/>
      <Testimonials />
      <ReadyToStart />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
