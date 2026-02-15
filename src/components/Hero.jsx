import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = ["AI-DS Engineer", "Fullstack Developer", "Coder", "Tech Enthusiast"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '80px',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(circle at top right, #1a1a2e 0%, #050505 50%)',
            }}
        >
            {/* Background Elements */}
            <div className="stars-bg"></div>

            <div className="container hero-grid">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(0,0,0,0) 100%)',
                        borderLeft: '4px solid var(--accent-secondary)',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600', letterSpacing: '1px' }}>
                            Welcome to my Portfolio
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                    }}>
                        Hi! I'm Vinit Darade<br />
                        <span style={{ position: 'relative', display: 'inline-block', minWidth: '300px' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ color: 'var(--text-primary)', display: 'block' }}
                                >
                                    {roles[index]}
                                </motion.span>
                            </AnimatePresence>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                style={{
                                    position: 'absolute',
                                    right: -10,
                                    top: 0,
                                    bottom: 0,
                                    width: '4px',
                                    background: 'var(--accent-primary)',
                                    display: 'none' // Hidden for smooth transition effect, optional to enable cursor
                                }}
                            />
                        </span>
                    </h1>

                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '500px',
                        marginBottom: '2.5rem',
                        lineHeight: '1.7',
                        fontSize: '1.05rem'
                    }}>
                        AI & Data Science engineer building deployable ML models, analytics dashboards, and full-stack applications that solve real problems.
                    </p>

                    <Link
                        to="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                        }}
                        className="hover:translate-x-1 transition-transform"
                    >
                        Let's Connect <ArrowRight size={24} style={{ border: '1px solid white', borderRadius: '50%', padding: '4px' }} />
                    </Link>
                </motion.div>

                {/* Right Column: Astronaut Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ position: 'relative' }}
                >
                    {/* Planet Glow Effect */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(0,0,0,0) 70%)',
                        zIndex: -1,
                        borderRadius: '50%',
                        boxShadow: '0 0 50px 20px rgba(139, 92, 246, 0.2)',
                    }} />

                    <motion.div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '450px',
                            margin: '0 auto',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '2px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
                        }}
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src="/profile_styled.png"
                            alt="Vinit Darade"
                            style={{ width: '100%', display: 'block' }}
                        />
                        {/* Overlay Gradient */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(to top, rgba(5,5,5,0.8), transparent)',
                        }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
