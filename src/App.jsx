// App.jsx
// src/App.jsx

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";
import ReadyToStart from "./components/ReadyToStart";
import HealthyTips from "./components/HealthyTips";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BMI from "./components/BMI";
import BenefitsSection from "./components/BenefitsSection";
import MyProgram from "./components/MyProgram";
import IntroSection from "./components/AboutSection";




// Main App component
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <MyProgram />
      <BMI />
      <HealthyTips />
      <Testimonials />
      <ReadyToStart />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
