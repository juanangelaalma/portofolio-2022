import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'TypeScript', level: 88, color: '#3178C6' },
      { name: 'Next.js', level: 85, color: '#ffffff' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'Vue.js', level: 75, color: '#4FC08D' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: 'Node.js', level: 90, color: '#339933' },
      { name: 'Laravel', level: 88, color: '#FF2D20' },
      { name: 'Python', level: 82, color: '#3776AB' },
      { name: 'Express.js', level: 85, color: '#ffffff' },
      { name: 'PostgreSQL', level: 80, color: '#4169E1' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: [
      { name: 'Google Cloud', level: 85, color: '#4285F4' },
      { name: 'Docker', level: 80, color: '#2496ED' },
      { name: 'AWS', level: 70, color: '#FF9900' },
      { name: 'CI/CD', level: 78, color: '#FC6D26' },
      { name: 'Kubernetes', level: 65, color: '#326CE5' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Others',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: 'Git', level: 92, color: '#F05032' },
      { name: 'TensorFlow', level: 70, color: '#FF6F00' },
      { name: 'Figma', level: 75, color: '#F24E1E' },
      { name: 'Linux', level: 80, color: '#FCC624' },
      { name: 'REST APIs', level: 90, color: '#8B5CF6' },
    ],
  },
];

function SkillBar({ skill, isInView, delay }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-text-tertiary font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function SkillOrb({ skill, index, totalSkills }) {
  const angle = (index / totalSkills) * Math.PI * 2 - Math.PI / 2;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer"
      style={{
        left: `calc(50% + ${x}px - 32px)`,
        top: `calc(50% + ${y}px - 32px)`,
        borderColor: `${skill.color}33`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ 
        scale: 1.2, 
        boxShadow: `0 0 30px ${skill.color}44`,
        borderColor: skill.color 
      }}
    >
      <span className="text-xs font-medium text-center px-1">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [viewMode, setViewMode] = useState('bars'); // 'bars' or 'orbs'

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background-secondary to-black pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-accent-primary text-sm font-mono mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            03. Skills
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I Work With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* View Toggle */}
        <motion.div
          className="flex justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setViewMode('bars')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'bars'
                ? 'bg-accent-primary text-white'
                : 'glass text-text-secondary hover:text-white'
            }`}
          >
            Bars
          </button>
          <button
            onClick={() => setViewMode('orbs')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              viewMode === 'orbs'
                ? 'bg-accent-primary text-white'
                : 'glass text-text-secondary hover:text-white'
            }`}
          >
            Orbital
          </button>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                activeCategory === category.id
                  ? 'glass-card border-accent-primary/50 text-white'
                  : 'glass text-text-secondary hover:text-white hover:border-border-light'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={activeCategory === category.id ? 'text-accent-primary' : ''}>
                {category.icon}
              </span>
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'bars' ? (
            <motion.div
              key="bars"
              className="max-w-2xl mx-auto glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isInView={isInView}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="orbs"
              className="relative h-80 md:h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Center orb */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full glass-card flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-bold gradient-text">
                  {skillCategories.find((c) => c.id === activeCategory)?.name}
                </span>
              </motion.div>
              
              {/* Skill orbs */}
              {activeSkills.map((skill, index) => (
                <SkillOrb
                  key={skill.name}
                  skill={skill}
                  index={index}
                  totalSkills={activeSkills.length}
                />
              ))}
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {activeSkills.map((skill, index) => {
                  const angle = (index / activeSkills.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.line
                      key={skill.name}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  );
                })}
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-text-secondary mb-6">Other technologies I've worked with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['MongoDB', 'Redis', 'GraphQL', 'Firebase', 'Jest', 'Cypress', 'Sass', 'Redux', 'MySQL'].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
