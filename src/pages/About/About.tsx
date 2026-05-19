import { useModal } from '../../context/ModalContext';
import Navbar from '../../components/Navbar';
import ScrollReveal from '../../components/ScrollReveal';
import RevealText from '../../components/RevealText';
import MagneticButton from '../../components/MagneticButton';
import TiltCard from '../../components/TiltCard';
import ContactForm from '../../components/ContactForm';
import SEO from '../../components/SEO';
import { useSEO } from '../../hooks/useSEO';
import { track } from '../../utils/analytics';
import { useEffect } from 'react';
import './About.css';

const About = () => {
  const { openModal } = useModal();

  useEffect(() => {
    track('page_view', { path: '/about' });
  }, []);

  const seoProps = useSEO({
    title: "About WebDevGuru — The Studio Behind the Site",
    description: "WebDevGuru is a one-person studio obsessed with the intersection of engineering precision and visual storytelling."
  });

  const navLinks = [
    { label: "Home", href: "/", cursor: "Home" },
    { label: "Work", href: "/work", cursor: "Work" },
    { label: "About", href: "/about", cursor: "About" }
  ];

  const stats = [
    "Founded 2023",
    "48 Projects",
    "₹12Cr+ Revenue Generated",
    "100% Remote"
  ];

  const philosophy = [
    { 
      title: "Precision Over Polish", 
      desc: "We don't make pretty brochures. We engineer marketing machines." 
    },
    { 
      title: "Speed Is Strategy", 
      desc: "21-day delivery isn't a gimmick. Velocity compounds. Launch fast, iterate faster." 
    },
    { 
      title: "You Own Everything", 
      desc: "Full IP transfer on final payment. No lock-in. No surprises." 
    }
  ];

  const techPills = ["React + Vite", "Three.js / WebGL", "CRO-First Design"];

  return (
    <div className="about-page">
      <SEO {...seoProps} />
      <Navbar customLinks={navLinks} />

      <section className="about-hero">
        <ScrollReveal>
          <span className="label-mono gold">ABOUT THE STUDIO</span>
        </ScrollReveal>
        <RevealText 
          text="Built by a Builder. For Builders."
          tag="h1"
          className="about-title"
        />
        <ScrollReveal delay={0.4}>
          <p className="about-subtext">
            WebDevGuru is a one-person studio obsessed with the intersection of engineering precision and visual storytelling. No bloated agency teams. No account managers. Just a developer who treats every project like it's his own company.
          </p>
        </ScrollReveal>
        
        <div className="about-stat-strip">
          <div className="stat-track">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="stat-group">
                {stats.map((stat, idx) => (
                  <span key={idx} className="stat-item">
                    {stat}
                    {idx < stats.length - 1 && <span className="stat-dot"></span>}
                  </span>
                ))}
                <span className="stat-dot"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-grid">
          <ScrollReveal className="founder-card-wrapper">
            <div className="founder-visual-card">
              <span className="label-mono">FOUNDER</span>
              <div className="founder-placeholder">
                {/* Silhouette/Avatar div */}
                <div className="silhouette-mask"></div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="founder-content">
            <ScrollReveal>
              <h2 className="founder-name">Fayez</h2>
              <span className="founder-title">Designer. Developer. Founder.</span>
              <p className="founder-bio">
                I started WebDevGuru because I was tired of seeing great products fail because of bad websites. I'm a CS student specializing in AI/ML who builds full-stack products — and I bring that same engineering mindset to every client site. When I take your project, I'm the one writing the code, designing the screens, and obsessing over your conversion rate at 2am.
              </p>
              
              <div className="tech-pills">
                {techPills.map((pill, i) => (
                  <span key={i} className="tech-pill">{pill}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="philosophy-section section-padding">
        <ScrollReveal>
          <span className="label-mono">CORE VALUES</span>
          <h2 className="section-title">Our Philosophy</h2>
        </ScrollReveal>
        
        <div className="philosophy-grid">
          {philosophy.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TiltCard className="philosophy-card sheen">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="about-cta-section">
        <ScrollReveal>
          <h2>Sound like the right fit?</h2>
          <MagneticButton dataCursor="Book">
              <button 
                onClick={() => {
                  track('hero_cta_clicked', { source: 'about_founder' });
                  openModal(<ContactForm />);
                }} 
                className="cta-button-main sheen"
              >
              <span className="btn-label">
                <span className="btn-text-reveal" data-text="Book Scope Call">Book Scope Call</span>
              </span>
            </button>
          </MagneticButton>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default About;
