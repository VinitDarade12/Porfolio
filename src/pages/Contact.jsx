import { useRef, useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_kooto3t';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            setLoading(false);
            setStatus({ type: 'error', message: 'Please configure Template ID and Public Key in Contact.jsx!' });
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                form.current.reset();
            }, (error) => {
                setLoading(false);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                console.error(error.text);
            });
    };

    return (
        <PageTransition>
            <div className="section container" style={{ paddingTop: '120px' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                    Get In Touch
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                            Contact Information
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', items: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</h4>
                                    <a href="mailto:vinitdarade12@gmail.com" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        vinitdarade12@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', items: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: 'var(--accent-secondary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                        Pune, India
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Social Profiles</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://www.linkedin.com/in/vinitdarade/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                                    <a href="https://github.com/VinitDarade12" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
                                    <a href="https://www.instagram.com/thevinitdarade12/" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Your message..."
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--text-primary)',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    padding: '1rem',
                                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontWeight: '600',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    opacity: loading ? 0.7 : 1,
                                    transition: 'opacity 0.2s'
                                }}
                            >
                                {loading ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '0.5rem',
                                            textAlign: 'center',
                                            backgroundColor: status.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                                            color: status.type === 'error' ? '#ef4444' : '#22c55e',
                                            border: `1px solid ${status.type === 'error' ? '#ef4444' : '#22c55e'}`,
                                        }}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
