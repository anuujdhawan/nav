'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Users, Award, Globe, CheckCircle, Star, Target, Phone, Mail, MapPin } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';
import { brandPhoneDisplay } from '@/lib/contactInfo';

export default function About() {
  const seoPage = coreSeoPages.about;
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const anchorPoints = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'story', label: 'Our Story', icon: <Star className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 15% 85%, rgba(67, 97, 117, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 85% 15%, rgba(88, 90, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(67, 97, 117, 0.04) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-[#f5f5dc] border-b border-light-brown-grey shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === anchor.id
                      ? 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white'
                      : 'text-[#585a5e] hover:text-white hover:bg-gradient-to-r hover:from-[#436175] hover:to-[#585a5e]'
                  }`}
                >
                  <span className="hidden sm:inline">{anchor.icon}</span>
                  <span>{anchor.label}</span>
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-medium rounded-lg hover:from-[#585a5e] hover:to-[#436175] transition-all duration-300 text-xs lg:text-sm"
            >
              Get Started
              <ArrowRight className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>
        </div>
      </div>

      <motion.section 
        id="overview" 
        className="bg-gradient-to-br from-[#f5f5dc] to-[#436175]/20 pt-48 pb-16 lg:pt-36 lg:pb-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-6">
              {seoPage.h1}
            </h1>
            <p className="text-xl text-[#585a5e] mb-8">
              {seoPage.answer}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="story" 
        className="py-16 bg-[#f5f5dc]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#436175] mb-6">Our Story</h2>
              <p className="text-lg text-[#585a5e] mb-6">
                Founded in 2015, Navigator Immigration has grown from a small Dubai consultancy 
                to one of the most trusted immigration service providers in the industry. 
                Our journey began with a simple mission: to help individuals and families 
                achieve their dreams of living, working, and studying abroad.
              </p>
              <p className="text-lg text-[#585a5e] mb-6">
                Over the years, we&apos;ve helped thousands of clients successfully navigate 
                the complex immigration processes of Canada, Australia, EU countries, 
                and other popular destinations. Our success is built on expertise, 
                integrity, and a genuine commitment to our clients&apos; success.
              </p>
              <p className="text-lg text-[#585a5e]">
                Today, Navigator Immigration stands as a trusted source of guidance 
                for those seeking new opportunities abroad, combining cutting-edge 
                technology with personalized service to deliver exceptional results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#436175] mb-2">15+</div>
                    <p className="text-[#585a5e]">Years of Guidance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#436175] mb-2">15+</div>
                    <p className="text-[#585a5e]">Countries Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#436175] mb-2">5</div>
                    <p className="text-[#585a5e]">Core Service Areas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#436175] mb-2">1</div>
                    <p className="text-[#585a5e]">Dubai Office</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-[#f5f5dc]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#436175] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-[#585a5e] max-w-3xl mx-auto">
              Guided by our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Our Mission</h3>
              <p className="text-[#585a5e]">
                To provide exceptional immigration services that transform lives and 
                create opportunities for individuals and families worldwide.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Excellence</h3>
              <p className="text-[#585a5e]">
                We strive for the highest standards in every aspect of our service, 
                from initial consultation to final settlement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Client-Centered</h3>
              <p className="text-[#585a5e]">
                Our clients&apos; success is our success. We prioritize their needs and 
                work tirelessly to achieve their immigration goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Global Perspective</h3>
              <p className="text-[#585a5e]">
                We understand diverse cultures and immigration systems, providing 
                insights that bridge gaps across borders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Integrity</h3>
              <p className="text-[#585a5e]">
                We operate with transparency and honesty, building trust through 
                ethical practices and clear communication.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#436175]" />
              </div>
              <h3 className="text-xl font-semibold text-[#436175] mb-3">Innovation</h3>
              <p className="text-[#585a5e]">
                We embrace technology and innovative approaches to streamline 
                the immigration process and enhance client experience.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="py-20 bg-[#f5f5dc]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-4">Contact Navigator Immigration</h2>
            <p className="text-xl text-[#585a5e] max-w-3xl mx-auto">
              Get in touch with our immigration experts for personalized guidance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#436175] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#436175]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#436175] mb-1">Phone</h4>
                    <p className="text-[#585a5e]">{brandPhoneDisplay}</p>
                    <p className="text-muted-brown-grey text-sm">Mon-Sat: 10AM-7PM Dubai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#436175]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#436175] mb-1">Email</h4>
                    <p className="text-[#585a5e]">info@navigatorglobals.com</p>
                    <p className="text-muted-brown-grey text-sm">Email and consultation support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#436175]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#436175]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#436175] mb-1">Head Office</h4>
                    <p className="text-[#585a5e]">606, Latifa Towers, Trade Center 1, Sheikh Zayed Road</p>
                    <p className="text-[#585a5e]">Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-[#436175] mb-4">Office Hours</h4>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between py-2">
                    <span className="text-[#585a5e]">Monday - Saturday</span>
                    <span className="font-medium text-[#436175]">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#585a5e]">Sunday</span>
                    <span className="font-medium text-[#436175]">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#436175] mb-6">Why Choose Navigator Immigration?</h3>
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#585a5e]">15+ years of immigration expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#585a5e]">15+ years of immigration guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#585a5e]">Dubai office at Latifa Towers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#585a5e]">Services for 15+ countries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[#585a5e]">Personalized immigration strategies</span>
                  </div>
                </div>
                <p className="text-[#585a5e] mb-6">
                  Our team of experienced immigration consultants is ready to help you navigate your journey abroad. Schedule a free consultation today to discuss your immigration goals.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-gradient-to-br from-[#f5f5dc] to-[#436175]/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-4">Get Your Free Visit Visa Assessment</h2>
              <p className="text-xl text-[#585a5e]">
                Find out your eligibility for visitor visas in 24 hours
              </p>
            </motion.div>
            <QuickAssessmentForm 
              title="Visit Visa Assessment"
              subtitle="Discover your travel visa options"
              serviceType="visit"
            />
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-gradient-to-r from-[#436175] to-[#585a5e]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Speak with our Dubai team if you want practical guidance on PR, study, work, visit, or business immigration options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f5f5dc] text-[#436175] font-semibold rounded-lg hover:bg-light-brown-grey transition-colors"
            >
              Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
                  href="/immigration/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-[#f5f5dc] hover:text-[#436175] transition-colors"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </motion.section>
      <FaqSection items={seoPage.faqs} />
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
}
