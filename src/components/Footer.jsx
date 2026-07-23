import { NavLink } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <NavLink to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/assets/logo.png" alt="Jay Deore Logo" style={{ height: '32px', width: 'auto', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'var(--serif)', fontSize: '17px', fontWeight: 400 }}>Jay <em>Deore</em></span>
            </NavLink>
            <p className="footer-copy" style={{marginTop: '6px'}}>© 2026 · Built with purpose</p>
          </div>
          
          <div style={{display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap'}}>
            <span className="footer-copy" style={{marginRight: '8px'}}>Find me on</span>
            <a href="https://github.com/Jay-D21" target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
              <GitHubIcon size={16}/>
            </a>
            <a href="https://linkedin.com/in/jay-deore-50b4b8342" target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
              <LinkedInIcon size={16}/>
            </a>
            <a href="https://www.instagram.com/jay.deore21/" target="_blank" rel="noreferrer" className="icon-link" aria-label="Instagram">
              <InstagramIcon size={16}/>
            </a>
            <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="icon-link" aria-label="i Labs">
              <Globe size={16}/>
            </a>
          </div>
          
          <div className="footer-links" style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <NavLink to="/about" className="footer-copy" style={{transition: 'color 0.2s'}}>About</NavLink>
            <NavLink to="/projects" className="footer-copy">Projects</NavLink>
            <NavLink to="/contact" className="footer-copy">Contact</NavLink>
            <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="footer-copy">i Labs ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
