'use client';

import { useState } from 'react';
 
const nationalities = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh',
  'Belgium', 'Brazil', 'Canada', 'China', 'Denmark', 'Egypt', 'France', 'Germany',
  'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Japan', 'Jordan',
  'Malaysia', 'Mexico', 'Netherlands', 'New Zealand', 'Nigeria', 'Pakistan', 'Philippines',
  'Poland', 'Portugal', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea',
  'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'UAE', 'UK',
  'Ukraine', 'USA', 'Vietnam', 'Other'
];

const countries = nationalities;

const programs = [
  'Skilled Immigration',
  'Work Permits',
  'Study & Visit Visas',
  'Business Immigration',
  'Canada PR',
  'Australia PR',
  'EU Work Permit',
  'Student Visa',
  'Visitor Visa',
  'Investment Program',
  'Start-up Visa',
  'Family Sponsorship'
];

const phoneUnits = ['+971', '+1', '+44', '+91', '+61', '+86', '+49', '+33', '+81', '+82'];

const inputClassName =
  'w-full rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs text-dark-blue-grey placeholder-muted-brown-grey focus:outline-none focus:ring-2 focus:ring-dark-blue-grey';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  phoneUnit: string;
  nationality: string;
  jobTitle: string;
  countryOfResidence: string;
  programInterest: string;
  message: string;
}

const CitizenshipEnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    phoneUnit: '+971',
    nationality: '',
    jobTitle: '',
    countryOfResidence: '',
    programInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.nationality) {
      newErrors.nationality = 'Nationality is required';
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.countryOfResidence) {
      newErrors.countryOfResidence = 'Country of residence is required';
    }
    if (!formData.programInterest) {
      newErrors.programInterest = 'Program interest is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const emailData = {
        to: 'info@navigatorglobals.com',
        subject: `Citizenship Inquiry from ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Citizenship Inquiry</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phoneUnit} ${formData.phoneNumber}</p>
          <p><strong>Nationality:</strong> ${formData.nationality}</p>
          <p><strong>Country of Residence:</strong> ${formData.countryOfResidence}</p>
          <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
          <p><strong>Program Interest:</strong> ${formData.programInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      };

      // Send email
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      const result = await response.json();

      // Log result
      if (result.success) {
        setStatusMessage({ type: 'success', text: 'Form submitted successfully! We will contact you shortly.' });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            phoneUnit: '+971',
            nationality: '',
            jobTitle: '',
            countryOfResidence: '',
            programInterest: '',
            message: ''
          });
          setStatusMessage(null);
        }, 5000);
      } else {
        setStatusMessage({ type: 'error', text: 'Failed to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof DOMException && error.name === 'AbortError') {
        setStatusMessage({ type: 'error', text: 'Request timed out. Please try again.' });
      } else {
        setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-20 mx-auto w-full max-w-sm rounded-2xl bg-[#e5e7eb] p-4 shadow-2xl">
      <div className="bg-gradient-to-r from-dark-blue-grey to-muted-brown-grey text-very-light-beige p-6 rounded-t-2xl -m-4 mb-6">
        <h2 className="text-center text-xl font-bold">Instant Enquiry</h2>
        <p className="text-sm text-center mt-1 opacity-90">Get expert guidance for your immigration journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="sr-only" htmlFor="hero-first-name">
              First name
            </label>
            <input
              id="hero-first-name"
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={inputClassName}
            />
            {errors.firstName && <p className="text-muted-brown-grey text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="sr-only" htmlFor="hero-last-name">
              Last name
            </label>
            <input
              id="hero-last-name"
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={inputClassName}
            />
            {errors.lastName && <p className="text-muted-brown-grey text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-email">
            Email address
          </label>
          <input
            id="hero-email"
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          {errors.email && <p className="text-muted-brown-grey text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="hero-phone-unit">
              Country calling code
            </label>
            <select
              id="hero-phone-unit"
              name="phoneUnit"
              value={formData.phoneUnit}
              onChange={handleInputChange}
              className="rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs text-dark-blue-grey focus:outline-none focus:ring-2 focus:ring-dark-blue-grey"
            >
              {phoneUnits.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="hero-phone-number">
              Phone number
            </label>
            <input
              id="hero-phone-number"
              type="tel"
              name="phoneNumber"
              placeholder="Phone number*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className={`flex-1 ${inputClassName}`}
            />
          </div>
          {errors.phoneNumber && <p className="mt-1 text-xs text-muted-brown-grey">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-nationality">
            Nationality
          </label>
          <select
            id="hero-nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            required
            className={`w-full rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-dark-blue-grey ${formData.nationality ? 'text-dark-blue-grey' : 'text-muted-brown-grey'}`}
          >
            <option value="" disabled>Nationality*</option>
            {nationalities.map(nationality => (
              <option key={nationality} value={nationality}>{nationality}</option>
            ))}
          </select>
          {errors.nationality && <p className="text-muted-brown-grey text-xs mt-1">{errors.nationality}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-job-title">
            Job title
          </label>
          <input
            id="hero-job-title"
            type="text"
            name="jobTitle"
            placeholder="Job Title*"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
            className={inputClassName}
          />
          {errors.jobTitle && <p className="text-muted-brown-grey text-xs mt-1">{errors.jobTitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="sr-only" htmlFor="hero-country">
              Country of residence
            </label>
            <select
              id="hero-country"
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={handleInputChange}
              required
              className={`w-full rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-dark-blue-grey ${formData.countryOfResidence ? 'text-dark-blue-grey' : 'text-muted-brown-grey'}`}
            >
              <option value="" disabled>Country of Residence*</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.countryOfResidence && <p className="text-muted-brown-grey text-xs mt-1">{errors.countryOfResidence}</p>}
          </div>
          <div>
            <label className="sr-only" htmlFor="hero-program-interest">
              Program interest
            </label>
            <select
              id="hero-program-interest"
              name="programInterest"
              value={formData.programInterest}
              onChange={handleInputChange}
              required
              className={`w-full rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-dark-blue-grey ${formData.programInterest ? 'text-dark-blue-grey' : 'text-muted-brown-grey'}`}
            >
              <option value="" disabled>Program Interest*</option>
              {programs.map(program => (
                <option key={program} value={program}>{program}</option>
              ))}
            </select>
            {errors.programInterest && <p className="text-muted-brown-grey text-xs mt-1">{errors.programInterest}</p>}
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="hero-message">
            Additional message
          </label>
          <textarea
            id="hero-message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={2}
            className="w-full resize-none rounded-lg border border-[#585a5e] bg-very-light-beige px-2 py-1.5 text-xs text-dark-blue-grey placeholder-muted-brown-grey focus:outline-none focus:ring-2 focus:ring-dark-blue-grey"
          />
        </div>

        {statusMessage && (
          <div
            role={statusMessage.type === 'error' ? 'alert' : 'status'}
            className={`p-3 rounded-lg text-sm font-medium ${
            statusMessage.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
          >
            {statusMessage.text}
          </div>
        )}
        
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#585a5e] to-[#585a5e] py-2 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default CitizenshipEnquiryForm;
