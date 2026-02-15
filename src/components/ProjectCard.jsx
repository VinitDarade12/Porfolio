import { motion } from 'framer-motion';
import { Github, ExternalLink, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '9999px',
                            fontSize: '0.8rem',
                            color: 'var(--accent-secondary)',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                    }}
                    className="hover:text-accent"
                >
                    <Github size={18} />
                    <span>Code</span>
                </a>

                {project.links.local && (
                    <a
                        href={project.links.local}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                        }}
                    >
                        <Globe size={18} />
                        <span>Local</span>
                    </a>
                )}

                {project.links.demo && (
                    <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                        }}
                    >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
