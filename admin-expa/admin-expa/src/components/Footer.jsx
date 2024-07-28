// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'; // Make sure to create and import this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="brand">
            <img src="https://pbs.twimg.com/profile_images/1276595758934953990/NbHzzi7h_400x400.jpg" className="logo" alt="Expa Logo" />
            <span className="brand-name">EXPA India</span>
          </div>
          <div className="links">
            <div className="section">
              <h2 className="section-title">Resources</h2>
              <ul className="section-links">
                <li>
                  <a href="https://flowbite.com/" className="link">Educate</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="link">Manage</a>
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">Follow us</h2>
              <ul className="section-links">
                <li>
                  <a href="https://www.instagram.com/cadet_expa_india/?hl=en" className="link">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCdXrGifpsSqV8nc7Ss15IcQ" className="link">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">Legal</h2>
              <ul className="section-links">
                <li>
                  <a href="#" className="link">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="link">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2024 EXPA India. All rights reserved.</p>
          <p className="contact-info">Contact us: info@expaindia.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
