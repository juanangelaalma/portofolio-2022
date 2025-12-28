import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MedikuImage from "../../../assets/images/projects/main/mediku.webp";
import AksiHijauImage from "../../../assets/images/projects/main/aksihijau.webp";
import SivreImage from "../../../assets/images/projects/main/sivre.webp";

// Featured projects data
const featuredProjects = [
    {
        id: 1,
        title: "Mediku",
        description:
            "An AI-powered medical app addressing child stunting innovatively optimizes growth and development, streamlining health monitoring and offering timely nutrition guidance.",
        image: MedikuImage,
        tags: [
            "React Native",
            "JavaScript", 
            "MySQL",
            "TensorFlow",
            "Google Cloud",
        ],
        github: "https://github.com/juanangelaalma",
        live: "https://youtube.com",
        featured: true,
    },
    {
        id: 2,
        title: "AksiHijau",
        description:
            "An environmental care app focusing on reducing future environmental damage through tree planting, utilizing ML/AI to classify soil types and recommend suitable plants.",
        image: AksiHijauImage,
        tags: ["Kotlin", "JavaScript", "MySQL", "TensorFlow", "Google Cloud"],
        github: "https://github.com/juanangelaalma",
        live: "#",
        featured: true,
    },
    {
        id: 3,
        title: "SIVRE",
        description:
            "SIVRE (Sistem Informasi Voting Remas El Muna) is a voting application used for the selection of youth organization chairman.",
        image: SivreImage,
        tags: ["Laravel", "React JS", "MySQL", "TailwindCSS"],
        github: "https://github.com/juanangelaalma",
        live: "#",
        featured: true,
    },
];

// Other projects
const otherProjects = [
    {
        id: 4,
        title: "Medianku.com",
        description:
            "Website to predict personality based on Big Five Personality principles.",
        tags: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/juanangelaalma",
        image: "https://juanangelaalma.vercel.app/static/media/mediku.5e09c087ba3f2796cae8.webp",
    },
    {
        id: 5,
        title: "Teeth.id",
        description:
            "Web-based dental clinic project with forum, articles, and consultation booking.",
        tags: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/juanangelaalma",
    },
    {
        id: 6,
        title: "Twibb Snap",
        description:
            "Alternative to Twibbonize with image upload, position, size adjustment features.",
        tags: ["TypeScript", "React", "Canvas API"],
        github: "https://github.com/juanangelaalma",
    },
    {
        id: 7,
        title: "Bumil Sehat",
        description:
            "Application for pregnant women with pregnancy reminders sent via email.",
        tags: ["Laravel", "Vue.js", "MySQL"],
        github: "https://github.com/juanangelaalma",
    },
    {
        id: 8,
        title: "El Muna Company Profile",
        description:
            "Company profile and blog for Masjid Agung Al Munawwar Tulungagung.",
        tags: ["React JS", "Laravel", "MySQL"],
        github: "https://github.com/juanangelaalma",
    },
    {
        id: 9,
        title: "Peduly.com",
        description:
            "Crowdfunding platform for social impact, making a better society through kindness.",
        tags: ["React", "Node.js", "PostgreSQL"],
        github: "https://github.com/juanangelaalma",
    },
];

// Featured Project Card Component
function FeaturedProjectCard({ project, index, isInView }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="relative mb-32 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-0 items-center`}
            >
                {/* Project Image */}
                <div
                    className={`w-full lg:w-3/5 relative ${isEven ? "lg:pr-0" : "lg:pl-0"}`}
                >
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 bg-accent-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                        <div className="aspect-video bg-surface overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-5xl font-bold gradient-text">
                                        {project.title[0]}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.a>
                </div>

                {/* Project Info */}
                <div
                    className={`w-full lg:w-2/4 lg:absolute ${isEven ? "lg:right-0 lg:text-right" : "lg:left-0 lg:text-left"} z-20`}
                >
                    <span className="text-accent-primary text-sm font-mono mb-2 block">
                        Featured Project
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-primary transition-colors"
                        >
                            {project.title}
                        </a>
                    </h3>
                    <div className="glass-card p-5 lg:p-6 mb-5 shadow-xl">
                        <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <ul
                        className={`flex flex-wrap gap-x-4 gap-y-2 mb-5 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
                    >
                        {project.tags.map((tag) => (
                            <li
                                key={tag}
                                className="text-xs font-mono text-text-tertiary hover:text-accent-primary transition-colors"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`flex gap-5 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
                    >
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-primary transition-colors"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="GitHub"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                                />
                            </svg>
                        </motion.a>
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-primary transition-colors"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="External Link"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Other Project Card Component
function ProjectCard({ project, index, isInView }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="glass-card p-6 h-full flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -10, borderColor: "rgba(139, 92, 246, 0.3)" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <motion.div
                    className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center"
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <svg
                        className="w-6 h-6 text-accent-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                    </svg>
                </motion.div>
                <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                        />
                    </svg>
                </motion.a>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-text-secondary text-sm mb-6 flex-grow">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-mono text-text-tertiary"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll
        ? otherProjects
        : otherProjects.slice(0, 6);

    return (
        <section
            id="projects"
            className="py-24 md:py-32 relative"
            ref={sectionRef}
        >
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
                        02. My Work
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Things I've Built
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Featured Projects */}
                <div className="mb-24">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Other Projects Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        Other Noteworthy Projects
                    </h3>
                    <p className="text-text-secondary">
                        A collection of projects I've worked on
                    </p>
                </motion.div>

                {/* Other Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More Button */}
                {otherProjects.length > 6 && (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
