import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import './Newsletter.css';

/**
 * Newsletter Subscription Component
 * Simple, clean design with success/error states
 */
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return;

        setStatus('loading');

        // Simulate API call (replace with actual implementation)
        setTimeout(() => {
            setStatus('success');
            setEmail('');

            // Reset after 5 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }, 1500);
    };

    return (
        <div className="newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-subtitle">
                Get the latest insights delivered to your inbox.
            </p>

            {status === 'success' ? (
                <div className="newsletter-success">
                    <Check size={20} />
                    <p>Thanks for subscribing!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="newsletter-input"
                            required
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            className="newsletter-button"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                'Subscribing...'
                            ) : (
                                <>
                                    Subscribe
                                    <Mail size={16} />
                                </>
                            )}
                        </button>
                    </div>

                    {status === 'error' && (
                        <div className="newsletter-error">
                            <AlertCircle size={16} />
                            <span>Something went wrong. Please try again.</span>
                        </div>
                    )}
                </form>
            )}

            <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe at any time.
            </p>
        </div>
    );
};

export default Newsletter;
