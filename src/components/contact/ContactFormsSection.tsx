'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  Building,
  CheckCircle,
  MessageSquare,
  Send,
} from 'lucide-react';
import { createSubmissionReference } from '@/lib/formatting';
import { brandPhoneDisplay } from '@/lib/contactInfo';

interface BaseFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface PartnerFormData extends BaseFormData {
  company: string;
}

interface CareerFormData extends BaseFormData {
  position: string;
  resume?: File;
}

interface SubmissionState {
  error: string;
  referenceId: string;
  submitted: boolean;
  submitting: boolean;
}

interface EmailApiResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

interface EmailAttachment {
  filename: string;
  content: string;
  contentType: string;
  size: number;
}

const CONTACT_RECIPIENT = 'info@navigatorglobals.com';
const REQUEST_TIMEOUT_MS = 30000;
const RESET_DELAY_MS = 3000;
const MAX_RESUME_SIZE_BYTES = 3 * 1024 * 1024;

const defaultGeneralForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const defaultPartnerForm: PartnerFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  service: 'partnership',
};

const defaultCareerForm: CareerFormData = {
  name: '',
  email: '',
  phone: '',
  position: '',
  message: '',
  resume: undefined,
  service: 'career',
};

const defaultSubmissionState: SubmissionState = {
  error: '',
  referenceId: '',
  submitted: false,
  submitting: false,
};

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

async function fileToBase64(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.replace(/^data:.*?base64,/, ''));
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function sendEmail(options: {
  attachments?: EmailAttachment[];
  html: string;
  replyTo: string;
  subject: string;
}) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    await parseEmailResponse(
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          attachments: options.attachments,
          html: options.html,
          replyTo: options.replyTo,
          subject: options.subject,
          to: CONTACT_RECIPIENT,
        }),
      })
    );
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function clearTimer(timerRef: React.MutableRefObject<number | null>) {
  if (timerRef.current !== null) {
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }
}

