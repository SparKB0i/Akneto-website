import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import './Home.css';

/**
 * Redesigned Home Page
 * Features: Modern service cards with CSS animations, React-based animated stats, client testimonials, CTA sections
 */
const Home = () => {
    const servicesRef = useRef(null);
    const statsRef = useRef(null);
    const [servicesAnimated, setServicesAnimated] = useState(false);
    const [statsAnimated, setStatsAnimated] = useState(false);
    const [statValues, setStatValues] = useState([0, 0, 0]);

    useEffect(() => {
        // Animate service cards when they come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === servicesRef.current && !servicesAnimated) {
                            setServicesAnimated(true);
                            // Stop observing once animated
                            observer.unobserve(entry.target);
                        }
                        if (entry.target === statsRef.current && !statsAnimated) {
                            setStatsAnimated(true);
                            // Stop observing once animated
                            observer.unobserve(entry.target);

                            // Animate stat counters using React state
                            const targets = [500, 50, 150];
                            const duration = 2000;
                            const steps = 60;
                            const stepDuration = duration / steps;

                            let currentStep = 0;
                            const interval = setInterval(() => {
                                currentStep++;
                                const progress = currentStep / steps;
                                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                                setStatValues(targets.map(target => Math.floor(target * easeOutExpo)));

                                if (currentStep >= steps) {
                                    setStatValues(targets);
                                    clearInterval(interval);
                                }
                            }, stepDuration);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (servicesRef.current) observer.observe(servicesRef.current);
        if (statsRef.current) observer.observe(statsRef.current);

        return () => observer.disconnect();
    }, [servicesAnimated, statsAnimated]);

    const services = [
        {
            icon: <Cloud size={40} />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure tailored to your business needs with 99.9% uptime guarantee.',
        },
        {
            icon: <Shield size={40} />,
            title: 'Cybersecurity',
            description: 'Enterprise-grade security solutions to protect your data and infrastructure from threats.',
        },
        {
            icon: <Code size={40} />,
            title: 'IT Consulting',
            description: 'Expert guidance to optimize your technology stack and digital transformation strategy.',
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Data Analytics',
            description: 'Transform your data into actionable insights with advanced analytics and BI solutions.',
        },
        {
            icon: <Users size={40} />,
            title: 'Managed Services',
            description: '24/7 IT support and management to keep your systems running smoothly and securely.',
        },
        {
            icon: <Award size={40} />,
            title: 'Network Infrastructure',
            description: 'Design and implement robust network solutions for seamless connectivity and performance.',
        },
    ];

    const stats = [
        { number: 500, suffix: '+', label: 'Clients Served' },
        { number: 50, suffix: '+', label: 'Expert Team Members' },
        { number: 150, suffix: '+', label: 'Projects Completed' },
    ];

    const whyChooseUs = [
        { title: 'Expert Team', description: 'Industry-certified professionals with years of experience' },
        { title: '24/7 Support', description: 'Round-the-clock assistance whenever you need it' },
        { title: 'Proven Results', description: 'Track record of successful implementations' },
    ];

    return (
        <>
            <Helmet>
                <title>Akneto | Enterprise IT Solutions & Cloud Services</title>
                <meta
                    name="description"
                    content="Transform your business with cutting-edge IT solutions, cloud services, and cybersecurity from Akneto. Trusted by 500+ companies worldwide."
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Akneto | Enterprise IT Solutions & Cloud Services" />
                <meta property="og:description" content="Transform your business with cutting-edge IT solutions, cloud services, and cybersecurity from Akneto." />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Akneto | Enterprise IT Solutions & Cloud Services" />
                <meta name="twitter:description" content="Transform your business with cutting-edge IT solutions, cloud services, and cybersecurity from Akneto." />
            </Helmet>

            {/* Hero Section */}
            <Hero
                title="Empowering Your Digital Future"
                subtitle="Transform your business with cutting-edge IT solutions, cloud infrastructure, and cybersecurity services designed for the modern enterprise."
                buttonText="Get Started"
                buttonLink="/contact"
                variant="gradient"
            />

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">
                            Comprehensive IT solutions tailored to your needs, delivered by industry experts
                        </p>
                    </div>

                    <div ref={servicesRef} className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className={`service-card ${servicesAnimated ? 'service-card-animated' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <Link to="/services" className="service-link">
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div ref={statsRef} className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number" data-value={stat.number}>
                                    {statValues[index].toLocaleString()}
                                </div>
                                <div className="stat-suffix">{stat.suffix}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Akneto?</h2>
                        <p className="section-subtitle">
                            We combine technical expertise with industry knowledge to deliver results that matter
                        </p>
                    </div>

                    <div className="why-grid">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="why-card">
                                <div className="why-icon">
                                    <Award size={32} />
                                </div>
                                <h3 className="why-title">{item.title}</h3>
                                <p className="why-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-subtitle">
                            Contact us today to schedule a free consultation with our experts
                        </p>
                        <Link to="/contact" className="btn-cta">
                            Get Started Today
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
