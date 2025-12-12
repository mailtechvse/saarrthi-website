import { Star, ArrowRight, MessageCircle, Globe, Heart } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="badge-container">
                            <div className="badge">
                                <Star size={12} color="#A78BFA" />
                                <span className="badge-text">AI-Powered Vedic Astrology</span>
                            </div>
                        </div>

                        <h1 className="hero-title">
                            Your Cosmic Guide to<br />
                            <span className="gradient-text">Life's Mysteries</span>
                        </h1>

                        <p className="hero-subtitle">
                            Experience the wisdom of the stars combined with advanced AI.
                            Get personalized insights, daily horoscopes, and deep relationship compatibility analysis.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-primary hero-btn">Start Your Journey</button>
                            <button
                                className="btn-secondary hero-btn"
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span>Explore Features</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="trust-container">
                            <div className="trust-item">
                                <div className="trust-value">10k+</div>
                                <div className="trust-label">Charts Generated</div>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <div className="trust-value">4.9/5</div>
                                <div className="trust-label">User Rating</div>
                            </div>
                            <div className="trust-divider"></div>
                            <div className="trust-item">
                                <div className="trust-value">24/7</div>
                                <div className="trust-label">AI Guidance</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="glow-bg"></div>
                        <div className="app-mockup animate-float">
                            <div className="mockup-header">
                                <div className="mockup-dot"></div>
                                <div className="mockup-dot"></div>
                                <div className="mockup-dot"></div>
                            </div>
                            <div className="mockup-content">
                                <div className="mockup-logo-area">
                                    <img src="/assets/images/dark-app.png" alt="App Logo" width="60" height="60" />
                                    <h3>Saarrthi</h3>
                                </div>
                                <div className="chat-bubble left">
                                    How will my career progress this month?
                                </div>
                                <div className="chat-bubble right">
                                    Based on your current Dasha period and transit of Jupiter, expect significant growth opportunities specifically around the 15th...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="container">
                    <h2 className="section-title">Cosmic Features</h2>
                    <p className="section-subtitle">Everything you need to navigate your life's path.</p>

                    <div className="features-grid">
                        <div className="feature-card glass-panel">
                            <div className="feature-icon" style={{ backgroundColor: 'rgba(167, 139, 250, 0.1)' }}>
                                <MessageCircle color="#A78BFA" size={32} />
                            </div>
                            <h3>AI Cosmic Chat</h3>
                            <p>Chat with our advanced AI astrologer about your career, relationships, and health 24/7.</p>
                        </div>

                        <div className="feature-card glass-panel">
                            <div className="feature-icon" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)' }}>
                                <Globe color="#38BDF8" size={32} />
                            </div>
                            <h3>Precise Calculations</h3>
                            <p>Generate detailed Kundali charts (D1, D9, etc.) with high-precision planetary positions.</p>
                        </div>

                        <div className="feature-card glass-panel">
                            <div className="feature-icon" style={{ backgroundColor: 'rgba(244, 114, 182, 0.1)' }}>
                                <Heart color="#F472B6" size={32} />
                            </div>
                            <h3>Compatibility</h3>
                            <p>In-depth relationship analysis and matching scores for you and your partner.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card glass-panel">
                        <div className="glow-bg" style={{ width: '300px', height: '300px', opacity: 0.2 }}></div>
                        <h2 className="cta-title">Ready to discover your destiny?</h2>
                        <p className="cta-subtitle">Join thousands of users who are already navigating their lives with Saarrthi.</p>
                        <button className="btn-primary cta-btn">Get Started Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
