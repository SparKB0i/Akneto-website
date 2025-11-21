import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './common/DarkModeToggle';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

/**
 * Redesigned Navbar Component
 * Features: Ultra-minimal, glassmorphism, dark mode support, smooth animations
 */
const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-brand">
                    <img
                        src="/logo.png"
                        alt="Akneto Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-text">Akneto</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="navbar-actions">
                    <DarkModeToggle />
                    <Link to="/contact" className="btn-contact">
                        Contact Us
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="mobile-menu-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link-active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="mobile-nav-link mobile-nav-contact">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
