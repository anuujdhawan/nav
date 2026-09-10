'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle, BookOpen, Globe, Users, Award, Star, FileText, Clock, Shield, Briefcase } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  ComparisonTable,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';

export default function StudentVisa() {
  const seoPage = coreSeoPages.studentVisa;
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const anchorPoints = [
    { id: 'overview', label: 'Program Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'destinations', label: 'Destinations', icon: <Globe className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Star className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact-section', label: 'Contact', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(67, 97, 117, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(88, 90, 94, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(67, 97, 117, 0.05) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {seoPage.h1}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-surface-light/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {seoPage.answer}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#436175]/10 text-white font-semibold rounded-lg hover:bg-muted-brown-grey transform hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#destinations"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Destinations
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-white border-b border-light-brown-grey shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeSection === anchor.id
                      ? 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white'
                      : 'text-[#585a5e] hover:text-[#436175] hover:bg-[#f5f5dc]'
                    }`}
                >
                  <span className="hidden sm:inline">{anchor.icon}</span>
                  <span>{anchor.label}</span>
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-orange-600 to-gray-600 text-white font-medium rounded-lg hover:from-gray-600 hover:to-orange-600 transition-all duration-300 text-xs lg:text-sm"
            >
              Get Started
              <ArrowRight className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
      <section id="overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-5 text-center">Student Visa Program Overview</h2>
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Turn your dream of studying abroad into reality with Navigator Immigration.</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Complete student visa solutions for international education with expert guidance and support throughout the application process.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  At Navigator Immigration, we specialize in helping students secure study visas for Canada, USA, UK, Australia, New Zealand, and the EU. With 15+ years of experience, we understand the challenges of international admissions and visa applications, and we know how to turn them into a smoother, better-prepared journey for you.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Our expert team provides end-to-end guidance, including university selection, eligibility assessment, documentation, application submission, and interview preparation. We craft personalized strategies for each student, ensuring your application stands out and meets all immigration requirements.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  We cover all major study destinations:
                </p>
                <ul className="space-y-2 max-w-4xl mx-auto text-left list-disc list-inside">
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>Canada</strong> - Explore world-class universities and PR pathways.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>USA</strong> - Navigate complex F1 visa regulations with expert guidance.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>UK</strong> - Secure your Tier 4/Student visa hassle-free.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>Australia</strong> - Step into global education and career opportunities.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>New Zealand</strong> - Get expert support for student visa approval.
                  </li>
                  <li className="text-sm text-left text-black/90 mb-1 leading-relaxed">
                    <strong>EU countries</strong> - Study in top institutions across Germany, France, Netherlands, and more.
                  </li>
                </ul>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Our expert team provides comprehensive guidance, from initial consultation to visa approval and post-arrival support.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  What sets Navigator Immigration apart is our strategic, student-focused approach. We help you prepare documents carefully, understand the process clearly, and move from admission planning to visa filing with more confidence.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Start your journey to global education today. Contact Navigator Immigration and let us help you study in the country of your dreams with clearer planning and stronger document preparation.
                </p>


          

            
              </div>

              {/* Image on Right */}
              <div className="relative">
                <Image
                  src="/img/images/student-visa.jpeg"
                  alt="Student Visa Program Overview"
                  width="800"
                  height="500"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                </div>
                </div></div></div>

      </section>

      {/* Study Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from world-class educational institutions across the globe
            </p>
          </div>

          {/* Featured Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src="/img/images/canada-new.jpg"
                  alt="Canada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">Most Popular</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl text-white font-bold mb-2">Canada</h3>
                  <p className="text-orange-100 text-lg">Study & Work Opportunities</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Multiple Entry</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">10 Year Validity</span>
                  </div>
                  <div className="flex items-center text-muted-brown-grey">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-semibold">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />2-4 weeks</span>
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />North America</span>
                  </div>
                  <button className="text-muted-brown-grey hover:text-orange-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-56">
                <Image
                  src="/img/images/pexels-samuel-wolfl-628277-1427573.jpg.jpeg"
                  alt="United Kingdom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">Top Choice</span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl text-white font-bold mb-2">United Kingdom</h3>
                  <p className="text-orange-100 text-lg">Student Visa & Graduate Route</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Online Application</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Quick Approval</span>
                  </div>
                  <div className="flex items-center text-muted-brown-grey">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-semibold">4.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />3-4 weeks</span>
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />Europe</span>
                  </div>
                  <button className="text-muted-brown-grey hover:text-orange-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
                  </div></div></div>
      </section>

      {/* Student Visa Benefits Section */}
      <section id="benefits" className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#436175] mb-4">Student Visa Benefits</h2>
            <p className="text-xl text-[#585a5e] mb-8 max-w-3xl mx-auto">
              Discover the advantages of studying abroad with proper student visa authorization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">World-Class Education</h3>
                <p className="text-[#585a5e] mb-4">Access top-ranked universities and high-quality education systems recognized globally.
                </p>
              </div>
            </div>

            <div className="text-center bg-orange-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Work Opportunities</h3>
                <p className="text-[#585a5e] mb-4">Part-time work during studies and post-study work options to gain international experience.
                </p>
              </div>
            </div>

            <div className="text-center bg-purple-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Global Exposure</h3>
                <p className="text-[#585a5e] mb-4">Experience diverse cultures, build international networks, and develop a global perspective.
                </p>
              </div>
            </div>

            <div className="text-center bg-orange-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Career Advancement</h3>
                <p className="text-[#585a5e] mb-4">Enhance your career prospects with international qualifications and experience.
                </p>
              </div>
            </div>

            <div className="text-center bg-red-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">PR Pathways</h3>
                <p className="text-[#585a5e] mb-4">Many countries offer pathways to permanent residency for international students after graduation.
                </p>
              </div>
            </div>

            <div className="text-center bg-cyan-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[rgb(247,55,24)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Student Support</h3>
                <p className="text-[#585a5e] mb-4">Access comprehensive student services, healthcare, and support systems throughout your studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Student Visa Application Process</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Follow our proven 5-step process to secure your student visa efficiently
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Eligibility Check",
                  description: "We assess your academic profile and identify suitable study programs",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 2,
                  title: "University Application",
                  description: "We help you apply to universities and secure admission offers",
                  icon: <BookOpen className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 3,
                  title: "Document Preparation",
                  description: "Our team assists with all required documents for visa application",
                  icon: <FileText className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 4,
                  title: "Visa Application",
                  description: "We submit your student visa application with all supporting documents",
                  icon: <Shield className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 5,
                  title: "Pre-Departure Support",
                  description: "We assist with travel arrangements and settlement in your new country",
                  icon: <Award className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                }
              ].map((item, index) => (
                <div key={index} className="relative h-full">
                  <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex h-full flex-col items-center text-center">
                      <div className={`w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center mb-6`}>
                        <div className={`text-${item.color}-600`}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8C857A] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-[#8C857A] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-xl hover:from-[#436175] hover:to-[#585a5e] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Student Visa Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Visa Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common requirements for student visa applications across countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Essential Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Valid Passport</span>
                    <p className="text-gray-600 text-sm">With at least 6 months validity</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Letter of Acceptance</span>
                    <p className="text-gray-600 text-sm">From designated learning institution</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Academic Transcripts</span>
                    <p className="text-gray-600 text-sm">Previous educational qualifications</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Language Proficiency</span>
                    <p className="text-gray-600 text-sm">IELTS, TOEFL, or equivalent test scores</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                Financial & Supporting Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Proof of Funds</span>
                    <p className="text-gray-600 text-sm">Bank statements and financial guarantees</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Medical Certificate</span>
                    <p className="text-gray-600 text-sm">Health examination results</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Police Clearance</span>
                    <p className="text-gray-600 text-sm">Background check certificates</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Statement of Purpose</span>
                    <p className="text-gray-600 text-sm">Personal statement and study plan</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us for Student Visa Assistance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance for your student visa application
            </p>
          </div>

          <div className="flex justify-center items-center">
            <QuickAssessmentForm
              title="Student Visa Assessment"
              subtitle="Discover your study abroad options"
              serviceType="student"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent-orange-red to-muted-brown-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Educational Journey Abroad
          </h2>
          <p className="text-xl text-black-900 mb-8 max-w-2xl mx-auto">
            Get structured support for study-abroad admissions, student visa documents, and next-step planning from our Dubai team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/visit-visa"
              className="inline-flex items-center justify-center px-8 py-4 border-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Looking for Visit Visa?
            </Link>
          </div>
        </div>
      </section>
      {seoPage.table ? (
        <ComparisonTable title="Student Visa Comparison" table={seoPage.table} />
      ) : null}
      <FaqSection items={seoPage.faqs} />
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
}
