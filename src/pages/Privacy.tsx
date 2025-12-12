import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Page.css';

const Privacy: React.FC = () => {
    return (
        <div className="page-container container">
            <div className="page-header">
                <Link to="/" className="back-btn">
                    <ChevronLeft size={24} />
                </Link>
                <h1 className="page-title">Privacy Policy</h1>
                <div className="placeholder"></div>
            </div>

            <div className="page-content glass-panel">
                <section>
                    <h2>Information We Collect</h2>
                    <p>When you use Saarrthi, we collect the following information:</p>
                    <ul>
                        <li>Personal details: Name, email address, phone number</li>
                        <li>Birth information: Date, time, and place of birth for astrological calculations</li>
                        <li>Location data: Current location for timezone-aware predictions and transit analysis</li>
                        <li>Family profiles: Birth details of family members you choose to add</li>
                        <li>Conversation history: Your interactions with our AI astrology assistant</li>
                        <li>Usage data: App interactions, features used, and preferences</li>
                    </ul>
                </section>

                <section>
                    <h2>Use of Third-Party AI Services</h2>
                    <p><strong>Important:</strong> Saarrthi uses advanced third-party Large Language Models (LLMs) including OpenAI's GPT models to:</p>
                    <ul>
                        <li>Generate personalized astrological insights and predictions</li>
                        <li>Provide conversational AI responses to your questions</li>
                        <li>Analyze astrological charts and planetary positions</li>
                        <li>Create daily, weekly, and monthly horoscopes</li>
                    </ul>
                    <p>When you interact with our AI features, your questions and relevant astrological data are processed by these third-party AI services. We ensure that only necessary information is shared and follow strict data minimization principles.</p>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <p>Your information is used to:</p>
                    <ul>
                        <li>Generate accurate astrological charts and predictions</li>
                        <li>Provide personalized daily insights based on planetary transits</li>
                        <li>Enable AI-powered astrological consultations</li>
                        <li>Calculate compatibility and relationship insights</li>
                        <li>Send notifications about important astrological events</li>
                        <li>Improve our services and develop new features</li>
                        <li>Provide customer support</li>
                    </ul>
                </section>

                <section>
                    <h2>Third-Party Services</h2>
                    <p>Saarrthi integrates with the following third-party services:</p>
                    <ul>
                        <li><strong>OpenAI:</strong> For AI-powered astrological insights and chat responses</li>
                        <li><strong>AstrologyAPI:</strong> For chart calculations and astrological computations</li>
                        <li><strong>Supabase:</strong> For secure data storage and authentication</li>
                        <li><strong>Google OAuth:</strong> For optional sign-in functionality</li>
                    </ul>
                    <p>Each service has its own privacy policy and data handling practices. We recommend reviewing their policies for complete transparency.</p>
                </section>

                <section>
                    <h2>Data Security</h2>
                    <p>We implement industry-standard security measures to protect your data:</p>
                    <ul>
                        <li>Encrypted data transmission using HTTPS/SSL</li>
                        <li>Secure authentication with multi-factor options</li>
                        <li>Row-level security in our database</li>
                        <li>Regular security audits and updates</li>
                        <li>Minimal data retention policies</li>
                    </ul>
                    <p>While we strive to protect your information, no method of electronic transmission or storage is 100% secure.</p>
                </section>

                <section>
                    <h2>Your Data Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data and astrological profiles</li>
                        <li>Update or correct your information</li>
                        <li>Delete your account and associated data</li>
                        <li>Export your birth chart and prediction history</li>
                        <li>Opt-out of promotional communications</li>
                        <li>Restrict processing of your data</li>
                    </ul>
                    <p>To exercise these rights, contact us at privacy@saarrthi.app</p>
                </section>

                <section>
                    <h2>Children's Privacy</h2>
                    <p>Saarrthi is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>For privacy concerns or questions, contact us at: <a href="mailto:privacy@saarrthi.app">privacy@saarrthi.app</a></p>
                </section>

                <div className="last-updated">
                    Last updated: December 2024<br />
                    Version: 1.0.0
                </div>
            </div>
        </div>
    );
};

export default Privacy;
