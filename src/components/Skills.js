import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillsByCategory = {
  'Programming Languages': ['Java', 'C++', 'Python'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'React'],
  'Frameworks': ['Flask', 'Django', 'Pandas', 'MySQL'],
  'Tools': ['Git', 'VS Code'],
};

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current.classList.add('fade-in-up');
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2>My Skills</h2>
      <div className="categories-container">
        {Object.entries(skillsByCategory).map(([category, skills], catIndex) => (
          <div key={catIndex} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
