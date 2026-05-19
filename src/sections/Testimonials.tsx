import TiltCard from '../components/TiltCard';
import { Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import './Testimonials.css';

const testimonials = [
  {
    quote: "WebDevGuru didn't just build a website; they built a revenue engine. Our conversion rate tripled within a month of launch.",
    author: "Arjun Mehta",
    position: "CEO, Aura Luxury India"
  },
  {
    quote: "The precision and attention to detail are unmatched. They understand the nuances of premium D2C brands better than anyone.",
    author: "Ishita Sharma",
    position: "Founder, Nyra Skincare"
  },
  {
    quote: "Elite execution. They delivered a complex SaaS landing page in record time without compromising on a single pixel.",
    author: "Rohan Kapoor",
    position: "CTO, Vortex Tech"
  },
  {
    quote: "Working with them was a masterclass in digital craftsmanship. The ROI was evident from day one.",
    author: "Ananya Iyer",
    position: "Marketing Director, Zenith Retail"
  },
  {
    quote: "They turned our vision into a digital masterpiece. It's not just a site; it's a statement.",
    author: "Vikram Singh",
    position: "Founder, ArchiTech Studio"
  },
  {
    quote: "High-performance engineering coupled with world-class design. Truly the best in the business.",
    author: "Pooja Verma",
    position: "Product Lead, FlowState India"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">Client Results</span>
        </ScrollReveal>
        <RevealText text="What the Best Say About Us." className="section-title" tag="h2" />
      </div>

      <ScrollReveal className="testimonials-marquee-container" delay={0.2}>
        <div className="testimonials-track">
          {/* Duplicate the array for seamless looping */}
          {[...testimonials, ...testimonials].map((t, index) => (
            <TiltCard 
              key={index}
              className="testimonial-card sheen"
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              
              <p className="testimonial-quote">"{t.quote}"</p>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{t.author}</h4>
                  <p className="author-position">{t.position}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Testimonials;
