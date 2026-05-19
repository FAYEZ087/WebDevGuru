import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import RevealText from '../components/RevealText';
import './FAQ.css';

const faqs = [
  {
    question: "What is your typical delivery timeline?",
    answer: "Our standard 'Launch' and 'Growth' packages are delivered within 21 days from the moment the scope is finalized and the deposit is paid."
  },
  {
    question: "What is your revision policy?",
    answer: "We offer unlimited revisions during the design phase to ensure the final product perfectly aligns with your brand's vision and authority."
  },
  {
    question: "What exactly is included in the build?",
    answer: "Every build includes custom editorial design, mobile optimization, high-performance engineering, SEO foundation, and training on how to manage your content."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we provide 30 days of complimentary technical support post-launch. Extended maintenance plans are available for ongoing optimization."
  },
  {
    question: "What is your payment structure?",
    answer: "We typically operate on a 50% upfront and 50% upon completion model. For custom 'Scale' projects, we offer milestone-based payments."
  },
  {
    question: "Which technology stack do you use?",
    answer: "We specialize in React, Next.js, and custom Shopify builds (Hydrogen/Liquid) to ensure maximum performance and scalability."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="section-header">
        <ScrollReveal>
          <span className="label-mono">Common Inquiries</span>
        </ScrollReveal>
        <RevealText text="Transparent Answers for Elite Partners." className="section-title" tag="h2" />
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                data-cursor="FAQ"
              >
                <span className="question-text">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-gold" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
