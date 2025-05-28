import React, { useEffect, useRef, useState } from 'react';
import './Achievements.css';

function Achievements() {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const achievements = [
    {
      title: 'Academic Excellence - 3rd Semester',
      description: 'Received Academic Excellence certificate for achieving GPA 9.34 in 3rd semester.',
    },
    {
      title: 'Smart India Hackathon',
      description: 'Participated in Smart India Hackathon and other internal hackathons.',
    },
    {
      title: 'Volleyball Achievements',
      description: 'Actively participated in volleyball tournaments and won several accolades.',
    },
    {
      title: 'Technical coordinator',
      description: 'Student Coordinator for department-level college fest, handling event planning and execution.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        achievements.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, index]);
          }, index * 300); // delay for sequential reveal
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <h2>Achievements & Activities</h2>
      <ul className="timeline">
        {achievements.map(({ title, description }, index) => (
          <li
            key={index}
            className={`timeline-item ${visibleItems.includes(index) ? 'fade-in-up' : ''}`}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <div className="timeline-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
