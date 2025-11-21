import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users, Award, Zap, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import './About.css';

/**
 * Redesigned About Page
 * Features: Company story, mission/vision, values, clean modern design
 */
const About = () => {
    const values = [
        {
            icon: <Zap size={32} />,
            title: 'Innovation',
            description: 'Constantly pushing boundaries with cutting-edge solutions',
        },
        {
            icon: <Heart size={32} />,
            title: 'Integrity',
            description: 'Building trust through transparency and ethical practices',
        },
        {
            icon: <Users size={32} />,
            title: 'Collaboration',
            description: 'Working together to achieve exceptional results',
        },
        {
            icon: <Award size={32} />,
            title: 'Excellence',
            description: 'Delivering quality in everything we do',
        },
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Akneto - IT Solutions Experts</title>
                <meta
                    name="description"
                    content="Learn about Akneto's mission to empower businesses with innovative IT solutions. Meet our expert team and discover our values."
                />
            </Helmet>

            {/* Hero Section */}
            <Hero
                title="Transforming Businesses Through Technology"
                subtitle="We're a team of passionate technologists dedicated to helping organizations thrive in the digital age."
                variant="minimal"
            />

            {/* Our Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                                alt="Modern office space"
                                loading="eager"
                            />
                        </div>
                        <div className="story-content">
                            <h2 className="story-title">Our Story</h2>
                            <p className="story-text">
                                Founded in 2010, Akneto began with a simple mission: to bridge the gap between
                                complex technology and business success. What started as a small IT consulting
                                firm has grown into a comprehensive technology partner for businesses worldwide.
                            </p>
                            <p className="story-text">
                                Today, we serve over 500 clients across various industries, providing everything
                                from cloud infrastructure to cybersecurity solutions. Our growth is driven by our
                                commitment to innovation, client success, and building long-term partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Target size={48} />
                            </div>
                            <h3 className="mission-title">Our Mission</h3>
                            <p className="mission-description">
                                To empower businesses with innovative IT solutions that drive growth,
                                efficiency, and competitive advantage in an ever-evolving digital landscape.
                            </p>
                        </div>

                        <div className="mission-card">
                            <div className="mission-icon">
                                <Eye size={48} />
                            </div>
                            <h3 className="mission-title">Our Vision</h3>
                            <p className="mission-description">
                                To be the most trusted technology partner, recognized for transforming
                                businesses through cutting-edge solutions and unwavering commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section">
                <div className="container">
                    <div className="about-stats-grid">
                        <div className="about-stat">
                            <div className="about-stat-number">15+</div>
                            <div className="about-stat-label">Years Experience</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-number">500+</div>
                            <div className="about-stat-label">Happy Clients</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-number">50+</div>
                            <div className="about-stat-label">Expert Team</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-number">99.9%</div>
                            <div className="about-stat-label">Uptime SLA</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
