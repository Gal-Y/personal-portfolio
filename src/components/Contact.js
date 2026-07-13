import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  botcheck: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setFeedback('Please add your name, email, and a message.');
      return;
    }

    setStatus('submitting');
    setFeedback('Sending your message…');

    try {
      const payload = new FormData();
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('message', form.message);
      payload.append('_subject', form.subject || `Portfolio enquiry from ${form.name}`);
      payload.append('_template', 'table');
      payload.append('_captcha', 'false');
      payload.append('_honey', form.botcheck);

      const response = await fetch('https://formsubmit.co/ajax/galenyuan1@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The message could not be sent.');
      }

      setForm(initialForm);
      setStatus('success');
      setFeedback('Thanks — your message has been sent. I’ll get back to you soon.');
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Something went wrong. Please email me directly instead.');
    }
  };

  return (
    <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-5 text-white sm:p-8">
      <div className="text-left">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-300">Start a conversation</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Contact</h1>
        <p className="muted-text mt-3 max-w-2xl">
          Have a role, project, cloud problem, or product idea in mind? Send the details here and they’ll go directly to my inbox.
        </p>
      </div>

      <div className="contact-layout mt-8">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="contact-form__row">
            <label>
              <span>Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label>
            <span>Subject <small>Optional</small></span>
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder="A little context helps — what are you building or looking for?"
              required
            />
          </label>

          <input
            name="botcheck"
            type="text"
            value={form.botcheck}
            onChange={handleChange}
            className="contact-form__botcheck"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="contact-form__footer">
            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
              <FaPaperPlane aria-hidden="true" />
            </button>
            <p>
              Delivered securely through FormSubmit. No account or login is required for visitors.
            </p>
          </div>

          {feedback && (
            <div className={`contact-form__feedback contact-form__feedback--${status}`} role="status" aria-live="polite">
              {status === 'success' && <FaCheckCircle aria-hidden="true" />}
              <span>{feedback}</span>
            </div>
          )}
        </motion.form>

        <aside className="contact-aside">
          <div>
            <p className="contact-aside__label">Direct email</p>
            <a href="mailto:galenyuan1@gmail.com" className="contact-aside__email">
              <FaEnvelope aria-hidden="true" />
              <span>
                <small>Usually the fastest option</small>
                galenyuan1@gmail.com
              </span>
            </a>
          </div>

          <div className="contact-aside__availability">
            <span aria-hidden="true" />
            <div>
              <strong>Open to conversations</strong>
              <p>Software engineering, solutions architecture, cloud, AI, healthcare interoperability, and product work.</p>
            </div>
          </div>

          <div>
            <p className="contact-aside__label">Elsewhere</p>
            <div className="contact-aside__socials">
              <a href="https://www.linkedin.com/in/galen-yuan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href="https://github.com/Gal-Y" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
