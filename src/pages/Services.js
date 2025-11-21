import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, Network, Database, Headphones, Check } from 'lucide-react';
import Hero from '../components/Hero';
import './Services.css';

/**
 * Redesigned Services Page
 * Features: Service offerings, process flow, benefits
 */
const Services = () => {
    const services = [
        {
            icon: <Cloud size={40} />,
            title: 'Cloud Solutions',
            description: 'Scalable and secure cloud infrastructure tailored to your business needs.',
            features: ['AWS & Azure Migration', 'Cloud Architecture', '24/7 Monitoring', 'Auto-scaling'],
        },
        {
            icon: <Shield size={40} />,
            title: 'Cybersecurity',
            description: 'Enterprise-grade security solutions to protect your critical assets.',
            features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
        },
        {
            icon: <Code size={40} />,
            title: 'IT Consulting',
            description: 'Expert guidance to optimize your technology stack and strategy.',
            features: ['Digital Transformation', 'Technology Roadmap', 'System Integration', 'Best Practices'],
        },
        {
            icon: <Network size={40} />,
            title: 'Network Infrastructure',
            description: 'Design and implement robust network solutions for seamless connectivity.',
            features: ['Network Design', 'SD-WAN Solutions', 'Load Balancing', 'Performance Optimization'],
        },
        {
            icon: <Database size={40} />,
            title: 'Data Analytics',
            description: 'Transform your data into actionable insights with advanced analytics.',
            features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Reporting Dashboards'],
        },
        {
            icon: <Headphones size={40} />,
            title: 'Managed Services',
            description: '24/7 IT support and management to keep your systems running smoothly.',
            features: ['Help Desk', 'System Monitoring', 'Patch Management', 'Backup & Recovery'],
        },
    ];

    const process = [
        { step: '01', title: 'Discovery', description: 'We analyze your current infrastructure and business goals' },
        { step: '02', title: 'Strategy', description: 'Develop a tailored solution roadmap for your needs' },
        { step: '03', title: 'Implementation', description: 'Deploy solutions with minimal disruption to operations' },
        { step: '04', title: 'Support', description: 'Ongoing monitoring and optimization for peak performance' },
    ];

    return (
        <>
            <Helmet>
                <title>IT Services | Akneto - Cloud, Security & Consulting</title>
                <meta
                    name="description"
                    content="Comprehensive IT services including cloud solutions, cybersecurity, IT consulting, and managed services. Transform your business with Akneto."
                />
            </Helmet>

            <Hero
                title="Comprehensive IT Services"
                subtitle="From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions that drive business growth and innovation."
                buttonText="Get a Quote"
                buttonLink="/contact"
                variant="gradient"
            />

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Service Offerings</h2>
                        <p className="section-subtitle">
                            Tailored solutions to meet your unique business challenges
                        </p>
                    </div>

                    <div className="service-offerings-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-offering-card">
                                <div className="service-offering-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-offering-title">{service.title}</h3>
                                <p className="service-offering-description">{service.description}</p>
                                <ul className="service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <Check size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Process</h2>
                        <p className="section-subtitle">
                            A proven methodology for delivering exceptional results
                        </p>
                    </div>

                    <div className="process-grid">
                        {process.map((item, index) => (
                            <div key={index} className="process-card">
                                <div className="process-step">{item.step}</div>
                                <h3 className="process-title">{item.title}</h3>
                                <p className="process-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
