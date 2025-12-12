import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <div className="footer-logo">
                        <img src="/assets/images/dark-app.png" alt="Saarrthi" className="footer-logo-img" />
                        <span className="footer-logo-text">Saarrthi</span>
                    </div>
                    <p className="footer-desc">
                        Your personal AI astrologer for a guided life journey.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Legal</h4>
                    <Link to="/terms" className="footer-link">Terms & Conditions</Link>
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Connect</h4>
                    <a href="mailto:contact@saarrthi.ai" className="footer-link icon-link">
                        <Mail size={16} />
                        <span>contact@saarrthi.ai</span>
                    </a>
                </div>
            </div>

            <div className="container footer-bottom">
                <p className="copyright">
                    © {new Date().getFullYear()} Saarrthi. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
