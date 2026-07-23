import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <NavLink to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/logo.png" alt="Jay Deore Logo" style={{ height: '32px', width: 'auto', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400 }}>Jay <em>Deore</em></span>
          </NavLink>
          
          <div className="nav-center">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </div>
          
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <NavLink to="/contact" className="nav-cta">Let's Talk →</NavLink>
            <button className="nav-mobile-btn theme-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={20}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}>
        <button 
          style={{position: 'absolute', top: 20, right: 24, background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer'}} 
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24}/>
        </button>
        <NavLink to="/" end onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
        <NavLink to="/about" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/projects" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>
    </>
  );
}
