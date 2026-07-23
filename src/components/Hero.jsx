import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, ArrowRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="section hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className="hero-badge">
          <span className="hero-badge-dot"></span>
          Building i Labs — Open to opportunities
        </motion.div>

        <motion.h1 variants={fadeUp} className="hero-heading">
          <div>I build things.</div>
          <div>From software to</div>
          <div className="gradient-text">businesses.</div>
        </motion.h1>

        <motion.p variants={fadeUp} className="hero-desc">
          Founder of i Labs. AI/ML engineering student at NMIMS. I take real business chaos — WhatsApp groups, broken spreadsheets, manual calculations — and turn it into software that works.
        </motion.p>

        <motion.div variants={fadeUp} className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="hero-links">
          <a href="https://github.com/Jay-D21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/jay-deore-50b4b8342" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noopener noreferrer" aria-label="i Labs Website">
            <Globe size={20} />
          </a>
          <a href="mailto:jaydeore2121@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
