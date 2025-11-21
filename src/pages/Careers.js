import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Careers.css';

/**
 * Careers Page
 * Features: Job listings, benefits, company culture
 */
const Careers = () => {
    const positions = [
        {
            title: 'Senior Full-Stack Developer',
            department: 'Engineering',
            location: 'Remote / Hybrid',
            type: 'Full-time',
            description: 'Build scalable cloud solutions with modern tech stack including React, Node.js, and AWS.',
        },
        {
            title: 'Cloud Solutions Architect',
            department: 'Infrastructure',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Design and implement enterprise cloud architectures for our global clients.',
        },
        {
            title: 'Cybersecurity Specialist',
            department: 'Security',
            location: 'Remote',
            type: 'Full-time',
            description: 'Protect our clients from evolving cyber threats with cutting-edge security solutions.',
        },
        {
            title: 'DevOps Engineer',
            department: 'Operations',
            location: 'Hybrid',
            type: 'Full-time',
            description: 'Automate and optimize our CI/CD pipelines and cloud infrastructure.',
        },
        {
            title: 'Data Analytics Consultant',
            department: 'Analytics',
            location: 'Remote',
            type: 'Full-time',
            description: 'Help clients transform data into actionable business insights.',
        },
        {
            title: 'IT Sales Manager',
            department: 'Sales',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Build relationships with enterprise clients and drive revenue growth.',
        },
    ];

    const benefits = [
        {
            icon: <Heart size={32} />,
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance and wellness programs',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Career Growth',
            description: 'Continuous learning opportunities and career advancement',
        },
        {
            icon: <Users size={32} />,
            title: 'Great Team',
            description: 'Work with talented professionals in a collaborative environment',
        },
        {
            icon: <Zap size={32} />,
            title: 'Work-Life Balance',
            description: 'Flexible hours and remote work options',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Careers | Join the Akneto Team</title>
                <meta
                    name="description"
                    content="Join Akneto and work on cutting-edge IT solutions. Explore our open positions and build your career with us."
                />
            </Helmet>

            <Hero
                title="Build the Future with Us"
                subtitle="Join a team of innovators shaping the future of technology. Work on challenging projects, grow your skills, and make an impact."
                buttonText="View Open Positions"
                buttonLink="#positions"
                variant="gradient"
            />

            {/* Why Join Us Section */}
            <section className="why-join-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Join Akneto?</h2>
                        <p className="section-subtitle">
                            We invest in our people and create an environment where innovation thrives
                        </p>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">
                                    {benefit.icon}
                                </div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="positions" className="positions-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Open Positions</h2>
                        <p className="section-subtitle">
                            Find your next opportunity and join our growing team
                        </p>
                    </div>

                    <div className="positions-grid">
                        {positions.map((position, index) => (
                            <div key={index} className="position-card">
                                <div className="position-header">
                                    <div>
                                        <h3 className="position-title">{position.title}</h3>
                                        <span className="position-department">{position.department}</span>
                                    </div>
                                </div>

                                <p className="position-description">{position.description}</p>

                                <div className="position-meta">
                                    <div className="meta-item">
                                        <MapPin size={16} />
                                        <span>{position.location}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Clock size={16} />
                                        <span>{position.type}</span>
                                    </div>
                                </div>

                                <Link to="/contact" className="btn-apply">
                                    Apply Now
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="careers-cta-section">
                <div className="container">
                    <div className="careers-cta-content">
                        <Briefcase size={48} className="cta-icon" />
                        <h2 className="careers-cta-title">Don't See a Perfect Fit?</h2>
                        <p className="careers-cta-subtitle">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <Link to="/contact" className="btn-cta-careers">
                            Get In Touch
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
