// Home page data constants
import { FaCloud, FaShieldAlt, FaNetworkWired, FaGlobe, FaHeadset, FaUserTie } from 'react-icons/fa';

export const stats = [
    { value: '1B+', label: 'Active Subscribers', icon: <FaUserTie /> },
    { value: '100+', label: 'Operators', icon: <FaNetworkWired /> },
    { value: '80+', label: 'Countries', icon: <FaGlobe /> },
    { value: '24/7', label: 'Support', icon: <FaHeadset /> },
];

export const services = [
    {
        icon: <FaCloud />,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure to power your business growth with 99.99% uptime guarantee.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Cybersecurity',
        description: 'Advanced protection against evolving digital threats using AI-driven security protocols.',
    },
    {
        icon: <FaNetworkWired />,
        title: 'Network Infrastructure',
        description: 'Robust and reliable networking solutions designed for high-performance enterprise environments.',
    },
];

export const whyChooseUs = [
    { title: 'Expert Team', desc: 'Certified professionals with years of experience.' },
    { title: 'Custom Solutions', desc: 'Tailored strategies to meet your specific goals.' },
    { title: 'Global Reach', desc: 'Serving clients across 80+ countries worldwide.' }
];
