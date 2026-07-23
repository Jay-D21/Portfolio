import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../components/Icons'
import PhotoCard3D from '../components/PhotoCard3D'
import HeroBackground from '../components/HeroBackground'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main>
      {/* HERO - 2 col grid */}
      <motion.section 
        className="section"
        style={{ position: 'relative', overflow: 'hidden' }}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
      >
        <HeroBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero">
            {/* LEFT */}
            <div className="hero-left">
              <div className="hero-badge">
                <div className="status-badge">
                  <span className="status-dot"/>
                  BUSINESS CONSULTANCY · PUNE, INDIA
                </div>
              </div>
              <h1 className="display-xl hero-title">
                I build<br/>
                things that<br/>
                <em>matter.</em>
              </h1>
              <p className="hero-desc">
                Founder of i Labs. AI/ML engineering student at NMIMS. I take business chaos — WhatsApp groups, broken spreadsheets, manual calculations — and turn it into software that actually works.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-dark">See My Work →</Link>
                <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
              </div>
              <div className="hero-social-row">
                <a href="https://github.com/Jay-D21" target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub"><GitHubIcon size={16}/></a>
                <a href="https://linkedin.com/in/jay-deore-50b4b8342" target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn"><LinkedInIcon size={16}/></a>
                <a href="https://www.instagram.com/jay.deore21/" target="_blank" rel="noreferrer" className="icon-link" aria-label="Instagram"><InstagramIcon size={16}/></a>
                <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="icon-link" aria-label="i Labs"><Globe size={16}/></a>
                <a href="mailto:jaydeore.work@gmail.com" className="icon-link" aria-label="Email"><Mail size={16}/></a>
              </div>
              <div className="hero-built-for">
                <span className="built-for-label">Built for</span>
                <div className="built-for-items">
                  <span>Agencies</span>
                  <span className="built-for-dot">·</span>
                  <span>Franchise Chains</span>
                  <span className="built-for-dot">·</span>
                  <span>Creative Studios</span>
                  <span className="built-for-dot">·</span>
                  <span>Entrepreneurs</span>
                </div>
              </div>
            </div>
            {/* RIGHT - 3D Photo */}
            <div className="hero-right">
              <PhotoCard3D />
            </div>
          </div>
        </div>
      </motion.section>

      {/* i LABS SECTION */}
      <motion.section 
        style={{borderTop:'1px solid var(--border)',padding:'80px 0',background:'var(--bg-alt)'}}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
      >
        <div className="container">
          <div className="section-label">Venture</div>
          <div className="ilabs-grid">
            <div>
              <h2 className="display-md" style={{marginBottom:'16px'}}>i Labs — <em>the company I run</em></h2>
              <p className="body-lg" style={{marginBottom:'24px'}}>Business consultancy that builds custom software. We replace WhatsApp chaos with elegant platforms for agencies, franchise chains, and creative studios.</p>
              <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Visit i Labs →</a>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {/* 3 client cards */}
              {[
                {name:'CreatorHub',type:'Agency SaaS',desc:'Closed-network marketplace managing freelance editor pools for digital agencies.'},
                {name:'MCM Franchise',type:'Operations PWA',desc:'Auto-calculates raw materials across 30+ biryani outlets from a single number.'},
                {name:'Smart Studio Manager',type:'Studio Ops',desc:'Replaced 10 WhatsApp groups for a video studio managing 300+ monthly deliverables.'}
              ].map(c => (
                <div key={c.name} className="card" style={{padding:'20px 24px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px'}}>
                    <span style={{fontWeight:500,color:'var(--ink)',fontSize:'14px'}}>{c.name}</span>
                    <span className="chip">{c.type}</span>
                  </div>
                  <p className="body-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SELECTED WORK PREVIEW */}
      <motion.section 
        style={{padding:'80px 0',borderTop:'1px solid var(--border)'}}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
      >
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'40px'}}>
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="display-md">Things I've <em>built</em></h2>
            </div>
            <Link to="/projects" className="btn btn-outline btn-sm">All Projects →</Link>
          </div>
          <div className="selected-work-grid">
            {[
              {name:'Arogya Sathi',tag:'AI Healthcare',year:'2025',desc:'Multi-agent NLP healthcare platform for rural India. Presented at Avishkar State Convention.'},
              {name:'Smart Library Search',tag:'NLP · Offline',year:'2025',desc:'Fully offline semantic search replacing keyword search in a college library.'},
              {name:'Zero-G Bottle Shooter',tag:'Unity · AI',year:'2025',desc:'3D game with MediaPipe hand gestures + Gemini 2.0 real-time AI commentary.'}
            ].map(p => (
              <div key={p.name} className="card" style={{padding:'28px'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>
                  <span className="chip">{p.tag}</span>
                  <span className="body-sm">{p.year}</span>
                </div>
                <div style={{fontFamily:'var(--serif)',fontSize:'18px',marginBottom:'8px',color:'var(--ink)'}}>{p.name}</div>
                <p className="body-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
