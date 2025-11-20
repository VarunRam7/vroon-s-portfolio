import { useEffect, useRef } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      circle.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Main Content */}
        <div className="contact-main">
          <h2 className="contact-title">
            <span className="contact-title-regular">LET'S WORK</span>
            <span className="contact-title-handwritten">together !</span>
          </h2>

          <div className="contact-info">
            <a href="mailto:vroon071001@gmail.com" className="contact-link font-cursive">
                vroon071001@gmail.com
            </a>
            <a href="tel:+919629095843" className="contact-link">
              +91 96290 95843
            </a>
          </div>

          <div className="contact-button-wrapper">
            <a
              href="mailto:vroon071001@gmail.com"
              className="contact-circle-button"
            >
              <div className="circle-text" ref={circleRef}>
                <svg viewBox="0 0 200 200" className="circle-svg">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text className="circle-text-path">
                    <textPath href="#circlePath" startOffset="0">
                      Get in touch · Get in touch · Get in touch ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="arrow-icon">→</div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <p className="copyright">Copyright 2025 by Varun</p>
          
          <div className="footer-logo">
            <span className="logo-text">VARUN</span>
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <span className="back-icon">⭡</span> Back on top
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

