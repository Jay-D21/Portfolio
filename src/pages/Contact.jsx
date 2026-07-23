import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../components/Icons';

export default function Contact() {
  return (
    <main>
      <div className="contact-header">
        <div className="container-sm">
          <div className="section-label">Contact</div>
          <h1 className="display-lg" style={{ marginBottom: '16px' }}>Let's build something <em>together.</em></h1>
          <p className="body-lg" style={{ maxWidth: '480px' }}>Whether you have a role, a project, or just want to talk about ideas — I'm always up for a conversation. I reply within 24 hours.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="contact-grid">
          {/* LEFT - contact info */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-label">Reach me at</div>
            <div className="contact-links">
              <a href="mailto:jaydeore.work@gmail.com" className="contact-row">
                <Mail size={18} />
                <span>jaydeore.work@gmail.com</span>
              </a>
              <a href="tel:+919309486737" className="contact-row">
                <Phone size={18} />
                <span>+91 9309486737</span>
              </a>
              <a href="https://github.com/Jay-D21" target="_blank" rel="noreferrer" className="contact-row">
                <GitHubIcon size={18} />
                <span>github.com/Jay-D21</span>
              </a>
              <a href="https://linkedin.com/in/jay-deore-50b4b8342" target="_blank" rel="noreferrer" className="contact-row">
                <LinkedInIcon size={18} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://www.instagram.com/jay.deore21/" target="_blank" rel="noreferrer" className="contact-row">
                <InstagramIcon size={18} />
                <span>@jay.deore21</span>
              </a>
              <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="contact-row">
                <Globe size={18} />
                <span>ilabs4u.dpdns.org</span>
              </a>
            </div>

            {/* Availability block */}
            <div style={{ marginTop: '32px', padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--surface)' }}>
              <div className="status-badge" style={{ marginBottom: '10px', display: 'inline-flex' }}>
                <span className="status-dot" />
                Currently available
              </div>
              <p className="body-sm">Open to full-time roles, internships, freelance builds, and interesting conversations. Response time: &lt;24 hours.</p>
            </div>
          </motion.div>

          {/* RIGHT - form */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <form action="mailto:jaydeore.work@gmail.com" method="post" encType="text/plain" className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" type="text" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" name="message" rows="5" placeholder="Tell me what's on your mind..." required></textarea>
              </div>
              <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
