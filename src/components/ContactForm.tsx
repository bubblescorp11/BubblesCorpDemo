import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    // Honeypot spam check
    if (formData.get('website')) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    try {
      // Using Formspree endpoint - replace with your form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="contact-form-container">
        {submitted ? (
          <div className="success-message">
            <h3>✓ Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+1 (555) 123-4567"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              disabled={loading}
            ></textarea>
          </div>

          {/* Honeypot field */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
    </>
  );
}

const styles = `
  .contact-form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .form-group label {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text);
  }

  .form-group input,
  .form-group textarea {
    padding: var(--spacing-md);
    border: 2px solid var(--color-bg-tertiary);
    border-radius: var(--radius-md);
    background-color: var(--color-bg-secondary);
    color: var(--color-text);
    font-family: inherit;
    transition: all var(--animation-duration-base) var(--animation-timing);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--color-text-tertiary);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  .form-group input:disabled,
  .form-group textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-button {
    background: var(--gradient-primary);
    color: white;
    padding: var(--spacing-md) var(--spacing-lg);
    border: none;
    border-radius: var(--radius-lg);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: var(--shadow-md);
    font-size: var(--text-base);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    letter-spacing: 0.5px;
  }

  .submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  .submit-button:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.3);
  }

  .submit-button:active:not(:disabled) {
    transform: translateY(-1px) scale(0.98);
  }

  .submit-button:hover:not(:disabled)::before {
    left: 100%;
  }

  .submit-button:disabled {
    opacity: 0.75;
    cursor: not-allowed;
    animation: pulse-load 1.5s ease-in-out infinite;
  }

  @keyframes pulse-load {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
  }

  @keyframes spin-dots {
    0%, 100% {
      content: '•';
    }
    25% {
      content: '••';
    }
    50% {
      content: '•••';
    }
    75% {
      content: '••';
    }
  }

  .success-message {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    border: 2px solid var(--color-success);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    text-align: center;
  }

  .success-message h3 {
    color: var(--color-success);
    margin-bottom: var(--spacing-md);
  }

  .success-message p {
    color: var(--color-text-secondary);
    margin: 0;
  }

  .error-message {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
    border: 2px solid var(--color-error);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    color: var(--color-error);
    font-weight: var(--font-weight-medium);
  }

  @media (max-width: 768px) {
    .contact-form {
      gap: var(--spacing-md);
    }
  }
`;
