import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import './Portfolio.css';

const projects = [
  {
    id: "aura-luxury",
    title: "Aura Luxury",
    category: "D2C E-commerce",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1200",
    metric: "+340% Conversion Rate",
    size: "large"
  },
  {
    id: "vortex-saas",
    title: "Vortex SaaS",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    metric: "5.2x ROAS",
    size: "small"
  },
  {
    id: "nova-skincare",
    title: "Nova Skincare",
    category: "Health & Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    metric: "+210% Qualified Leads",
    size: "small"
  },
  {
    id: "zenith-watch",
    title: "Zenith Watch Co.",
    category: "Luxury Goods",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    metric: "4.2x Avg ROI",
    size: "large"
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="portfolio">
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">Our Work</span>
        </ScrollReveal>
        <RevealText text="Results, Not Just Pixels." className="section-title" tag="h2" />
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <Link to={`/project/${project.id}`} className="project-link" data-cursor="View">
              <TiltCard 
                className={`project-card ${project.size} sheen`}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay"></div>
                  
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    
                    <div className="project-metric">
                      <span className="metric-value">{project.metric}</span>
                    </div>
                  </div>
                  
                  <div className="project-view-btn">
                    <span className="view-text">View Case Study</span>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="portfolio-footer">
        <button className="view-all-btn" data-cursor="All">
          View All Work <span className="arrow">→</span>
        </button>
      </ScrollReveal>
    </section>
  );
};

export default Portfolio;
