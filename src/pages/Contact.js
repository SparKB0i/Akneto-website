import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Hero from '../components/Hero';
import './Contact.css';

/**
 * Redesigned Contact Page
 * Features: Contact form, contact info cards, validation
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });

            // Reset after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email Us',
            content: 'info@akneto.com',
            link: 'mailto:info@akneto.com',
        },
        {
            icon: <Phone size={24} />,
            title: 'Call Us',
            content: '+44 123 456 7890',
            link: 'tel:+44123456789',
        },
        {
            icon: <MapPin size={24} />,
            title: 'Visit Us',
            content: '123 Business St, London, UK',
            link: '#',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us | Akneto - Get In Touch</title>
                <meta
                    name="description"
                    content="Get in touch with Akneto. Contact us for IT solutions, cloud services, and technology consulting. We're here to help transform your business."
                />
            </Helmet>

            <Hero
                title="Get In Touch"
                subtitle="Have a project in mind? Let's discuss how we can help transform your business with our technology solutions."
                variant="minimal"
            />

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2 className="contact-form-title">Send Us a Message</h2>
                            <p className="contact-form-subtitle">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            {status === 'success' ? (
                                <div className="form-success">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Company (Optional)</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-submit"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? 'Sending...' : (
                                            <>
                                                Send Message
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-container">
                            <h2 className="contact-info-title">Contact Information</h2>
                            <p className="contact-info-subtitle">
                                Reach out through any of these channels
                            </p>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="contact-info-card"
                                    >
                                        <div className="contact-info-icon">
                                            {info.icon}
                                        </div>
                                        <div className="contact-info-content">
                                            <div className="contact-info-label">{info.title}</div>
                                            <div className="contact-info-value">{info.content}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Office Hours */}
                            <div className="office-hours">
                                <h3 className="office-hours-title">Office Hours</h3>
                                <div className="office-hours-content">
                                    <div className="office-hours-row">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="office-hours-row">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="office-hours-row">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
