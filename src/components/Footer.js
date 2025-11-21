import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Newsletter from './common/Newsletter';
import './Footer.css';

/**
 * Redesigned Footer Component
 * Features: Newsletter integration, modern icons, responsive grid, dark mode support
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Cloud Solutions', path: '/services' },
        { name: 'Cybersecurity', path: '/services' },
        { name: 'IT Consulting', path: '/services' },
        { name: 'Network Infrastructure', path: '/services' },
        { name: 'Data Analytics', path: '/services' },
    ];

    const socialLinks = [
        { icon: Linkedin, url: '#', label: 'LinkedIn' },
        { icon: Twitter, url: '#', label: 'Twitter' },
        { icon: Facebook, url: '#', label: 'Facebook' },
        { icon: Instagram, url: '#', label: 'Instagram' },
    ];

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-section">
                            <Link to="/" className="footer-brand">
                                <img
                                    src="/logo.png"
                                    alt="Akneto Logo"
                                    className="footer-logo"
                                />
                                <span className="footer-brand-text">Akneto</span>
                            </Link>
                            <p className="footer-description">
                                Empowering businesses with cutting-edge IT solutions, cloud infrastructure,
                                and cybersecurity services for a digital future.
                            </p>

                            {/* Social Links */}
                            <div className="footer-social">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            className="social-link"
                                            aria-label={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-section">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.path} className="footer-link">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li className="contact-item">
                                    <MapPin size={18} className="contact-icon" />
                                    <span>123 Business St<br />London, UK</span>
                                </li>
                                <li className="contact-item">
                                    <Mail size={18} className="contact-icon" />
                                    <a href="mailto:info@akneto.com" className="footer-link">
                                        info@akneto.com
                                    </a>
                                </li>
                                <li className="contact-item">
                                    <Phone size={18} className="contact-icon" />
                                    <a href="tel:+123" className="footer-link">
                                        +44 123 456 7890
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-section footer-newsletter-column">
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="footer-copyright">
                        © {currentYear} Akneto. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                        <span className="footer-divider">•</span>
                        <Link to="/terms" className="footer-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
