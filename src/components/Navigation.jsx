import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Menu, X } from 'lucide-react';

const Navigation = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/education', label: 'Education' },
        { path: '/skills', label: 'Skills' },
        { path: '/projects', label: 'Projects' },
    ];

    return (
        <nav style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1.5rem 0',
            background: 'transparent',
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Link to="/" style={{ fontSize: '2rem', textDecoration: 'none', filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))', zIndex: 51 }}>
                    🚀
                </Link>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        position: 'relative',
                                        color: 'var(--text-secondary)',
                                        fontSize: '1rem',
                                        fontWeight: location.pathname === link.path ? '500' : '400',
                                    }}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.label}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="underline"
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                bottom: -4,
                                                height: 2,
                                                backgroundColor: 'var(--accent-primary)',
                                                borderRadius: 2,
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <a href="https://www.linkedin.com/in/vinitdarade/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                            <a href="https://github.com/VinitDarade12" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
                            <a href="https://www.instagram.com/thevinitdarade12/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>

                            <Link
                                to="/contact"
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    border: '1px solid var(--text-primary)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    marginLeft: '1rem',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'var(--text-primary)';
                                    e.target.style.color = 'var(--bg-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'var(--text-primary)';
                                }}
                            >
                                Let's Connect
                            </Link>
                        </div>
                    </>
                )}

                {/* Mobile Navigation Toggle */}
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ color: 'white', zIndex: 51 }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                )}

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobile && isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(5, 5, 5, 0.95)',
                                backdropFilter: 'blur(10px)',
                                zIndex: 50,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '2rem'
                            }}
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        color: location.pathname === link.path ? 'var(--accent-primary)' : 'white',
                                    }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                                <a href="https://www.linkedin.com/in/vinitdarade/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'white' }}><Linkedin size={24} /></a>
                                <a href="https://github.com/VinitDarade12" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'white' }}><Github size={24} /></a>
                                <a href="https://www.instagram.com/thevinitdarade12/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'white' }}><Instagram size={24} /></a>
                            </div>

                            <Link
                                to="/contact"
                                style={{
                                    padding: '0.8rem 2rem',
                                    border: '1px solid var(--text-primary)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    marginTop: '1rem'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Connect
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navigation;
