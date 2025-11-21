// SEO Configuration and Open Graph Meta Tags

export const defaultSEO = {
    siteName: 'Akneto',
    siteUrl: 'https://akneto.com',
    defaultTitle: 'Akneto | Enterprise IT Solutions & Cloud Services',
    defaultDescription: 'Akneto provides cutting-edge IT solutions, cloud services, and cybersecurity to help your business thrive in the digital age.',
    defaultImage: '/og-image.jpg', // Add an OG image to your public folder
    twitterHandle: '@akneto',
};

export const getPageSEO = (page) => {
    const pages = {
        home: {
            title: 'Akneto | Enterprise IT Solutions & Cloud Services',
            description: 'Transform your business with cutting-edge IT solutions, cloud services, and cybersecurity from Akneto.',
            path: '/',
        },
        about: {
            title: 'About Us | Akneto',
            description: 'Learn about Akneto\'s mission to empower businesses with innovative IT solutions and expert team.',
            path: '/about',
        },
        services: {
            title: 'Our Services | Akneto',
            description: 'Explore our comprehensive IT services including cloud solutions, cybersecurity, and network infrastructure.',
            path: '/services',
        },
        products: {
            title: 'Our Products | Akneto',
            description: 'Discover Akneto\'s powerful software solutions designed for modern enterprises.',
            path: '/products',
        },
        contact: {
            title: 'Contact Us | Akneto',
            description: 'Get in touch with Akneto for a free consultation and transform your business today.',
            path: '/contact',
        },
    };

    return {
        ...pages[page],
        url: `${defaultSEO.siteUrl}${pages[page].path}`,
    };
};
