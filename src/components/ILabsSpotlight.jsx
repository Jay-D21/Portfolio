import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

const ILabsSpotlight = () => {
  const clients = [
    {
      name: 'CreatorHub',
      tag: 'Freelance Agency SaaS',
      desc: 'Closed-network marketplace with 3 portals, row-level security, invite-token onboarding, and subscription gating for agencies managing freelance editors.'
    },
    {
      name: 'MCM Franchise',
      tag: 'Franchise Operations PWA',
      desc: 'One-number input auto-calculates raw materials across 30+ outlets. Real-time owner dashboard via WebSocket. Mobile-first, works offline.'
    },
    {
      name: 'Smart Studio Manager',
      tag: 'Studio Ops Platform',
      desc: 'Replaced 10 WhatsApp groups for a video studio. Mandatory shift wrap-up, OTP login, automated payroll, real-time deliverable tracking.'
    }
  ];

  return (
    <section className="section ilabs-section">
      <div className="container">
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="section-label">// venture</p>
          <h2 className="section-title">i Labs</h2>
        </motion.div>

        <motion.div 
          className="glass-card ilabs-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="ilabs-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="ilabs-logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="ilabs-logo" style={{ background: 'var(--accent)', color: 'white', fontWeight: 'bold', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontSize: '1.2rem' }}>iL</div>
              <div>
                <h3 className="ilabs-name" style={{ margin: 0 }}>i Labs</h3>
                <p className="ilabs-tag" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Business Consultancy & Custom Software · Pune</p>
              </div>
            </div>
            
            <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', background: 'var(--accent-glow)', color: 'var(--accent)', textDecoration: 'none', fontWeight: '500' }}>
              Visit i Labs <ExternalLink size={16} />
            </a>
          </div>

          <p className="ilabs-description" style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            We build custom software that replaces WhatsApp groups and spreadsheets. Business consultancy for agencies, franchise chains, and creative studios. From discovery to deployment — we own the full loop.
          </p>

          <motion.div 
            className="ilabs-clients"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
          >
            {clients.map((client, index) => (
              <motion.div key={index} className="glass-card client-card" variants={fadeUp} style={{ padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>{client.name}</h4>
                <span className="client-tag" style={{ display: 'inline-block', fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'var(--border)', borderRadius: '4px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>{client.tag}</span>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{client.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ILabsSpotlight;
