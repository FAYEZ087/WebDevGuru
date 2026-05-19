import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
  cursor: string;
}

interface NavbarProps {
  customLinks?: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ customLinks }) => {
  const defaultLinks: NavLink[] = [
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" },
    { label: "Services", href: "/#services", cursor: "Services" },
    { label: "Pricing", href: "/#pricing", cursor: "Pricing" }
  ];

  const links = customLinks || defaultLinks;

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/" className="nav-logo" data-cursor="Home">
        <span className="logo-text">WEBDEV<span className="text-gold">GURU</span></span>
      </Link>
      
      <div className="nav-links">
        {links.map((link, i) => (
          <MagneticButton key={i} dataCursor={link.cursor}>
            {link.href.startsWith('/') ? (
              link.href.startsWith('/#') ? (
                <a href={link.href} className="nav-link" data-cursor={link.cursor}>{link.label}</a>
              ) : (
                <Link to={link.href} className="nav-link" data-cursor={link.cursor}>{link.label}</Link>
              )
            ) : (
              <a href={link.href} className="nav-link" data-cursor={link.cursor}>{link.label}</a>
            )}
          </MagneticButton>
        ))}
        <ThemeToggle />
      </div>

      <div className="nav-menu-btn">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
