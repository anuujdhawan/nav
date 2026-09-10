'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Plane, CheckCircle, Camera, Globe, Users, Award, Heart, FileText, Clock, Shield, Briefcase } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  ComparisonTable,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';

export default function VisitVisa() {
  const seoPage = coreSeoPages.visitVisa;
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
    { id: 'types', label: 'Visa Types', icon: <FileText className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 35% 65%, rgba(67, 97, 117, 0.07) 0%, transparent 50%),
        radial-gradient(circle at 65% 35%, rgba(88, 90, 94, 0.07) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(67, 97, 117, 0.05) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {seoPage.h1}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-surface-light/80 max-w-3xl mx-auto">
              {seoPage.answer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-accent-blue-dark transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/immigration/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-surface-light text-white font-semibold rounded-lg hover:bg-surface-light hover:text-[#436175] transform hover:scale-105 transition-all duration-300"
              >
                Travel Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-[#f5f5dc] border-b border-light-brown-grey shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeSection === anchor.id
                    ? 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white'
                    : 'text-[#585a5e] hover:text-[#436175] hover:bg-background-light'
                    }`}
                >
                  <span className="hidden sm:inline">{anchor.icon}</span>
                  <span>{anchor.label}</span>
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-medium rounded-lg hover:from-accent-blue-dark hover:to-accent-blue transition-all duration-300 text-xs lg:text-sm"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Visitor Visa Program Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-white mb-6">Comprehensive Visitor Services</h3>

                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Explore, visit, and experience new countries with Navigator Immigration.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  At Navigator Immigration, we specialize in helping individuals and families obtain visit visas for Canada, USA, UK, Australia, EU countries, and beyond. With our team expertise, we simplify the application process so you can focus on planning your trip rather than worrying about paperwork.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Our expert team provides complete end-to-end support, including eligibility assessment, document preparation, application submission, and interview guidance. We offer tailored solutions to meet your travel goals, whether it’s a short holiday, family visit, or business trip.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  We make the process more organized and reliable by helping you prepare an accurate, complete application. With Navigator Immigration, you get personalized guidance and responsive support at every step.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Start your journey today and partner with Navigator Immigration to make your international travel plans easier to prepare and submit.
                </p>



              </div>

              {/* Video on Right */}
              <div className="relative">
                <video
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/visit-visa.png"
                >
                  <source src="/videos/visit-visa.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Visa Types Section */}
      < section id="types" className="py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Types of Visitor Visas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We assist with various types of visitor visas based on your travel purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-muted-brown-grey" />
              </div>
              <h3 className="text-xl font-semibold text-muted-brown-grey mb-4 text-center">Tourism Visa</h3>
              <p className="text-gray-600 mb-6 text-center">
                For leisure travel, sightseeing, and exploring new destinations as a tourist.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Sightseeing and tourism</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Short-term vacation travel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Visiting attractions and landmarks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-muted-brown-grey" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Family Visit Visa</h3>
              <p className="text-gray-600 mb-6 text-center">
                Visit family members, relatives, or friends living in another country.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Visit family and relatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Attend family events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Extended stay options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-muted-brown-grey" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Business Visitor Visa</h3>
              <p className="text-gray-600 mb-6 text-center">
                For business meetings, conferences, and professional events.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Business meetings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Conferences and seminars</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                  <span>Professional networking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visitor Visa Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common requirements for visitor visa applications across countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className='grid grid-cols-2 md:grid-cols-2 gap-8'>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex">
                  <FileText className="w-6 h-6 text-muted-brown-grey mr-3" />
                  Essential Documents
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Valid Passport</span>
                      <p className="text-gray-600 text-sm">With at least 6 months validity</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Passport Photos</span>
                      <p className="text-gray-600 text-sm">Recent photographs meeting specifications</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Application Forms</span>
                      <p className="text-gray-600 text-sm">Completed and signed visa application forms</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-muted-brown-grey mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Travel Itinerary</span>
                      <p className="text-gray-600 text-sm">Flight bookings and travel plans</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-muted-brown-grey mr-3" />
                  Financial & Supporting Documents
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Proof of Funds</span>
                      <p className="text-gray-600 text-sm">Bank statements and financial documents</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Employment Proof</span>
                      <p className="text-gray-600 text-sm">Employment letter and salary slips</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Ties to Home Country</span>
                      <p className="text-gray-600 text-sm">Property ownership, family ties</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Travel Insurance</span>
                      <p className="text-gray-600 text-sm">Medical travel insurance coverage</p>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
            </div>

            <div className="mx-auto relative" style={{ width: '100%', maxWidth: '800px', height: 'auto', aspectRatio: '4/3' }}>
              <Image
                src="/img/visit-visa/Visit_2.jpg"
                alt="Visit Visa"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      < section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50" >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Visitor Visa Application Process</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Follow our proven 5-step process to secure your visitor visa efficiently
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                  {
                    step: 1,
                    title: "Eligibility Check",
                    description: "We assess your travel purpose and eligibility for visitor visa",
                    icon: <CheckCircle className="w-8 h-8" />
                  },
                  {
                    step: 2,
                    title: "Document Prep",
                    description: "Our team helps you gather and prepare all necessary documents",
                    icon: <FileText className="w-8 h-8" />
                  },
                  {
                    step: 3,
                    title: "Application",
                    description: "We submit your visitor visa application with all supporting documents",
                    icon: <Shield className="w-8 h-8" />
                  },
                  {
                    step: 4,
                    title: "Follow-up",
                    description: "We track your application progress and keep you informed",
                    icon: <Users className="w-8 h-8" />
                  },
                  {
                    step: 5,
                    title: "Approval",
                    description: "We assist with travel arrangements and pre-departure guidance",
                    icon: <Award className="w-8 h-8" />
                  }
                ].map((item, index) => (
                  <div key={index} className="relative h-full">
                    <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex h-full flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#f5f5dc] rounded-full flex items-center justify-center mb-6">
                          <div className="text-[#436175]">
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Visit Visa Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-20 bg-white" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us for Visit Visa Assistance</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get expert guidance for your visitor visa application
                </p>
              </div>

              <div className="flex justify-center items-center">
                <QuickAssessmentForm
                  title="Visit Visa Assessment"
                  subtitle="Discover your travel visa options"
                  serviceType="visit"
                />
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="relative" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', aspectRatio: '16/9' }}>
              <Image
                src="/img/visit-visa/1.jpg"
                alt="Visit Visa"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-gradient-to-r from-accent-orange-red to-muted-brown-grey" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Travel Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit your loved ones or explore new destinations with our expert visitor visa assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#436175] text-white font-semibold rounded-lg hover:bg-[#585a5e] transform hover:scale-105 transition-all duration-300"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/student-visa"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#436175] text-white font-semibold rounded-lg hover:bg-[#585a5e] transform hover:scale-105 transition-all duration-300"
            >
              Looking for Student Visa?
            </Link>
          </div>
        </div>
      </section >
      {seoPage.table ? (
        <ComparisonTable title="Visit Visa Comparison" table={seoPage.table} />
      ) : null}
      <FaqSection items={seoPage.faqs} />
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div >
  );
}