export default function ContactFormsSection() {
  const [generalForm, setGeneralForm] = useState(defaultGeneralForm);
  const [partnerForm, setPartnerForm] = useState(defaultPartnerForm);
  const [careerForm, setCareerForm] = useState(defaultCareerForm);
  const [generalState, setGeneralState] = useState(defaultSubmissionState);
  const [partnerState, setPartnerState] = useState(defaultSubmissionState);
  const [careerState, setCareerState] = useState(defaultSubmissionState);

  const generalResetTimeoutRef = useRef<number | null>(null);
  const partnerResetTimeoutRef = useRef<number | null>(null);
  const careerResetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      clearTimer(generalResetTimeoutRef);
      clearTimer(partnerResetTimeoutRef);
      clearTimer(careerResetTimeoutRef);
    };
  }, []);

  const scheduleGeneralReset = () => {
    clearTimer(generalResetTimeoutRef);
    generalResetTimeoutRef.current = window.setTimeout(() => {
      setGeneralForm(defaultGeneralForm);
      setGeneralState(defaultSubmissionState);
      generalResetTimeoutRef.current = null;
    }, RESET_DELAY_MS);
  };

  const schedulePartnerReset = () => {
    clearTimer(partnerResetTimeoutRef);
    partnerResetTimeoutRef.current = window.setTimeout(() => {
      setPartnerForm(defaultPartnerForm);
      setPartnerState(defaultSubmissionState);
      partnerResetTimeoutRef.current = null;
    }, RESET_DELAY_MS);
  };

  const scheduleCareerReset = () => {
    clearTimer(careerResetTimeoutRef);
    careerResetTimeoutRef.current = window.setTimeout(() => {
      setCareerForm(defaultCareerForm);
      setCareerState(defaultSubmissionState);
      careerResetTimeoutRef.current = null;
    }, RESET_DELAY_MS);
  };

  const handleGeneralSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGeneralState((current) => ({
      ...current,
      error: '',
      submitting: true,
    }));

    try {
      await sendEmail({
        replyTo: generalForm.email,
        subject: `Contact Form Submission from ${generalForm.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${generalForm.name}</p>
          <p><strong>Email:</strong> ${generalForm.email}</p>
          <p><strong>Phone:</strong> ${generalForm.phone}</p>
          <p><strong>Message:</strong> ${generalForm.message}</p>
          <p><strong>Service:</strong> ${generalForm.service || 'General Inquiry'}</p>
        `,
      });

      setGeneralState({
        error: '',
        referenceId: createSubmissionReference('GEN'),
        submitted: true,
        submitting: false,
      });
      scheduleGeneralReset();
    } catch (error) {
      console.error('Form submission error:', error);
      setGeneralState((current) => ({
        ...current,
        error: getSubmissionError(error),
        submitting: false,
      }));
    }
  };

  const handlePartnerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPartnerState((current) => ({
      ...current,
      error: '',
      submitting: true,
    }));

    try {
      await sendEmail({
        replyTo: partnerForm.email,
        subject: `Partnership Inquiry from ${partnerForm.name}`,
        html: `
          <h2>New Partnership Form Submission</h2>
          <p><strong>Name:</strong> ${partnerForm.name}</p>
          <p><strong>Email:</strong> ${partnerForm.email}</p>
          <p><strong>Phone:</strong> ${partnerForm.phone}</p>
          <p><strong>Company:</strong> ${partnerForm.company}</p>
          <p><strong>Message:</strong> ${partnerForm.message}</p>
        `,
      });

      setPartnerState({
        error: '',
        referenceId: createSubmissionReference('PAR'),
        submitted: true,
        submitting: false,
      });
      schedulePartnerReset();
    } catch (error) {
      console.error('Partnership form submission error:', error);
      setPartnerState((current) => ({
        ...current,
        error: getSubmissionError(error),
        submitting: false,
      }));
    }
  };

  const handleCareerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCareerState((current) => ({
      ...current,
      error: '',
      submitting: true,
    }));

    try {
      const attachments: EmailAttachment[] = [];

      if (careerForm.resume) {
        const base64 = await fileToBase64(careerForm.resume);
        attachments.push({
          filename: careerForm.resume.name,
          content: base64,
          contentType: careerForm.resume.type || 'application/octet-stream',
          size: careerForm.resume.size,
        });
      }

      await sendEmail({
        attachments,
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
      });

      setCareerState({
        error: '',
        referenceId: createSubmissionReference('CAR'),
        submitted: true,
        submitting: false,
      });
      scheduleCareerReset();
    } catch (error) {
      console.error('Career form submission error:', error);
      setCareerState((current) => ({
        ...current,
        error: getSubmissionError(error),
        submitting: false,
      }));
    }
  };

  return (
    <>
      <section className="bg-[#f5f5dc] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="bg-gradient-to-r from-[#436175] to-[#585a5e] p-6 text-white">
                <div className="mb-4 flex items-center">
                  <MessageSquare className="mr-3 h-8 w-8" />
                  <h3 className="text-2xl font-bold">Send Us a Message</h3>
                </div>
                <p className="text-white/80">
                  Get your free consultation and personalized immigration guidance
                </p>
              </div>

              <form onSubmit={handleGeneralSubmit} className="space-y-6 p-6">
                {generalState.error && !generalState.submitted ? (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {generalState.error}
                  </div>
                ) : null}

                {generalState.submitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#436175]/10">
                      <CheckCircle className="h-10 w-10 text-[#436175]" />
                    </div>
                    <h4 className="mb-4 text-xl font-bold text-[#436175]">Thank You!</h4>
                    <p className="mb-4 text-[#585a5e]">
                      Your message has been sent successfully.
                      Our team will contact you within 24 hours.
                    </p>
                    <div className="text-sm text-gray-500">
                      Reference ID: {generalState.referenceId}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#585a5e]">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={generalForm.name}
                          onChange={(event) => {
                            setGeneralState((current) => ({ ...current, error: '' }));
                            setGeneralForm((current) => ({
                              ...current,
                              [event.target.name]: event.target.value,
                            }));
                          }}
                          placeholder="John Doe"
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#585a5e]">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={generalForm.email}
                          onChange={(event) => {
                            setGeneralState((current) => ({ ...current, error: '' }));
                            setGeneralForm((current) => ({
                              ...current,
                              [event.target.name]: event.target.value,
                            }));
                          }}
                          placeholder="john@email.com"
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#585a5e]">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={generalForm.phone}
                          onChange={(event) => {
                            setGeneralState((current) => ({ ...current, error: '' }));
                            setGeneralForm((current) => ({
                              ...current,
                              [event.target.name]: event.target.value,
                            }));
                          }}
                          placeholder={brandPhoneDisplay}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#585a5e]">Service Interested In *</label>
                        <select
                          name="service"
                          value={generalForm.service}
                          onChange={(event) => {
                            setGeneralState((current) => ({ ...current, error: '' }));
                            setGeneralForm((current) => ({
                              ...current,
                              [event.target.name]: event.target.value,
                            }));
                          }}
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
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
                      <label className="mb-2 block text-sm font-medium text-[#585a5e]">Message *</label>
                      <textarea
                        name="message"
                        value={generalForm.message}
                        onChange={(event) => {
                          setGeneralState((current) => ({ ...current, error: '' }));
                          setGeneralForm((current) => ({
                            ...current,
                            [event.target.name]: event.target.value,
                          }));
                        }}
                        placeholder="Tell us about your immigration goals..."
                        rows={4}
                        required
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={generalState.submitting}
                      className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-[#436175] to-[#585a5e] px-6 py-4 font-semibold text-white transition-all duration-300 hover:from-[#585a5e] hover:to-[#436175] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {generalState.submitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
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

      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">Join Our Network</h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Partner with us or join our team. Together, we can help more people achieve their immigration dreams.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                    <div className="mb-4 flex items-center">
                      <Building className="mr-3 h-8 w-8" />
                      <h3 className="text-2xl font-bold">Partner With Us</h3>
                    </div>
                    <p className="text-blue-100">
                      Join our network of trusted partners and grow your business with us
                    </p>
                  </div>

                  <form onSubmit={handlePartnerSubmit} className="space-y-6 p-6">
                    {partnerState.error && !partnerState.submitted ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {partnerState.error}
                      </div>
                    ) : null}

                    {partnerState.submitted ? (
                      <div className="py-8 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                          <CheckCircle className="h-10 w-10 text-orange-600" />
                        </div>
                        <h4 className="mb-4 text-xl font-bold text-gray-900">Thank You!</h4>
                        <p className="mb-4 text-gray-600">
                          Your partnership inquiry has been submitted successfully.
                          Our team will contact you within 24 hours.
                        </p>
                        <div className="text-sm text-gray-500">
                          Reference ID: {partnerState.referenceId}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={partnerForm.name}
                              onChange={(event) => {
                                setPartnerState((current) => ({ ...current, error: '' }));
                                setPartnerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder="John Doe"
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={partnerForm.email}
                              onChange={(event) => {
                                setPartnerState((current) => ({ ...current, error: '' }));
                                setPartnerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder="john@company.com"
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={partnerForm.phone}
                              onChange={(event) => {
                                setPartnerState((current) => ({ ...current, error: '' }));
                                setPartnerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder={brandPhoneDisplay}
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Company Name *</label>
                            <input
                              type="text"
                              name="company"
                              value={partnerForm.company}
                              onChange={(event) => {
                                setPartnerState((current) => ({ ...current, error: '' }));
                                setPartnerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder="Your Company Ltd."
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#585a5e]">Partnership Interest</label>
                          <select
                            name="service"
                            value={partnerForm.service}
                            onChange={(event) => {
                              setPartnerState((current) => ({ ...current, error: '' }));
                              setPartnerForm((current) => ({
                                ...current,
                                [event.target.name]: event.target.value,
                              }));
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
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
                          <label className="mb-2 block text-sm font-medium text-[#585a5e]">Message *</label>
                          <textarea
                            name="message"
                            value={partnerForm.message}
                            onChange={(event) => {
                              setPartnerState((current) => ({ ...current, error: '' }));
                              setPartnerForm((current) => ({
                                ...current,
                                [event.target.name]: event.target.value,
                              }));
                            }}
                            placeholder="Tell us about your partnership proposal..."
                            rows={4}
                            required
                            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#436175]"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={partnerState.submitting}
                          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-[#436175] to-[#585a5e] px-6 py-4 font-semibold text-white transition-all duration-300 hover:from-[#585a5e] hover:to-[#436175] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {partnerState.submitting ? (
                            <>
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              <span>Submit Partnership Inquiry</span>
                            </>
                          )}
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                    <div className="mb-4 flex items-center">
                      <Briefcase className="mr-3 h-8 w-8" />
                      <h3 className="text-2xl font-bold">Join Our Team</h3>
                    </div>
                    <p className="text-purple-100">
                      Build your career with Navigator Immigration
                    </p>
                  </div>

                  <form onSubmit={handleCareerSubmit} className="space-y-6 p-6">
                    {careerState.error && !careerState.submitted ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {careerState.error}
                      </div>
                    ) : null}

                    {careerState.submitted ? (
                      <div className="py-8 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                          <CheckCircle className="h-10 w-10 text-orange-600" />
                        </div>
                        <h4 className="mb-4 text-xl font-bold text-gray-900">Application Received!</h4>
                        <p className="mb-4 text-gray-600">
                          Your job application has been submitted successfully.
                          Our HR team will review your profile and contact you soon.
                        </p>
                        <div className="text-sm text-gray-500">
                          Reference ID: {careerState.referenceId}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={careerForm.name}
                              onChange={(event) => {
                                setCareerState((current) => ({ ...current, error: '' }));
                                setCareerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder="John Doe"
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              value={careerForm.email}
                              onChange={(event) => {
                                setCareerState((current) => ({ ...current, error: '' }));
                                setCareerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder="john@email.com"
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={careerForm.phone}
                              onChange={(event) => {
                                setCareerState((current) => ({ ...current, error: '' }));
                                setCareerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              placeholder={brandPhoneDisplay}
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-[#585a5e]">Position Applied *</label>
                            <select
                              name="position"
                              value={careerForm.position}
                              onChange={(event) => {
                                setCareerState((current) => ({ ...current, error: '' }));
                                setCareerForm((current) => ({
                                  ...current,
                                  [event.target.name]: event.target.value,
                                }));
                              }}
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
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
                          <label className="mb-2 block text-sm font-medium text-[#585a5e]">Resume/CV *</label>
                          <div className="relative">
                            <input
                              type="file"
                              name="resume"
                              onChange={(event) => {
                                const selectedFile = event.target.files?.[0];

                                if (!selectedFile) {
                                  return;
                                }

                                if (selectedFile.size > MAX_RESUME_SIZE_BYTES) {
                                  setCareerState((current) => ({
                                    ...current,
                                    error: 'Resume files must be 3 MB or smaller for email delivery. Please upload a smaller file.',
                                  }));
                                  event.target.value = '';
                                  return;
                                }

                                setCareerState((current) => ({ ...current, error: '' }));
                                setCareerForm((current) => ({
                                  ...current,
                                  resume: selectedFile,
                                }));
                              }}
                              accept=".pdf,.doc,.docx"
                              required
                              className="w-full rounded-lg border border-[rgb(247,55,24)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                            />
                            {careerForm.resume ? (
                              <div className="mt-2 text-xs text-green-600">
                                Selected: {careerForm.resume.name}
                              </div>
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 3MB)</p>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#585a5e]">Cover Letter *</label>
                          <textarea
                            name="message"
                            value={careerForm.message}
                            onChange={(event) => {
                              setCareerState((current) => ({ ...current, error: '' }));
                              setCareerForm((current) => ({
                                ...current,
                                [event.target.name]: event.target.value,
                              }));
                            }}
                            placeholder="Tell us why you want to join our team..."
                            rows={4}
                            required
                            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={careerState.submitting}
                          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {careerState.submitting ? (
                            <>
                              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
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
    </>
  );
}
