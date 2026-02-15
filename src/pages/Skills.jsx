import PageTransition from '../components/PageTransition';
import { skills } from '../data/resume';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Server, Wrench } from 'lucide-react';

const getIcon = (category) => {
    switch (category.toLowerCase()) {
        case 'languages': return <Code size={24} />;
        case 'frontend': return <Layout size={24} />;
        case 'backend': return <Server size={24} />;
        default: return <Wrench size={24} />;
    }
};

const Skills = () => {
    return (
        <PageTransition>
            <div className="section container">
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                    Skills & Expertise
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    My technical toolbelt for building scalable and user-centric applications.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.3)' }}
                            style={{
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                                backdropFilter: 'blur(10px)',
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Decorative Gradient Blob */}
                            <div style={{
                                position: 'absolute',
                                top: -50,
                                right: -50,
                                width: '100px',
                                height: '100px',
                                background: `radial-gradient(circle, var(--accent-${index % 2 === 0 ? 'primary' : 'secondary'}) 0%, transparent 70%)`,
                                opacity: 0.2,
                                filter: 'blur(20px)',
                            }} />

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '2rem',
                                color: `var(--accent-${index % 2 === 0 ? 'primary' : 'secondary'})`
                            }}>
                                <div style={{
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {getIcon(category.category)}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    {category.category}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        style={{
                                            padding: '0.6rem 1rem',
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            borderRadius: '8px',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            cursor: 'default',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <Link
                        to="/experience"
                        className="gradient-text"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontWeight: '600',
                            fontSize: '1.2rem',
                            borderBottom: '2px solid var(--accent-primary)',
                            paddingBottom: '0.2rem',
                        }}
                    >
                        Next: Experience <ArrowRight size={22} />
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default Skills;
