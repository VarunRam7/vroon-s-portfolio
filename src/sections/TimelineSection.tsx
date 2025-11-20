import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TimelineSection.css';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  emoji: string;
  title: string;
  description: string;
  logo?: string;
}

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const experiences: TimelineItem[] = [
    {
      year: '2017',
      emoji: '👨‍🎓',
      title: 'Schooling',
      description:
        "Studied in an ISC school with a strong focus on cracking JEE to enter IIT/NIT. Though I fell short of the cutoff, the journey strengthened my math, logic, and computer fundamentals — the base that shaped everything that followed",
    },
    {
      year: '2019',
      emoji: '🎓',
      title: 'College',
      description:
        "Joined PSG Institute of Technology for a 5-year integrated MSc in Theoretical Computer Science. Achieved a solid 8.6 CGPA while balancing intense coursework with badminton, basketball, and campus life. The program also included two mandatory internships",
    },
    {
      year: '2021',
      emoji: '👦🖥️',
      title: 'Frontend developer intern in FoxSense Innovations',
      description:
        "Took my first real step into development at FoxSense Innovations, working as a frontend developer for 6 months. I contributed to Vigil, an all-in-one monitoring tool that tracks APIs, jobs, and exceptions, presenting them in a clear dashboard so users don’t have to dig through logs",
    },
    {
      year: '2022',
      emoji: '🧑🏻‍💻',
      title: 'Frontend developer part-time in Xpresslane',
      description:
        "Continued development part-time for a period of 2 months during college at Xpresslane, contributing to frontend features after classes. This phase sharpened my consistency and taught me how to balance academics and industry work",
    },
    {
      year: '2022',
      emoji: '📷✨',
      title: 'Hackathon Project - Everstory (Instagram Clone)',
      description:
        "Everstory is a memory-driven social platform with a React + TypeScript frontend and a NestJS microservices backend (Auth, Image, Friendship). Includes Docker, JWT auth, and Cloudinary for media",
    },
    {
        year: '2022',
        emoji: '💻',
        title: 'Freelancing',
        description:
          'I explored freelancing in 2022 and worked with a Thailand-based client on a website project. However, after graduating and joining a startup, my workload didn’t allow me the time to take on additional freelance opportunities',
    },
    {
      year: '2023',
      emoji: '🛠️',
      title: 'Full stack developer intern in FoxSense Innovations',
      description:
        "Returned to FoxSense Innovations for my final internship, this time focusing on backend development and gaining hands-on exposure to some of the AWS services. Over 6 months, I worked across multiple modules, strengthened my backend fundamentals, and earned a PPO for my performance",
    },
    {
      year: '2024',
      emoji: '🚀',
      title: 'Associate Software Engineer in FoxSense Innovations',
      description:
        "Now working full-time as a Full Stack Developer, contributing end-to-end on multiple products and client projects. I mentor interns, assist in campus hiring, and work across the stack with AWS involvement. My primary work is on InsureTrek — a platform helping insurance agents manage state licenses, appointments, and upline connections. The product has grown to 500+ paying users and generates ~$7,000/month, achieving this within just 2 years (1 year live in production).",
    },
  ];
  

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    // Calculate the scroll distance with extra buffer for last item
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = trackWidth - viewportWidth + (viewportWidth * 0.3);

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(track, {
      x: -(trackWidth - viewportWidth),
      ease: 'none',
    });

    // Animate timeline items on scroll
    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0.3,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: item,
            containerAnimation: tl,
            start: 'left 80%',
            end: 'left 30%',
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="timeline-section" ref={containerRef} id="experience">
      <div className="timeline-track" ref={trackRef}>
        <div className="timeline-header">
          <p className="timeline-quote">
            "Every experience is basically a new version update — each one patches bugs and unlocks new features in me"
          </p>
        </div>

        <div className="timeline-items">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-emoji">{exp.emoji}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
