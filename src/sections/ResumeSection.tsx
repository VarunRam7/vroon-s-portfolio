import { useEffect, useState } from 'react';
import './ResumeSection.css';
import varunRugged from '../assets/images/varun-rugged.jpeg';
import varunYoung from '../assets/images/varun-young.jpeg';
import varunProfessional from '../assets/images/varun-professional.jpeg';
import varunSquad from '../assets/images/varun-squad.jpeg';
import varunFoodie from '../assets/images/varun-foodie.jpeg';
import varunGym from '../assets/images/varun-gym.jpeg';
import instagramIcon from '../assets/images/instagram.png';
import githubIcon from '../assets/images/github.png';
import linkedInIcon from '../assets/images/linkedIn.png';
import reactIcon from '../assets/images/tools-react-icon.png';
import gaIcon from '../assets/images/tools-ga-icon.png';
import bootstrapIcon from '../assets/images/tools-bootstrap-icon.png';
import redisIcon from '../assets/images/tools-redis-icon.png';
import tsIcon from '../assets/images/tools-ts-icon.svg';
import posthogIcon from '../assets/images/tools-posthog-icon.png';
import atlasIcon from '../assets/images/tools-atlassian-icon.png';
import notionIcon from '../assets/images/tools-notion-icon.png';
import linearIcon from '../assets/images/tools-linear-icon.png';
import postmanIcon from '../assets/images/tools-postman-icon.png';
import swaggerIcon from '../assets/images/tools-swagger-icon.png';
import GlassIcons from '../components/glass-icon/GlassIcons';
import emailIcon from '../assets/images/tools-emailjs-icon.png';

const ResumeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    varunProfessional,
    varunRugged,
    varunYoung,
    varunFoodie,
    varunGym,
    varunSquad,
  ];
  const captions = [
    'Sprint planning face: calm externally 😌📅, dying internally 😭💀',
    'Debugging life in the woods 🌲💻',
    'Beta version of me: chubby 😄✨ but high performance ⚡',
    'Cheat meal? No. This is a critical system update 🍟⚙️😌',
    'Backend so strong even APIs feel safe 🔥💪💻',
    'Squad = my favourite open-source project 😄👯‍♂️✨',
  ];
  const tools = [
    reactIcon,
    gaIcon,
    bootstrapIcon,
    redisIcon,
    tsIcon,
    emailIcon,
    posthogIcon,
    atlasIcon,
    notionIcon,
    linearIcon,
    postmanIcon,
    swaggerIcon,
  ];
  const socialIcons = [
    {
      icon: (
        <img
          src={linkedInIcon}
          style={{ width: '50px', height: '50px' }}
          alt="LinkedIn"
        />
      ),
      color: 'blue',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/varun-ram-453011236/',
    },
    {
      icon: (
        <img
          src={instagramIcon}
          style={{ width: '50px', height: '50px' }}
          alt="Instagram"
        />
      ),
      label: 'Instagram',
      color: 'purple',
      link: 'https://www.instagram.com/_ram.varun/',
    },
    {
      icon: (
        <img
          src={githubIcon}
          style={{ width: '50px', height: '50px' }}
          alt="GitHub"
        />
      ),
      label: 'GitHub',
      color: 'black',
      link: 'https://github.com/VarunRam7',
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Varun_Ram_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <div className="resume-grid">
          {/* Column 1: Image Card */}
          <div className="resume-card image-card">
            <div className="image-carousel">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className={`carousel-image ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                />
              ))}
            </div>
            <p key={currentImageIndex} className="image-caption">
              {captions[currentImageIndex]}
            </p>
          </div>

          {/* Column 2: Middle Cards */}
          <div className="resume-middle-cards">
            <div className="middle-cards-group">
              {/* Role Card */}
              <div className="resume-card role-card">
                <p className="card-label">Surviving as</p>
                <h3 className="card-title">Software Engineer</h3>
              </div>

              {/* Social Icons - Outside the card */}
              <div className="social-icons">
                <GlassIcons items={socialIcons} className="custom-class" />
              </div>

              {/* Location Card */}
              <div className="resume-card location-card">
                <p className="card-label">Buffering in</p>
                <h3 className="card-title">Coimbatore, Tamil Nadu</h3>
              </div>
            </div>
          </div>

          {/* Column 3: CTA Card */}
          <div className="resume-card cta-card">
            <div className="sparkles">✨</div>
            <h3 className="cta-title">WANNA WORK TOGETHER?</h3>
            <p className="cta-subtitle">My resume is one click away</p>
            <button onClick={handleDownloadResume} className="cta-button">
              Download for free 😊
            </button>
          </div>

          {/* Tools Card - Spans columns 2 & 3 */}
          <div className="resume-card tools-card">
            <p className="tools-label">Tools that pay my bills</p>
            <div className="tools-scroll-container">
              <div className="tools-scroll-track">
                {/* First set of tools */}
                {tools.map((tool, index) => (
                  <div key={`tool-1-${index}`} className="tool-icon">
                    <img src={tool} alt={`Tool ${index + 1}`} />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {tools.map((tool, index) => (
                  <div key={`tool-2-${index}`} className="tool-icon">
                    <img src={tool} alt={`Tool ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
