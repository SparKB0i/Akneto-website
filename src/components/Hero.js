import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

/**
 * Redesigned Hero Component
 * Features: Gradient backgrounds, CSS-based animations, responsive design
 */
const Hero = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
    backgroundImage,
    variant = 'default' // 'default', 'gradient', 'minimal'
}) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const heroClasses = `hero ${variant === 'gradient' ? 'hero-gradient' : ''} ${variant === 'minimal' ? 'hero-minimal' : ''}`;

    return (
        <section
            className={heroClasses}
            style={backgroundImage ? {
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5)), url(${backgroundImage})`,
            } : {}}
        >
            {/* Background Decorations */}
            {variant === 'gradient' && (
                <>
                    <div className="hero-blob hero-blob-1"></div>
                    <div className="hero-blob hero-blob-2"></div>
                    <div className="hero-grid"></div>
                </>
            )}

            <div className="hero-container">
                <div className="hero-content">
                    <h1 className={`hero-title ${isAnimated ? 'hero-title-animated' : ''}`}>
                        {title}
                    </h1>
                    <p className={`hero-subtitle ${isAnimated ? 'hero-subtitle-animated' : ''}`}>
                        {subtitle}
                    </p>

                    {buttonText && buttonLink && (
                        <div className={`hero-cta ${isAnimated ? 'hero-cta-animated' : ''}`}>
                            <Link to={buttonLink} className="btn-hero-primary">
                                {buttonText}
                                <ArrowRight size={20} />
                            </Link>
                            {variant !== 'minimal' && (
                                <Link to="/about" className="btn-hero-secondary">
                                    Learn More
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
