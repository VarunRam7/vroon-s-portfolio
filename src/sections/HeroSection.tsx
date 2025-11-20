import { useEffect, useRef } from 'react';
import './HeroSection.css';
import profileImage from '../assets/images/varun-profile.png';
import CountUp from '../components/CountUp'
import GradientText from '../components/gradient-text/GradientText';
import SplitText from '../components/SplitText';

// Smooth scroll function
const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Geometric shapes configuration
    const shapes: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      type: 'circle' | 'hex';
      opacity: number;
    }> = [];

    // Create shapes
    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: Math.random() * 600 - 100,
        y: Math.random() * 600 - 100,
        radius: Math.random() * 80 + 40,
        speed: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
        type: Math.random() > 0.5 ? 'circle' : 'hex',
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.angle += shape.speed * 0.01;
        shape.x += Math.cos(shape.angle) * 0.5;
        shape.y += Math.sin(shape.angle) * 0.5;

        // Wrap around
        if (shape.x > 700) shape.x = -100;
        if (shape.y > 700) shape.y = -100;
        if (shape.x < -200) shape.x = 600;
        if (shape.y < -200) shape.y = 600;

        ctx.strokeStyle = `rgba(138, 43, 226, ${shape.opacity})`;
        ctx.lineWidth = 2;

        if (shape.type === 'circle') {
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Draw hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + shape.angle;
            const x = shape.x + shape.radius * Math.cos(angle);
            const y = shape.y + shape.radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="geometric-background" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#about" className="nav-link" onClick={(e) => smoothScrollTo(e, '#about')}>
            About
          </a>
          <a href="#resume" className="nav-link" onClick={(e) => smoothScrollTo(e, '#resume')}>
            Resume
          </a>
        </div>
        <div className="nav-logo"><GradientText textStyle={{ fontWeight: '900' }} colors={['#ff4ecd', '#b94bff', '#7f3bff', '#b94bff', '#ff4ecd']}>PORTFOLIO</GradientText></div>
        <div className="nav-links">
          <a href="#experience" className="nav-link" onClick={(e) => smoothScrollTo(e, '#experience')}>
            Experience & Projects
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => smoothScrollTo(e, '#contact')}>
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <SplitText
            text="HEY, I'M VARUN"/>
          </h1>
          <p className="hero-subtitle">a Developer</p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <GradientText animationSpeed={5}>
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                />+</GradientText>
              </div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <GradientText animationSpeed={5}>
                  <CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                  />+ years
                </GradientText></div>
              <div className="stat-label">as a developer</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img
              src={profileImage}
              alt="Varun's Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
