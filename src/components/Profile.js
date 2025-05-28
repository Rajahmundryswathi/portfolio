import React, { useEffect, useRef } from 'react';
import { FaFileDownload, FaEnvelope, FaLinkedin } from 'react-icons/fa';  // Import icons
import './Profile.css';
import profileImage from '../assets/profileimg.jpg';

function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!profileRef.current) return;

      const rect = profileRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.9) {
        profileRef.current.classList.add('fade-in-up');
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="profile" ref={profileRef} className="profile-section">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Swathi Rajahmundry"
          className="profile-pic"
        />
        <div className="profile-info">
          <h1>Swathi Rajahmundry</h1>
          <p>Computer Science Student | Web Developer | Problem Solver</p>
          <div className="profile-buttons">
            <a href="/resume.pdf" download className="resume-btn">
              <FaFileDownload style={{ marginRight: '8px' }} /> Download Resume
            </a>
            <a href="mailto:swathiswathi1645@gmail.com" className="email-link">
              <FaEnvelope style={{ marginRight: '8px' }} /> Email Me
            </a>
            <a href="https://linkedin.com/in/swathi-rajahmundry-009051290" target="_blank" rel="noreferrer">
              <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
