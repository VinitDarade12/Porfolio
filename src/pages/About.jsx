import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Download } from 'lucide-react';

const About = () => {
    return (
        <PageTransition>
            <div className="section container">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    About Me
                </h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border-color)',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    >
                        <p style={{ marginBottom: '1rem' }}>
                            Hello, I am <strong style={{ color: 'var(--text-primary)' }}>Vinit Darade</strong>, a highly skilled and motivated Web Developer with expertise in both frontend and backend technologies. I excel in building interactive and scalable web applications using <strong style={{ color: 'var(--accent-primary)' }}>React, Redux, React Native, Node.js, and MongoDB</strong>.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            My engineering background and proactive approach to learning enable me to thrive in dynamic environments. I am passionate about <strong style={{ color: 'var(--accent-secondary)' }}>Data Structures and Algorithms (DSA)</strong>, which enhances my problem-solving skills and ensures efficient, scalable solutions.
                        </p>
                        <p>
                            I look forward to contributing to impactful projects in the industry.
                        </p>

                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                            <a
                                href="/Vinit_Darade_Resume.pdf"
                                download="Vinit_Darade_Resume.pdf"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'white',
                                    borderRadius: '999px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'transform 0.2s ease',
                                    cursor: 'pointer',
                                    border: 'none', // Reset default border if any
                                    boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.39)'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link
                        to="/education"
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
                        Next: Education <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
