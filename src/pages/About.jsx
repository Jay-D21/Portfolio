import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <main>
      {/* Header */}
      <motion.div 
        className="about-header"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="container-sm">
          <div className="section-label">About</div>
          <h1 className="display-lg" style={{marginBottom:'20px'}}>Engineer by degree. <em>Builder by instinct.</em></h1>
          <p className="body-lg" style={{maxWidth:'560px'}}>I'm Jay — a 7th semester AI/ML student at NMIMS and the founder of i Labs. I don't just study technology. I ship it to real clients.</p>
        </div>
      </motion.div>

      {/* Main content grid */}
      <motion.div 
        className="container"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="about-grid">
          {/* Left - content */}
          <div className="about-content">
            {/* 4 paragraphs */}
            <p>At <strong>i Labs</strong>, I've run the full loop — from discovery calls with business owners to scoping projects, managing timelines, and deploying production platforms that real teams use every day.</p>
            <p>I think in <strong>systems</strong>. When a franchise chain was drowning in manual calculations across 30+ outlets, I didn't just build an app — I redesigned the entire workflow. When a video studio lost their only data manager, I built a platform that made that role unnecessary.</p>
            <p>I'm drawn to the intersection of <em>AI, business, and design</em>. I want to build things that matter — not just technically impressive demos, but products that solve real problems for real people.</p>
            <p>Outside code, I'm exploring <strong>systems thinking</strong>, psychology, and philosophy. I believe the best engineers understand people as well as they understand machines.</p>
            
            <div className="philosophy-quote">
              <blockquote>"Depth over noise. Curiosity over certainty. Systems over shortcuts."</blockquote>
              <cite>— Jay's core philosophy</cite>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {[
                {num:'3+',label:'Client Products Shipped'},
                {num:'30+',label:'Franchise Outlets Served'},
                {num:'300+',label:'Monthly Deliverables Managed'},
                {num:'7th',label:'Semester, B.Tech AIML'},
              ].map(s => (
                <div key={s.label} className="stat-item">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - photo */}
          <div className="about-photo-wrap">
            <img src="/assets/jay.jpg" alt="Jay Deore" className="about-photo" />
            <p className="about-photo-caption">Jay Deore · NMIMS MPSTME, Shirpur</p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div 
        className="skills-section"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="container">
          <div className="section-label">Skills</div>
          <h2 className="display-md" style={{marginBottom:'8px'}}>What I <em>work with</em></h2>
          <div className="skills-grid-3">
            {[
              {title:'AI / Machine Learning',items:['Python','Machine Learning','Deep Learning','NLP & GenAI','LLMs & RAG','Agentic AI','Prompt Engineering','Reinforcement Learning','Computer Vision','Sentence-Transformers']},
              {title:'Full-Stack Development',items:['JavaScript / TypeScript','Next.js & React','Node.js & FastAPI','Supabase & PostgreSQL','MongoDB & Firebase','Docker & REST APIs','Git & CI/CD','PWA Development']},
              {title:'Business & Operations',items:['Client Discovery','Scoping & Proposals','Process Design','Systems Thinking','Business Consulting','Power BI & Analytics','Project Management','Technical Writing']},
            ].map(g => (
              <div key={g.title}>
                <div className="skill-group-title">{g.title}</div>
                <ul className="skill-list">{g.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div 
        style={{padding:'60px 0',borderTop:'1px solid var(--border)'}}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="container">
          <div className="section-label">Education</div>
          <h2 className="display-md" style={{marginBottom:'28px'}}>Where I <em>study</em></h2>
          <div className="edu-card">
            <div>
              <div className="edu-name">NMIMS MPSTME, Shirpur</div>
              <div className="edu-degree">B.Tech in Artificial Intelligence & Machine Learning</div>
              <div className="chips-row" style={{marginTop:'10px'}}>
                {['ML','Deep Learning','NLP','Reinforcement Learning','DBMS','Big Data Analytics','Signal & Image Processing'].map(s=><span key={s} className="chip">{s}</span>)}
              </div>
            </div>
            <div className="edu-year">2023 – 2027</div>
          </div>
          <div className="edu-card" style={{marginTop:'12px'}}>
            <div>
              <div className="edu-name">Avishkar Research Convention</div>
              <div className="edu-degree">Presenter — Maharashtra State Inter-University · Arogya Sathi project</div>
            </div>
            <div className="edu-year">2025</div>
          </div>
          <div className="edu-card" style={{marginTop:'12px'}}>
            <div>
              <div className="edu-name">Yugantar Hackathon</div>
              <div className="edu-degree">Participant</div>
            </div>
            <div className="edu-year">2025</div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        style={{padding:'80px 0',background:'var(--bg-alt)',borderTop:'1px solid var(--border)'}}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <div className="container-sm" style={{textAlign:'center'}}>
          <h2 className="display-md" style={{marginBottom:'16px'}}>Want to work <em>together?</em></h2>
          <p className="body-lg" style={{marginBottom:'32px',maxWidth:'420px',margin:'0 auto 32px'}}>Whether it's a role, a project, or just a conversation — I'm always open.</p>
          <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-dark">Get in Touch →</Link>
            <a href="https://ilabs4u.dpdns.org" target="_blank" rel="noreferrer" className="btn btn-outline">See i Labs</a>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
