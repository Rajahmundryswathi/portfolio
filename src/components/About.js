import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('fade-in-up');
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I'm a driven Computer Science student with a passion for building effective web applications and solving complex problems. 
        I enjoy working on projects that involve both frontend and backend technologies and love participating in hackathons and coding challenges.
      </p>
    </section>
  );
}

export default About;