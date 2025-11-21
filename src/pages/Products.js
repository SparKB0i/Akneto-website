import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Zap, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Products.css';

/**
 * Redesigned Products Page
 * Features: Product cards with pricing tiers, features comparison
 */
const Products = () => {
    const products = [
        {
            icon: <Server size={40} />,
            title: 'CloudPro Suite',
            description: 'Complete cloud management platform for modern enterprises',
            price: 'Starting at $499/mo',
            features: [
                'Multi-cloud management',
                'Auto-scaling infrastructure',
                'Cost optimization tools',
                'Performance monitoring',
                '99.9% uptime SLA',
                '24/7 technical support',
            ],
            popular: true,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        },
        {
            icon: <Shield size={40} />,
            title: 'SecureGuard Enterprise',
            description: 'Advanced cybersecurity solution for complete protection',
            price: 'Starting at $799/mo',
            features: [
                'Real-time threat detection',
                'Security information & event management',
                'Compliance reporting',
                'Vulnerability scanning',
                'Incident response team',
                'Security audits',
            ],
            popular: false,
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
        },
        {
            icon: <Zap size={40} />,
            title: 'DataFlow Analytics',
            description: 'Business intelligence and analytics platform',
            price: 'Starting at $399/mo',
            features: [
                'Real-time dashboards',
                'Predictive analytics',
                'Custom reporting',
                'Data visualization',
                'API integration',
                'Mobile access',
            ],
            popular: false,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Products | Akneto - Enterprise Software Solutions</title>
                <meta
                    name="description"
                    content="Explore Akneto's enterprise-grade software products including CloudPro Suite, SecureGuard, and DataFlow Analytics."
                />
            </Helmet>

            <Hero
                title="Enterprise-Grade Products"
                subtitle="Powerful, scalable software solutions designed to transform your business operations and drive growth."
                buttonText="Request Demo"
                buttonLink="/contact"
                variant="gradient"
            />

            {/* Products Grid */}
            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Product Suite</h2>
                        <p className="section-subtitle">
                            Choose the perfect solution for your business needs
                        </p>
                    </div>

                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className={`product-card ${product.popular ? 'product-popular' : ''}`}>
                                {product.popular && <div className="popular-badge">Most Popular</div>}

                                <div className="product-image">
                                    <img src={product.image} alt={product.title} loading="lazy" />
                                    <div className="product-icon-overlay">
                                        {product.icon}
                                    </div>
                                </div>

                                <div className="product-content">
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-price">{product.price}</div>

                                    <ul className="product-features">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <Check size={16} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact" className="btn-product">
                                        Get Started
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="product-cta-section">
                <div className="container">
                    <div className="product-cta-content">
                        <h2 className="product-cta-title">Need a Custom Solution?</h2>
                        <p className="product-cta-subtitle">
                            We can build tailored products to meet your unique business requirements
                        </p>
                        <Link to="/contact" className="btn-cta-secondary">
                            Talk to Our Team
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
