import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="section-label">// about</p>
          <h2 className="section-title">Engineer by degree. Builder by instinct.</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
          >
            <p>
              I'm Jay — a 7th semester AI/ML engineering student at NMIMS MPSTME and the <strong>founder of i Labs</strong>, a business consultancy that builds custom software. I don't just study technology. I <strong>ship it to real clients</strong>.
            </p>
            <p>
              At i Labs, I've run the full loop — from discovery calls with business owners to scoping projects, managing timelines, and deploying production platforms that real teams use every day.
            </p>
            <p>
              I <strong>think in systems</strong>. When a franchise chain was drowning in manual calculations across 30+ outlets, I didn't just build an app — I redesigned the entire workflow. When a video studio lost their only data manager, I built a platform that made that role unnecessary.
            </p>
            <p>
              I'm drawn to the intersection of AI, business, and design. I want to build things that matter — not just technically impressive demos, but products that solve real problems for real people.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { stat: '3+', label: 'Client Products Shipped' },
              { stat: '30+', label: 'Franchise Outlets Served' },
              { stat: '300+', label: 'Monthly Deliverables Managed' },
              { stat: '7th', label: 'Semester, B.Tech AIML' },
            ].map((item, index) => (
              <motion.div key={index} className="glass-card stat-card" variants={fadeUp}>
                <h3>{item.stat}</h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
