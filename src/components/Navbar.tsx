import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src="/assets/images/dark-app.png" alt="Saarrthi" className="logo-img" />
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    <Link to="/terms" className="nav-link">Terms</Link>
                    <Link to="/privacy" className="nav-link">Privacy</Link>
                    <button className="nav-btn-primary" onClick={() => window.location.href = '#'}>Download App</button>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} color="#1a1a1a" /> : <Menu size={24} color="#1a1a1a" />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile - menu ${isMenuOpen ? 'open' : ''} `}>
                    <div className="mobile-nav-links">
                        <Link to="/terms" className="mobile-nav-link" onClick={closeMenu}>Terms</Link>
                        <Link to="/privacy" className="mobile-nav-link" onClick={closeMenu}>Privacy</Link>
                        <button className="nav-btn-primary mobile-btn" onClick={() => { closeMenu(); window.location.href = '#'; }}>Download App</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

