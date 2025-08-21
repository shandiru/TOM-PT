// App.jsx
// src/App.jsx

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";
import ReadyToStart from "./components/ReadyToStart";
import HealthyTips from "./components/HealthyTips";




// Main App component
function App() {
  return (
    <>
      <HealthyTips />
      <Testimonials />
      <ReadyToStart />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
