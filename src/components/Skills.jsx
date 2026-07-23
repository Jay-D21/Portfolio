import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const skillCategories = [
    {
      title: 'AI / Machine Learning',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'GenAI', 'LLMs', 'RAG', 'Agentic AI', 'Prompt Engineering', 'Reinforcement Learning', 'Computer Vision', 'Sentence-Transformers']
    },
    {
      title: 'Full-Stack Development',
      skills: ['JavaScript', 'Next.js', 'React', 'Node.js', 'FastAPI', 'Flask', 'Django', 'Supabase', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'REST APIs', 'Git']
    },
    {
      title: 'Business & Operations',
      skills: ['Client Discovery', 'Scoping & Proposals', 'Process Design', 'Systems Thinking', 'Business Consulting', 'Power BI', 'Project Management', 'Technical Writing']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className="section-label">// skills</div>
          <h2 className="section-title">What I Work With</h2>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="glass-card" variants={fadeUp}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
