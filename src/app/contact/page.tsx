'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Briefcase, Users, Building, ArrowRight, Globe, MessageSquare, Award } from 'lucide-react';
import {
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { createSubmissionReference } from '@/lib/formatting';
import { coreSeoPages } from '@/lib/marketingSeo';
import { brandPhoneDisplay } from '@/lib/contactInfo';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  message: string;
  service?: string;
  resume?: File | undefined;
}

interface EmailApiResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

const CONTACT_RECIPIENT = 'info@navigatorglobals.com';
const REQUEST_TIMEOUT_MS = 30000;
const MAX_RESUME_SIZE_BYTES = 3 * 1024 * 1024;

async function parseEmailResponse(response: Response): Promise<EmailApiResponse> {
  let payload: EmailApiResponse | null = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || 'Failed to send your message. Please try again.');
  }

  return payload;
}

function getSubmissionError(error: unknown): string {
  if (error instanceof DOMException && error.name === 'AbortError') {
    return 'The request timed out before the mail server responded. Please try again.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Failed to send your message. Please try again.';
}

const ContactUsPage: React.FC = () => {
  const seoPage = coreSeoPages.contact;
  const [partnerForm, setPartnerForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'partnership'
  });

  const [careerForm, setCareerForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: undefined,
    service: 'career'
  });

  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);
  const [careerSubmitting, setCareerSubmitting] = useState(false);
  const [generalSubmitting, setGeneralSubmitting] = useState(false);
  const [partnerError, setPartnerError] = useState('');
  const [careerError, setCareerError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [partnerReferenceId, setPartnerReferenceId] = useState('');
  const [careerReferenceId, setCareerReferenceId] = useState('');
  const [generalReferenceId, setGeneralReferenceId] = useState('');

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.replace(/^data:.*?base64,/, ''));
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitting(true);
    setPartnerError('');
    
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      await parseEmailResponse(await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          to: CONTACT_RECIPIENT,
          replyTo: partnerForm.email,
          subject: `Partnership Inquiry from ${partnerForm.name}`,
          html: `
            <h2>New Partnership Form Submission</h2>
            <p><strong>Name:</strong> ${partnerForm.name}</p>
            <p><strong>Email:</strong> ${partnerForm.email}</p>
            <p><strong>Phone:</strong> ${partnerForm.phone}</p>
            <p><strong>Company:</strong> ${partnerForm.company}</p>
            <p><strong>Message:</strong> ${partnerForm.message}</p>
          `
        })
      }));

      setPartnerReferenceId(createSubmissionReference('PAR'));
      setPartnerSubmitted(true);
      window.setTimeout(() => {
        setPartnerSubmitted(false);
        setPartnerReferenceId('');
        setPartnerForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          message: '',
          service: 'partnership'
        });
      }, 3000);
    } catch (error) {
      console.error('Partnership form submission error:', error);
      setPartnerError(getSubmissionError(error));
    } finally {
      window.clearTimeout(timeout);
      setPartnerSubmitting(false);
    }
  };

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitting(true);
    setCareerError('');
    
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      let attachments: Array<{ filename: string; content: string; contentType: string; size: number }> = [];
      if (careerForm.resume) {
        const base64 = await fileToBase64(careerForm.resume);
        attachments.push({
          filename: careerForm.resume.name,
          content: base64,
          contentType: careerForm.resume.type || 'application/octet-stream',
          size: careerForm.resume.size,
        });
      }

      await parseEmailResponse(await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          to: CONTACT_RECIPIENT,
          replyTo: careerForm.email,
          subject: `Career Application from ${careerForm.name}`,
          html: `
            <h2>New Career Application</h2>
            <p><strong>Name:</strong> ${careerForm.name}</p>
            <p><strong>Email:</strong> ${careerForm.email}</p>
            <p><strong>Phone:</strong> ${careerForm.phone}</p>
            <p><strong>Position:</strong> ${careerForm.position}</p>
            <p><strong>Message:</strong> ${careerForm.message}</p>
            ${careerForm.resume ? `<p><strong>Resume:</strong> ${careerForm.resume.name}</p>` : ''}
          `,
          attachments
        })
      }));

      setCareerReferenceId(createSubmissionReference('CAR'));
      setCareerSubmitted(true);
      window.setTimeout(() => {
        setCareerSubmitted(false);
        setCareerReferenceId('');
        setCareerForm({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: '',
          resume: undefined,
          service: 'career'
        });
      }, 3000);
    } catch (error) {
      console.error('Career form submission error:', error);
      setCareerError(getSubmissionError(error));
    } finally {
      window.clearTimeout(timeout);
      setCareerSubmitting(false);
    }
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralSubmitting(true);
    setGeneralError('');
    
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      await parseEmailResponse(await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          to: CONTACT_RECIPIENT,
          replyTo: generalForm.email,
          subject: `Contact Form Submission from ${generalForm.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${generalForm.name}</p>
            <p><strong>Email:</strong> ${generalForm.email}</p>
            <p><strong>Phone:</strong> ${generalForm.phone}</p>
            <p><strong>Message:</strong> ${generalForm.message}</p>
            <p><strong>Service:</strong> ${generalForm.service || 'General Inquiry'}</p>
          `
        })
      }));

      setGeneralReferenceId(createSubmissionReference('GEN'));
      setGeneralSubmitted(true);
      window.setTimeout(() => {
        setGeneralSubmitted(false);
        setGeneralReferenceId('');
        setGeneralForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setGeneralError(getSubmissionError(error));
    } finally {
      window.clearTimeout(timeout);
      setGeneralSubmitting(false);
    }
  };

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPartnerError('');
    setPartnerForm({
      ...partnerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCareerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCareerError('');
    setCareerForm({
      ...careerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGeneralError('');
    setGeneralForm({
      ...generalForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCareerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > MAX_RESUME_SIZE_BYTES) {
        setCareerError('Resume files must be 3 MB or smaller for email delivery. Please upload a smaller file.');
        e.target.value = '';
        return;
      }

      setCareerError('');
      setCareerForm({
        ...careerForm,
        resume: selectedFile
      });
    }
  };


  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 25% 75%, rgba(67, 97, 117, 0.07) 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, rgba(88, 90, 94, 0.07) 0%, transparent 50%),
        radial-gradient(circle at 45% 55%, rgba(67, 97, 117, 0.05) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {seoPage.h1}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-surface-light/80 max-w-3xl mx-auto">
              {seoPage.answer}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#436175] mb-4">Get in Touch</h2>
              <p className="text-xl text-[#585a5e] max-w-3xl mx-auto">
              Multiple ways to connect with us. Choose the option that works best for you.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#436175]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                  <Phone className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Phone</h3>
                <p className="text-[#585a5e] mb-2">{brandPhoneDisplay}</p>
                <p className="text-muted-brown-grey text-sm">Mon-Sat: 10AM-7PM Dubai</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-[#436175]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                  <Mail className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Email</h3>
                <p className="text-[#585a5e] mb-2">info@navigatorglobals.com</p>
                <p className="text-muted-brown-grey text-sm">Email and consultation support</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-[#436175]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                  <MapPin className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Office</h3>
                <p className="text-[#585a5e] mb-2">606, Latifa Towers, Trade Center 1, Sheikh Zayed Road, </p>
                <p className="text-muted-brown-grey text-sm">Dubai, UAE</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-[#455A64]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#455A64] transition-colors duration-300">
                  <Clock className="w-10 h-10 text-[#455A64] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#455A64] mb-3">Business Hours</h3>
                <p className="text-[#585a5e] mb-2">Monday - Saturday</p>
                <p className="text-muted-brown-grey text-sm">10:00 AM - 7:00 PM Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* General Contact Form */}
      <section className="py-20 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#436175] to-[#585a5e] p-6 text-white">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Send Us a Message</h3>
                </div>
                <p className="text-white/80">
                  Get your free consultation and personalized immigration guidance
                </p>
              </div>
              
              <form onSubmit={handleGeneralSubmit} className="p-6 space-y-6">
                {generalError && !generalSubmitted ? (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {generalError}
                  </div>
                ) : null}
                {generalSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-[#436175]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#436175]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#436175] mb-4">Thank You!</h4>
                    <p className="text-[#585a5e] mb-4">
                      Your message has been sent successfully. 
                      Our team will contact you within 24 hours.
                    </p>
                    <div className="text-sm text-gray-500">
                      Reference ID: {generalReferenceId}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#585a5e] mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={generalForm.name}
                          onChange={handleGeneralChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#585a5e] mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={generalForm.email}
                          onChange={handleGeneralChange}
                          placeholder="john@email.com"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#585a5e] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={generalForm.phone}
                          onChange={handleGeneralChange}
                          placeholder={brandPhoneDisplay}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#585a5e] mb-2">Service Interested In *</label>
                        <select
                          name="service"
                          value={generalForm.service}
                          onChange={handleGeneralChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="skilled">Skilled Immigration</option>
                          <option value="work-permits">Work Permits</option>
                          <option value="student-visa">Student Visa</option>
                          <option value="visit-visa">Visit Visa</option>
                          <option value="business">Business Immigration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#585a5e] mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={generalForm.message}
                        onChange={handleGeneralChange}
                        placeholder="Tell us about your immigration goals..."
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={generalSubmitting}
                      className="w-full bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold py-4 px-6 rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {generalSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us & Career Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Network</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with us or join our team. Together, we can help more people achieve their immigration dreams.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Partner With Us Section */}
              <div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Building className="w-8 h-8 mr-3" />
                      <h3 className="text-2xl font-bold">Partner With Us</h3>
                    </div>
                    <p className="text-blue-100">
                      Join our network of trusted partners and grow your business with us
                    </p>
                  </div>
                  
                  <form onSubmit={handlePartnerSubmit} className="p-6 space-y-6">
                    {partnerError && !partnerSubmitted ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {partnerError}
                      </div>
                    ) : null}
                    {partnerSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h4>
                        <p className="text-gray-600 mb-4">
                          Your partnership inquiry has been submitted successfully. 
                          Our team will contact you within 24 hours.
                        </p>
                        <div className="text-sm text-gray-500">
                          Reference ID: {partnerReferenceId}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={partnerForm.name}
                              onChange={handlePartnerChange}
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={partnerForm.email}
                              onChange={handlePartnerChange}
                              placeholder="john@company.com"
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={partnerForm.phone}
                              onChange={handlePartnerChange}
                              placeholder={brandPhoneDisplay}
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Company Name *</label>
                            <input
                              type="text"
                              name="company"
                              value={partnerForm.company}
                              onChange={handlePartnerChange}
                              placeholder="Your Company Ltd."
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#585a5e] mb-2">Partnership Interest</label>
                          <select
                            name="service"
                            value={partnerForm.service}
                            onChange={handlePartnerChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                          >
                            <option value="partnership">Business Partnership</option>
                            <option value="referral">Referral Program</option>
                            <option value="affiliate">Affiliate Marketing</option>
                            <option value="educational">Educational Institution</option>
                            <option value="legal">Legal Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#585a5e] mb-2">Message *</label>
                          <textarea
                            name="message"
                            value={partnerForm.message}
                            onChange={handlePartnerChange}
                            placeholder="Tell us about your partnership proposal..."
                            rows={4}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={partnerSubmitting}
                          className="w-full bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold py-4 px-6 rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                          {partnerSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Submit Partnership Inquiry</span>
                            </>
                          )}
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </div>

              {/* Career Section */}
              <div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-8 h-8 mr-3" />
                      <h3 className="text-2xl font-bold">Join Our Team</h3>
                    </div>
                    <p className="text-purple-100">
                      Build your career with Navigator Immigration
                    </p>
                  </div>
                  
                  <form onSubmit={handleCareerSubmit} className="p-6 space-y-6">
                    {careerError && !careerSubmitted ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {careerError}
                      </div>
                    ) : null}
                    {careerSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-10 h-10 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Application Received!</h4>
                        <p className="text-gray-600 mb-4">
                          Your job application has been submitted successfully. 
                          Our HR team will review your profile and contact you soon.
                        </p>
                        <div className="text-sm text-gray-500">
                          Reference ID: {careerReferenceId}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={careerForm.name}
                              onChange={handleCareerChange}
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={careerForm.email}
                              onChange={handleCareerChange}
                              placeholder="john@email.com"
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={careerForm.phone}
                              onChange={handleCareerChange}
                              placeholder={brandPhoneDisplay}
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#585a5e] mb-2">Position Applied *</label>
                            <select
                              name="position"
                              value={careerForm.position}
                              onChange={handleCareerChange}
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                              <option value="">Select Position</option>
                              <option value="immigration-consultant">Immigration Consultant</option>
                              <option value="senior-consultant">Senior Immigration Consultant</option>
                              <option value="case-manager">Case Manager</option>
                              <option value="marketing">Marketing Specialist</option>
                              <option value="sales">Business Development</option>
                              <option value="admin">Administrative Assistant</option>
                              <option value="legal">Legal Assistant</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#585a5e] mb-2">Resume/CV *</label>
                          <div className="relative">
                            <input
                              type="file"
                              name="resume"
                              onChange={handleCareerFileChange}
                              accept=".pdf,.doc,.docx"
                              required
                              className="w-full px-4 py-3 border border-[rgb(247,55,24)] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            {careerForm.resume && (
                              <div className="mt-2 text-xs text-green-600">
                                Selected: {careerForm.resume.name}
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 3MB)</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#585a5e] mb-2">Cover Letter *</label>
                          <textarea
                            name="message"
                            value={careerForm.message}
                            onChange={handleCareerChange}
                            placeholder="Tell us why you want to join our team..."
                            rows={4}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={careerSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                          {careerSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Submit Application</span>
                            </>
                          )}
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Navigator Immigration?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a leading immigration consultancy with a proven track record of success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Recognition</h3>
                <p className="text-gray-600">
                  Dubai immigration consultancy with 15+ years of guidance across PR, student visas, work permits, visit visas, and business immigration
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Extensive network of partners across 30+ countries serving thousands of clients annually
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Continuous professional development and career advancement in a growing industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about partnerships and career opportunities
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What types of partnerships do you offer?</h3>
                <p className="text-gray-600">
                  We offer various partnership models including referral programs, affiliate marketing, 
                  educational institution partnerships, and strategic business collaborations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What qualifications do you look for in team members?</h3>
                <p className="text-gray-600">
                  We seek professionals with relevant experience in immigration, law, marketing, 
                  or business development. Strong communication skills and a client-focused approach are essential.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly do you respond to partnership inquiries?</h3>
                <p className="text-gray-600">
                  We typically respond to partnership inquiries within 24-48 business hours. 
                  For urgent matters, please call our office directly.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer training for partners?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive training and ongoing support to our partners 
                  to ensure they can effectively represent our services and maintain quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
};

export default ContactUsPage;
