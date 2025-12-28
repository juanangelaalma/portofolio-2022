import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
  { value: '5+', label: 'Certifications' },
];

const experiences = [
  {
    title: 'Fulltime Web Developer',
    company: 'PT Behaestex',
    period: '2024 - Present',
    description: 'Building scalable web applications and cloud solutions',
  },
  {
    title: 'Web Developer Intern',
    company: 'Vidio',
    period: '2023',
    description: 'Developed payment system for vidio application',
  },
  {
    title: 'Web Developer',
    company: 'Peduly',
    period: '2022 - 2023',
    description: 'Developed web applications especially in backend development',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={sectionRef}>
      {/* Background gradient */}
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
            01. About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
              
              {/* Main card with bento grid effect */}
              <div className="relative glass-card p-6 h-full">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Stats cards */}
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="glass-card p-4 flex flex-col items-center justify-center text-center hover:border-accent-primary/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <span className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                        {stat.value}
                      </span>
                      <span className="text-xs md:text-sm text-text-secondary">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Passionate about building{' '}
              <span className="gradient-text">impactful</span> software
            </h3>
            
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                I'm a Software Engineer based in Indonesia with a passion for building 
                exceptional digital experiences. I specialize in creating web applications 
                that are not only functional but also intuitive and user-friendly.
              </p>
              <p>
                My journey in tech started with curiosity about how things work on the 
                internet. Today, I work with modern technologies like React, Node.js, 
                and cloud platforms to build scalable solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Experience Highlights</h4>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative pl-6 border-l border-border hover:border-accent-primary transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-accent-primary" />
                  <div className="mb-1">
                    <span className="font-medium">{exp.title}</span>
                    <span className="text-text-secondary"> @ {exp.company}</span>
                  </div>
                  <div className="text-sm text-text-tertiary mb-1">{exp.period}</div>
                  <p className="text-sm text-text-secondary">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
