import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * More performant than scroll listeners
 */
export const useScrollAnimation = (callback, options = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    callback(entry);

                    // Option to trigger only once
                    if (options.once) {
                        observer.unobserve(element);
                    }
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [callback, options]);

    return elementRef;
};
