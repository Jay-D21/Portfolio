import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className="section-label">// contact</div>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="contact-heading">Let's build something together.</h2>
            <p className="contact-text">
              Whether you have a role, a project, or just want to talk about ideas — I'm always up for a conversation. I reply within 24 hours.
            </p>
            
            <div className="contact-links-list">
              <a href="mailto:jaydeore2121@gmail.com" className="contact-link-item">
                <Mail size={20} />
                <span>jaydeore2121@gmail.com</span>
              </a>
              <a href="tel:+919405332721" className="contact-link-item">
                <Phone size={20} />
                <span>+91 94053 32721</span>
              </a>
              <a href="https://github.com/Jay-D21" target="_blank" rel="noreferrer" className="contact-link-item">
                <GitHubIcon size={20} />
                <span>github.com/Jay-D21</span>
              </a>
              <a href="https://linkedin.com/in/jay-deore-50b4b8342" target="_blank" rel="noreferrer" className="contact-link-item">
                <LinkedInIcon size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="contact-link-item">
                <Globe size={20} />
                <span>ilabs4u.dpdns.org</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form action="mailto:jaydeore2121@gmail.com" method="post" encType="text/plain" className="contact-form glass-card">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" placeholder="What's on your mind?" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
