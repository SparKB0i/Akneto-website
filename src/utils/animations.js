import { animate, stagger as animeStagger, createTimeline } from 'animejs';

/**
 * Reusable animation utilities using Anime.js
 * All animations are purposeful and performance-optimized
 */

/**
 * Reusable animation utilities using Anime.js
 * All animations are purposeful and performance-optimized
 */

/**
 * Fade in with upward movement
 */
export const fadeInUp = (targets, delay = 0) => {
    return animate(targets, {
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        ease: 'outExpo',
    });
};

/**
 * Stagger animation for cards/grid items
 */
export const staggerCards = (selector, staggerDelay = 100) => {
    return animate(selector, {
        translateY: [30, 0],
        opacity: [0, 1],
        delay: animeStagger(staggerDelay),
        duration: 600,
        ease: 'outQuad',
    });
};

/**
 * Scale in animation for modals/popups
 */
export const scaleIn = (targets, duration = 500) => {
    return animate(targets, {
        scale: [0.9, 1],
        opacity: [0, 1],
        duration,
        ease: 'outBack',
    });
};

/**
 * Slide in from left
 */
export const slideInLeft = (targets, delay = 0) => {
    return animate(targets, {
        translateX: [-60, 0],
        opacity: [0, 1],
        duration: 700,
        delay,
        ease: 'outExpo',
    });
};

/**
 * Slide in from right
 */
export const slideInRight = (targets, delay = 0) => {
    return animate(targets, {
        translateX: [60, 0],
        opacity: [0, 1],
        duration: 700,
        delay,
        ease: 'outExpo',
    });
};

/**
 * Number counter animation
 */
export const animateCounter = (element, endValue, duration = 2000) => {
    const obj = { value: 0 };

    return animate(obj, {
        value: endValue,
        duration,
        ease: 'outExpo',
        round: 1, // Note: round might need to be modifier: utils.round(1) but let's try this first or remove it if it breaks
        update: () => {
            element.textContent = obj.value.toLocaleString();
        },
    });
};

/**
 * Text reveal animation (character by character)
 */
export const textReveal = (selector) => {
    // Split text into characters
    const element = document.querySelector(selector);
    if (!element) return;

    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        element.appendChild(span);
    });

    return createTimeline()
        .add(`${selector} span`, {
            translateY: [100, 0],
            opacity: [0, 1],
            ease: 'outExpo',
            duration: 1400,
            delay: (el, i) => 30 * i,
        });
};

/**
 * Hover magnetic effect (element follows cursor)
 */
export const magneticHover = (element) => {
    const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        animate(element, {
            translateX: x * 0.3,
            translateY: y * 0.3,
            duration: 300,
            ease: 'outQuad',
        });
    };

    const handleMouseLeave = () => {
        animate(element, {
            translateX: 0,
            translateY: 0,
            duration: 500,
            ease: 'outElastic(1, 0.6)',
        });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
    };
};

/**
 * Progress bar animation
 */
export const animateProgress = (selector, percentage) => {
    return animate(selector, {
        width: `${percentage}%`,
        duration: 1500,
        ease: 'outExpo',
    });
};

/**
 * Pulse animation (for CTAs, notifications)
 */
export const pulse = (targets) => {
    return animate(targets, {
        scale: [1, 1.05, 1],
        duration: 800,
        loop: true,
        ease: 'inOutQuad',
    });
};

/**
 * Wave animation (for loading states)
 */
export const wave = (selector) => {
    return animate(`${selector} path`, {
        translateX: [0, -100],
        duration: 3000,
        loop: true,
        ease: 'linear',
    });
};

