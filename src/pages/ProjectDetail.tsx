import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import RevealText from '../components/RevealText';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would normally come from a data source
  const project = {
    title: id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Project Details',
    category: 'Digital Experience',
    description: 'A deep dive into how we transformed this brand\'s digital presence through strategic design and elite engineering.',
    challenge: 'The client needed a scalable solution that didn\'t compromise on visual fidelity or performance.',
    solution: 'We implemented a custom headless architecture paired with a high-performance frontend layer.',
    stats: [
      { label: 'Conversion Rate', value: '+42%' },
      { label: 'Load Speed', value: '0.8s' },
      { label: 'Revenue Growth', value: '156%' }
    ]
  };

  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="project-hero">
        <div className="project-hero-content">
          <motion.button 
            onClick={() => navigate('/')}
            className="back-btn label-mono"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ← Back to Portfolio
          </motion.button>
          
          <RevealText 
            text={project.title} 
            className="project-title" 
            mode="char"
            tag="h1"
          />
          
          <div className="project-meta">
            <span className="label-mono">{project.category}</span>
            <span className="separator">/</span>
            <span className="label-mono">2026</span>
          </div>
        </div>
      </section>

      <section className="project-info">
        <div className="info-grid">
          <div className="info-main">
            <h3>Overview</h3>
            <RevealText text={project.description} className="info-text" tag="p" />
            
            <div className="info-stats">
              {project.stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label label-mono">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="info-details">
            <div className="detail-item">
              <h4>Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="detail-item">
              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-visuals">
        <div className="visual-placeholder">
          <div className="placeholder-content">
            <span className="label-mono">PROJECT VISUAL ASSETS</span>
          </div>
        </div>
      </section>

      <section className="project-footer">
        <RevealText text="Next Project" className="next-label" tag="h4" />
        <MagneticButton>
          <button className="cta-primary">View Case Study</button>
        </MagneticButton>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
