import PageTransition from '../components/PageTransition';
import { experience } from '../data/resume';
import { Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <PageTransition>
            <div className="section container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Experience
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                display: 'flex',
                                gap: '1.5rem',
                                marginBottom: '3rem',
                                position: 'relative',
                            }}
                        >
                            {/* Timeline Line */}
                            {index !== experience.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    left: '24px',
                                    top: '50px',
                                    bottom: '-3rem',
                                    width: '2px',
                                    backgroundColor: 'var(--border-color)',
                                    zIndex: 0,
                                }} />
                            )}

                            <div style={{
                                flexShrink: 0,
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--accent-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-secondary)',
                                zIndex: 1,
                            }}>
                                <Briefcase size={24} />
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'var(--bg-card)',
                                    borderRadius: '999px',
                                    fontSize: '0.875rem',
                                    color: 'var(--accent-secondary)',
                                    marginBottom: '0.5rem',
                                    border: '1px solid var(--border-color)',
                                }}>
                                    {exp.year}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                                    {exp.role}
                                </h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    {exp.company}
                                </h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link
                        to="/projects"
                        className="gradient-text"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600',
                            fontSize: '1.2rem',
                            borderBottom: '2px solid var(--accent-primary)'
                        }}
                    >
                        Next: Projects <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default Experience;
