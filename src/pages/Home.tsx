import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import { orgSchema } from '../utils/schemas';

const Home = () => {
  const seoProps = useSEO({
    title: "WebDevGuru — Bespoke Web Design for D2C & SaaS",
    description: "We build conversion-focused websites for D2C brands and SaaS companies that demand authority and performance.",
    schema: orgSchema
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO {...seoProps} />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </motion.div>
  );
};

export default Home;
