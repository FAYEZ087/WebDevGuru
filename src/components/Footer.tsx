import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import ContactForm from './ContactForm';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import './Footer.css';

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="footer">
      <ScrollReveal>
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" data-cursor="Home">
              <span className="logo-text">WEBDEV<span className="text-gold">GURU</span></span>
            </Link>
            <p className="footer-tagline">
              Engineering elite digital experiences for brands that demand authority.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-label">Navigation</h4>
            <ul className="footer-links">
              <li>
                <MagneticButton dataCursor="Services">
                  <a href="/#services" data-cursor="Services">Services</a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Work">
                  <a href="/#work" data-cursor="Work">Work</a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Pricing">
                  <a href="/#pricing" data-cursor="Pricing">Pricing</a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Contact">
                  <button onClick={() => openModal(<ContactForm />)} className="footer-link-btn" data-cursor="Contact">Contact</button>
                </MagneticButton>
              </li>
            </ul>
          </div>

          <div className="footer-legal-col">
            <h4 className="footer-label">Legal</h4>
            <ul className="footer-links">
              <li>
                <MagneticButton dataCursor="Privacy">
                  <Link to="/privacy" data-cursor="Privacy">Privacy Policy</Link>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Terms">
                  <Link to="/terms-of-service" data-cursor="Terms">Terms of Service</Link>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Refund">
                  <Link to="/refund" data-cursor="Refund">Refund Policy</Link>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton dataCursor="Cookies">
                  <Link to="/cookies" data-cursor="Cookies">Cookie Policy</Link>
                </MagneticButton>
              </li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="footer-bottom">
          <div className="footer-copy">
            Made with precision by WebDevGuru · © 2026
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
