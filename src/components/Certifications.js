import React, { useEffect, useRef, useState } from 'react';
import './Certifications.css';

function Certifications() {
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
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const certifications = [
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "2023",
      link: "#",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      link: "#",
    },
    {
      title: "Java Masterclass 2025",
      issuer: "Udemy",
      date: "2025",
      link: "#",
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS",
      date: "2024",
      link: "#",
    },
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "AWS",
      date: "2025",
      link: "#",
    },
  ];

  return (
    <section
      id="certifications"
      className={`certifications-section ${visible ? 'fade-in-up' : ''}`}
      ref={sectionRef}
    >
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map(({ title, issuer, date, link }, index) => (
          <li key={index} className="certification-item">
            <h3>{title}</h3>
            <p><strong>Issuer:</strong> {issuer}</p>
            <p><strong>Date:</strong> {date}</p>
            
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
