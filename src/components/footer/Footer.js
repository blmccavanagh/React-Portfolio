import React from 'react';
import './Footer.css';
import email from '../../images/icons/email.PNG';

export default function Footer() {
  return (
    <div>
          <footer id="footer" className="handwriting shadow px-10 shadow-2xl"><span className="glow">Made by </span><span>B.</span>
          <br />
        <div className="grid grid-cols-4 lg:grid-cols-8 grid-rows-2 lg:grid-rows-1 gap-2">
            
            <a href="tel:+61-0466-265-845"
                alt="A styled telephone Icon with a phone link to contact +61-466-265-845."><i class="fas fa-mobile-alt"></i></a>
            <a href="mailto:b@justcallmeb.com" className="object-scale-down"><i class="fas fa-envelope-open"></i></a>
            <a href="https://www.instagram.com/exolvoppt" target="_blank" className="object-scale-down"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/blmccavanagh" className="object-scale-down"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/blmccavanagh"
                alt="A styled Linkedin.com icon providing a hyperlink to the website." className="object-scale-down"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/blmccavanagh" className="object-scale-down"><i class="fab fa-github"></i></a>
            <a href="assets/download-items/resume.pdf" download="Bridget McCavanagh - Resume"
                alt="A styled document icon providing a hyperlink to a resume document download."><i class="fas fa-file"></i></a>
        </div>
    </footer>
    <br />
    </div>
      
  );
}