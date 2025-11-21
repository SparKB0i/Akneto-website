import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Blog.css';

/**
 * Blog Page
 * Features: Article grid, categories, featured posts
 */
const Blog = () => {
    const articles = [
        {
            title: 'The Future of Cloud Computing in 2025',
            excerpt: 'Exploring emerging trends in cloud infrastructure, serverless architectures, and how businesses can leverage these technologies for competitive advantage.',
            author: 'Sarah Johnson',
            date: '2024-11-15',
            category: 'Cloud',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
            featured: true,
        },
        {
            title: 'Cybersecurity Best Practices for Enterprises',
            excerpt: 'Essential strategies to protect your business from modern cyber threats, including zero-trust architecture and threat detection.',
            author: 'Michael Chen',
            date: '2024-11-10',
            category: 'Security',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
            featured: false,
        },
        {
            title: 'AI-Driven Development: Tools and Techniques',
            excerpt: 'How artificial intelligence is transforming software development workflows and increasing developer productivity.',
            author: 'Emma Williams',
            date: '2024-11-05',
            category: 'AI',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            featured: false,
        },
        {
            title: 'Scaling Microservices: Lessons Learned',
            excerpt: 'Real-world insights from building and scaling microservices architectures for enterprise applications.',
            author: 'David Martinez',
            date: '2024-10-28',
            category: 'Architecture',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            featured: false,
        },
        {
            title: 'Data Analytics Trends Shaping Business Intelligence',
            excerpt: 'The latest trends in data analytics and how they are revolutionizing business decision-making processes.',
            author: 'Lisa Anderson',
            date: '2024-10-20',
            category: 'Analytics',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            featured: false,
        },
        {
            title: 'DevOps Culture: Building High-Performing Teams',
            excerpt: 'How to foster a DevOps culture that enhances collaboration, automation, and continuous delivery.',
            author: 'James Taylor',
            date: '2024-10-12',
            category: 'DevOps',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
            featured: false,
        },
    ];

    const categories = ['All', 'Cloud', 'Security', 'AI', 'Architecture', 'Analytics', 'DevOps'];

    return (
        <>
            <Helmet>
                <title>Blog | Akneto Tech Insights & Articles</title>
                <meta
                    name="description"
                    content="Read the latest articles on technology, cloud computing, cybersecurity, AI, and digital transformation from Akneto's expert team."
                />
            </Helmet>

            <Hero
                title="Tech Insights & Articles"
                subtitle="Stay informed with the latest trends, best practices, and expert insights on technology and digital transformation."
                variant="minimal"
            />

            {/* Categories Filter */}
            <section className="blog-categories-section">
                <div className="container">
                    <div className="categories-filter">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`category-btn ${index === 0 ? 'active' : ''}`}
                            >
                                <Tag size={16} />
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {articles.filter(a => a.featured).map((article, index) => (
                <section key={index} className="featured-article-section">
                    <div className="container">
                        <div className="featured-article">
                            <div className="featured-image">
                                <img src={article.image} alt={article.title} loading="eager" />
                                <span className="featured-badge">Featured</span>
                            </div>
                            <div className="featured-content">
                                <span className="article-category">{article.category}</span>
                                <h2 className="featured-title">{article.title}</h2>
                                <p className="featured-excerpt">{article.excerpt}</p>
                                <div className="article-meta">
                                    <div className="meta-item">
                                        <User size={16} />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Calendar size={16} />
                                        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                                <Link to="/contact" className="btn-read-more">
                                    Read Article
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Articles Grid */}
            <section className="articles-section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.filter(a => !a.featured).map((article, index) => (
                            <article key={index} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} loading="lazy" />
                                    <span className="article-category-badge">{article.category}</span>
                                </div>
                                <div className="article-content">
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-excerpt">{article.excerpt}</p>
                                    <div className="article-meta">
                                        <div className="meta-item">
                                            <User size={14} />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="meta-item">
                                            <Calendar size={14} />
                                            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="article-link">
                                        Read More
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
