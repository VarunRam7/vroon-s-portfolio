import './App.css';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ResumeSection from './sections/ResumeSection';
import TimelineSection from './sections/TimelineSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}

export default App;
