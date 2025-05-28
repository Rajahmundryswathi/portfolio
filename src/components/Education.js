import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Technology",
      institution: "Sri Vasavi Engineering College",
      year: "2022 – 2026",
      grade: "CGPA: 9.00 (82%)"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "S.K.S.D. Mahila Kalasala",
      year: "2020 – 2022",
      grade: "Marks: 706 (70%)"
    },
    {
      degree: "SSC",
      institution: "M.V.N.Z.P. High School",
      year: "2015 – 2020",
      grade: "Marks: 548 (91.3%)"
    }
  ];

  return (
    <section
      id="education"
      className={`education-section ${visible ? 'fade-in-up' : ''}`}
      ref={sectionRef}
    >
      <h2>Education</h2>
      <ul className="education-list">
        {educationData.map((item, index) => (
          <li key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p><strong>Institution:</strong> {item.institution}</p>
            <p><strong>Year:</strong> {item.year}</p>
            <p><strong>Grade:</strong> {item.grade}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
