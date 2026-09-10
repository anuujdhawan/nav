'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I would like to schedule a free consultation.'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'info@navigatorglobals.com',
          subject: `Quick Consultation Request from ${formData.name}`,
          html: `
            <h2>Quick Consultation Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          setSubmitting(false);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: 'I would like to schedule a free consultation.'
            });
          }, 5000);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof DOMException && error.name === 'AbortError') {
        alert('Request timed out. Please try again.');
      }
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section suppressHydrationWarning className="py-24 bg-[#f5f5dc] relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute left-0 top-0 h-80 w-80 rounded-full bg-muted-brown-grey/15 blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#436175]/10 blur-3xl animate-pulse [animation-delay:800ms]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-dark-blue-grey lg:text-4xl">
            Transform Your Future Today
          </h2>
          
          <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-[#585a5e]">
            Take first step toward your global aspirations. Our expert team is ready to guide you 
            through every stage of your immigration journey with precision, care, and proven expertise.
          </p>
          
          <div className="mx-auto mb-12 max-w-2xl">
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                <p className="font-bold">Thank you! Your consultation request has been sent.</p>
                <p className="text-sm">We&apos;ll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-[#436175]/95 p-4 backdrop-blur-md sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <label className="sr-only" htmlFor="cta-name">
                    Your name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <label className="sr-only" htmlFor="cta-email">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="sr-only" htmlFor="cta-phone">
                    Phone number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                  />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="sr-only" htmlFor="cta-message">
                    Message
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] py-3 sm:py-4 px-6 sm:px-8 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {submitting ? 'Sending...' : 'Get Free Consultation'}
                </button>
              </form>
            )}
          </div>
          
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <div className="transition-transform duration-200 hover:scale-[1.02]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 border-2 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform transition-all duration-300"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-colors duration-300" />
              </Link>
            </div>
            <div className="transition-transform duration-200 hover:scale-[1.02]">
              <Link
                href="/immigration/blog"
                className="inline-flex items-center justify-center px-10 py-4 border-2 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform transition-all duration-300"
              >
                Explore Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
