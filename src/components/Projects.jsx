import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Dumbbell, Gamepad2, BarChart3, Cpu, FileText } from 'lucide-react';

const Projects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      featured: true,
      year: '2025',
      icon: <Heart size={24} />,
      title: 'Arogya Sathi — AI Healthcare Platform',
      desc: 'Multi-agent AI healthcare platform with multilingual NLP, real-time environmental data integration (AQI, humidity), and hyper-local health recommendations. Designed for rural and semi-urban India. Presented at Avishkar Maharashtra State Inter-University Research Convention.',
      tags: ['Python', 'GenAI', 'Multi-Agent NLP', 'Environmental APIs']
    },
    {
      featured: false,
      year: '2025',
      icon: <BookOpen size={24} />,
      title: 'Smart Library Search System',
      desc: 'Fully offline semantic search using Sentence-Transformers with conversational memory. Zero cloud dependency — runs locally on a library computer. Replaced keyword-based PDF searching with natural language queries.',
      tags: ['Python', 'NLP', 'Sentence-Transformers', 'Offline']
    },
    {
      featured: false,
      year: '2026',
      icon: <Dumbbell size={24} />,
      title: 'AuraFit — AI Fitness Platform',
      desc: 'Edge-assisted multimodal AI fitness training platform. Processes physical activity through computer vision and provides intelligent, personalized feedback. Final year capstone project.',
      tags: ['AI/ML', 'Computer Vision', 'Edge Computing']
    },
    {
      featured: false,
      year: '2025',
      icon: <Gamepad2 size={24} />,
      title: 'Zero-G Bottle Shooter',
      desc: 'Unity 3D game with hand-gesture controls via MediaPipe and real-time AI commentary using Gemini 2.0 Flash API. Built under a tight deadline for a university project.',
      tags: ['Unity', 'C#', 'MediaPipe', 'Gemini API']
    },
    {
      featured: false,
      year: '2024',
      icon: <BarChart3 size={24} />,
      title: 'Crompton Sales Analytics',
      desc: 'Power BI dashboard analyzing regional, product, and customer sales trends across multiple dimensions to support business decision-making.',
      tags: ['Power BI', 'Data Analytics', 'Business Intelligence']
    },
    {
      featured: false,
      year: '2024',
      icon: <Cpu size={24} />,
      title: 'Drone Propeller Optimization',
      desc: 'Applied MOEA/D multi-objective evolutionary algorithm to optimize drone propeller design, balancing weight against thrust constraints.',
      tags: ['Python', 'MOEA/D', 'Optimization']
    },
    {
      featured: false,
      year: '2024',
      icon: <FileText size={24} />,
      title: 'Extractive Text Summariser',
      desc: 'Team ML project building an NLP pipeline for automatic extractive summarisation of documents.',
      tags: ['Python', 'NLP', 'Machine Learning']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className="section-label">// projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">From AI healthcare platforms to franchise management systems — real products for real problems.</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`glass-card project-card ${project.featured ? 'project-featured' : ''}`}
              variants={fadeUp}
            >
              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-year">{project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-stack-tag" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '0.2rem 0.6rem', background: 'var(--border)', borderRadius: '4px' }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
