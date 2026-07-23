import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Dumbbell, Gamepad2, BarChart3, Cpu, FileText, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Smart Library Search',
    category: 'AI · Library · 2025',
    icon: BookOpen,
    desc: 'Fully offline semantic search using Sentence-Transformers with conversational memory. Zero cloud dependency. Replaced keyword-based PDF searching for a college library.',
    tags: ['Python', 'NLP', 'Sentence-Transformers', 'Offline']
  },
  {
    name: 'AuraFit',
    category: 'AI · Fitness · 2026',
    icon: Dumbbell,
    desc: 'Edge-assisted multimodal AI fitness training platform. Processes physical activity through computer vision and provides intelligent personalized feedback.',
    tags: ['AI/ML', 'Computer Vision', 'Edge Computing']
  },
  {
    name: 'Zero-G Bottle Shooter',
    category: 'Game Dev · AI · 2025',
    icon: Gamepad2,
    desc: 'Unity 3D game with hand-gesture controls via MediaPipe and real-time AI commentary using Gemini 2.0 Flash. Built for a university project.',
    tags: ['Unity', 'C#', 'MediaPipe', 'Gemini API']
  },
  {
    name: 'Crompton Sales Dashboard',
    category: 'Analytics · 2024',
    icon: BarChart3,
    desc: 'Power BI dashboard analyzing regional, product, and customer sales trends for Crompton business decision-making.',
    tags: ['Power BI', 'Analytics']
  },
  {
    name: 'Drone Propeller Optimization',
    category: 'Hardware · AI · 2024',
    icon: Cpu,
    desc: 'Applied multi-objective evolutionary algorithm (MOEA/D) to optimize drone propeller design balancing weight vs thrust.',
    tags: ['Python', 'MOEA/D', 'Optimization']
  },
  {
    name: 'Extractive Text Summariser',
    category: 'AI · NLP · 2024',
    icon: FileText,
    desc: 'Team project: NLP pipeline for automatic extractive summarisation of documents.',
    tags: ['Python', 'NLP', 'ML']
  }
];

const clientWork = [
  {
    name: 'CreatorHub',
    category: 'Client Work · SaaS',
    desc: 'Closed-network SaaS marketplace for digital agencies to manage freelance editor pool. 3 portals (Super Admin, Agency, Editor), row-level security, invite-token onboarding, subscription gating, full audit trail.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL']
  },
  {
    name: 'MCM Franchise System',
    category: 'Client Work · PWA',
    desc: 'Mobile-first PWA for a 30+ outlet biryani chain. Manager enters one number (kg produced); system auto-calculates all raw material consumption. Real-time owner dashboard via Supabase Realtime WebSocket.',
    tags: ['PWA', 'Supabase', 'Recharts']
  },
  {
    name: 'Smart Studio Manager (SSM)',
    category: 'Client Work · Operations',
    desc: 'Replaced 10 WhatsApp groups + 1 Excel file for a video editing startup managing 9 editors, 18+ clients, 300+ monthly deliverables. Mandatory shift wrap-up, OTP login, automated payroll triggers.',
    tags: ['Next.js', 'Recharts']
  }
];

export default function Projects() {
  return (
    <main>
      <div className="projects-header">
        <div className="container">
          <div className="section-label">Projects</div>
          <h1 className="display-lg" style={{ marginBottom: '16px' }}>Things I've <em>built.</em></h1>
          <p className="body-lg" style={{ maxWidth: '520px' }}>Real products for real problems. From AI healthcare to franchise operations — everything here has shipped or been presented publicly.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="projects-grid">
          {/* FEATURED - Arogya Sathi */}
          <motion.div 
            className="project-card featured"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="project-eyebrow">AI · Healthcare · 2025</div>
              <h2 className="project-name">Arogya <em>Sathi</em></h2>
              <p className="project-desc">Multi-agent AI healthcare platform with multilingual NLP, real-time environmental data integration (AQI, humidity), and hyper-local health recommendations. Designed for rural and semi-urban India. Presented at Avishkar Maharashtra State Inter-University Research Convention 2025.</p>
              <div className="chips-row project-stack">
                {['Python', 'GenAI', 'Multi-Agent NLP', 'Environmental APIs', 'Multilingual'].map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '280px', borderRadius: '12px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={64} style={{ color: 'var(--accent)' }} />
              </div>
            </div>
          </motion.div>

          {/* Other projects as regular cards - stagger animate */}
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-eyebrow">{project.category}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ color: 'var(--accent)' }}><project.icon size={20} /></div>
                <div className="project-name">{project.name}</div>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="chips-row project-stack">
                {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Work @ i Labs Section */}
        <div style={{ marginTop: '80px', marginBottom: '32px' }}>
          <h2 className="display-md">Client Work @ <em>i Labs</em></h2>
        </div>
        
        <div className="projects-grid">
          {clientWork.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-eyebrow">{project.category}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div className="project-name">{project.name}</div>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="chips-row project-stack">
                {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
