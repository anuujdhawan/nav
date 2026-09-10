'use client';

import { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { createSubmissionReference } from '@/lib/formatting';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface QuickAssessmentFormProps {
  title?: string;
  subtitle?: string;
  serviceType?: string;
}

const QuickAssessmentForm: React.FC<QuickAssessmentFormProps> = ({ 
  title = "Quick Assessment",
  subtitle = "Get your free consultation",
  serviceType = "immigration"
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: serviceType,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          to: 'info@navigatorglobals.com',
          replyTo: formData.email,
          subject: `${formData.service} Assessment from ${formData.name}`,
          html: `
            <h2>New ${formData.service} Assessment</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `
        })
      });

      clearTimeout(timeout);

      const result = await response.json();

      if (result.success) {
        setReferenceId(createSubmissionReference('QAS'));
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setReferenceId('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: serviceType,
            message: ''
          });
        }, 3000);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-orange-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your consultation request has been submitted successfully. 
          Our team will contact you within 24 hours.
        </p>
        <div className="text-sm text-gray-500">
          Reference ID: {referenceId}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] p-6 text-white">
        <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
        <p className="text-white/90">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-dark-grey" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-dark-grey" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-dark-grey" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
            />
          </div>
          
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
            >
              <option value="skilled">Skilled Immigration</option>
              <option value="business">Business Immigration</option>
              <option value="work-permit">Work Permit</option>
              <option value="study">Study Visa</option>
              <option value="visit">Visit Visa</option>
            </select>
          </div>
        </div>


        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-medium-dark-grey" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your immigration goals..."
            rows={4}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#436175] focus:border-transparent transition-all duration-200 appearance-none bg-white text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Get {formData.service} Assessment</span>
            </>
          )}
        </button>

        <div className="text-center text-sm text-gray-500">
          <p>We respect your privacy. Your information is secure and will never be shared.</p>
        </div>
      </form>
    </div>
  );
};

export default QuickAssessmentForm;
