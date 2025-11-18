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
        "Studied in an ISC school with a strong focus on cracking JEE to enter IIT/NIT. Though I fell short of the cutoff, the journey strengthened my math, logic, and computer fundamentals — the base that shaped everything that followed.",
    },
    {
      year: '2019',
      emoji: '🎓',
      title: 'College',
      description:
        "Joined PSG Institute of Technology for a 5-year integrated MSc in Theoretical Computer Science. Achieved a solid 8.6 CGPA while balancing intense coursework with badminton, basketball, and campus life. The program also included two mandatory internships.",
    },
    {
      year: '2021',
      emoji: '💻',
      title: 'Frontend developer intern in FoxSense Innovations',
      description:
        "Took my first real step into development at FoxSense Innovations. Worked as a frontend developer for 6 months, building UI components and understanding how real-world projects operate.",
    },
    {
      year: '2022',
      emoji: '🧑🏻‍💻',
      title: 'Frontend developer part-time in Xpresslane',
      description:
        "Continued development part-time during college at Xpresslane, contributing to frontend features after classes. This phase sharpened my consistency and taught me how to balance academics and industry work.",
    },
    {
        year: '2022',
        emoji: '💻',
        title: 'Freelancing',
        description:
          'I explored freelancing in 2022 and worked with a Thailand-based client on a website project. However, after graduating and joining a startup, my workload didn’t allow me the time to take on additional freelance opportunities.',
    },
    {
      year: '2023',
      emoji: '🛠️',
      title: 'Full stack developer intern in FoxSense Innovations',
      description:
        "Returned to FoxSense Innovations for my final internship, this time stepping into backend development and exploring AWS a bit more. After 6 months, I received a PPO and transitioned into a full-time Full Stack Developer.",
    },
    {
      year: '2024',
      emoji: '🚀',
      title: 'Associate Software Engineer in FoxSense Innovations',
      description:
        "Now working full-time on multiple products and client projects, handling both frontend and backend modules. I mentor interns, represent the company in hiring at my own college, and contribute across the stack with AWS knowledge — continuing to grow into a well-rounded engineer.",
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
