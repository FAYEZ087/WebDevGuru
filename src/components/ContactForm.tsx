import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { track } from '../utils/analytics';
import './ContactForm.css';

const steps = [
  { id: 'identity', label: 'Identity', fields: ['name', 'company', 'phone'] },
  { id: 'contact', label: 'Contact', fields: ['email', 'timezone'] },
  { id: 'schedule', label: 'Schedule', fields: ['preferredDate', 'preferredTime', 'alternateDate', 'alternateTime'] },
  { id: 'project', label: 'Scope', fields: ['projectType', 'budget', 'timeline'] },
  { id: 'details', label: 'Details', fields: ['message'] }
];

const getDefaultTimezone = () => (
  typeof Intl !== 'undefined' && typeof Intl.DateTimeFormat === 'function'
    ? Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    : 'UTC'
);

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Conversion Website',
    budget: '₹35,000 - ₹1,00,000',
    timeline: '2-4 weeks',
    timezone: getDefaultTimezone(),
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    message: ''
  }));

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
      track('contact_form_submitted', { 
        projectType: formData.projectType, 
        budget: formData.budget,
        timeline: formData.timeline,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        timezone: formData.timezone
      });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(0);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: 'Conversion Website',
          budget: '₹35,000 - ₹1,00,000',
          timeline: '2-4 weeks',
          timezone: getDefaultTimezone(),
          preferredDate: '',
          preferredTime: '',
          alternateDate: '',
          alternateTime: '',
          message: ''
        });
      }, 3000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-steps-indicator">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={`step-dot ${index <= currentStep ? 'active' : ''}`}
            onClick={() => index < currentStep && setCurrentStep(index)}
          >
            <span className="step-label label-mono">{step.label}</span>
          </div>
        ))}
      </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentStep === 0 && (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="label-mono">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      placeholder="Where do you work?" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="label-mono">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+91 00000 00000" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="label-mono">Work Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="hello@company.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Timezone</label>
                    <select name="timezone" value={formData.timezone} onChange={handleChange}>
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="UTC">UTC</option>
                      <option value="Europe/London">Europe/London (GMT/BST)</option>
                      <option value="America/New_York">America/New_York (ET)</option>
                      <option value="America/Los_Angeles">America/Los_Angeles (PT)</option>
                      <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="label-mono">Preferred Date</label>
                    <input 
                      type="date" 
                      name="preferredDate" 
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Preferred Time</label>
                    <input 
                      type="time" 
                      name="preferredTime" 
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Alternate Date</label>
                    <input 
                      type="date" 
                      name="alternateDate" 
                      value={formData.alternateDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Alternate Time</label>
                    <input 
                      type="time" 
                      name="alternateTime" 
                      value={formData.alternateTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="label-mono">Project Focus</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange}>
                      <option>Conversion Website</option>
                      <option>SaaS Landing Page</option>
                      <option>D2C Shopify Experience</option>
                      <option>Custom Scaling</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="label-mono">Projected Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option>₹15,000 - ₹35,000</option>
                      <option>₹35,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹3,00,000</option>
                      <option>₹3,00,000+</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="label-mono">Target Launch Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}>
                      <option>ASAP</option>
                      <option>2-4 weeks</option>
                      <option>1-2 months</option>
                      <option>3+ months</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="form-group full-width">
                  <label className="label-mono">Project Objectives</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                  placeholder="What breakthrough are we targeting?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="form-controls">
          {currentStep > 0 && (
            <button type="button" className="btn-back label-mono" onClick={prevStep}>
              Back
            </button>
          )}
          
          <MagneticButton>
            <button 
              type="submit" 
              className={`cta-primary sheen ${isSubmitted ? 'loading' : ''}`}
              disabled={isSubmitted}
            >
              <span className="btn-label">
                <span className="btn-text-reveal" data-text={
                  isSubmitted ? "Transmitting..." : 
                  currentStep === steps.length - 1 ? "Initialize Partnership" : "Continue"
                }>
                  {isSubmitted ? "Transmitting..." : 
                   currentStep === steps.length - 1 ? "Initialize Partnership" : "Continue"}
                </span>
              </span>
            </button>
          </MagneticButton>
        </div>
      </form>

        {isSubmitted && (
          <motion.div 
            className="submission-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Request Received</h3>
              <p>We will confirm your scope call time and follow up within 24 hours.</p>
            </div>
          </motion.div>
        )}
    </div>
  );
};

export default ContactForm;
