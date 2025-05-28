import React, { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        projectsRef.current.classList.add('fade-in-up');
      }
    }, { threshold: 0.3 });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projectList = [
    {
      title: 'Content-Based Library Management System',
      description: 'A smart library search system where users can find books by content, keywords, or rack number.',
    }
    // Add more projects here...
  ];

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {/* <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> */}
              {/* Optional live demo link */}
              {/* <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;