'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Building, TrendingUp, CheckCircle, DollarSign, Briefcase, Users, Award, Globe, Shield, Target, FileText, Clock, Star } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  ComparisonTable,
  ComplianceNotice,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';


export default function BusinessImmigration() {
  const seoPage = coreSeoPages.businessImmigration;
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
    { id: 'investment', label: 'Investment Options', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <Star className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 45% 55%, rgba(67, 97, 117, 0.07) 0%, transparent 50%),
        radial-gradient(circle at 55% 45%, rgba(88, 90, 94, 0.07) 0%, transparent 50%),
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
            <p className="text-xl lg:text-2xl mb-8 text-very-light-beige/80 max-w-3xl mx-auto">
              {seoPage.answer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange-red text-white font-semibold rounded-lg hover:bg-muted-brown-grey transform hover:scale-105 transition-all duration-300"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/immigration/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-900 transform hover:scale-105 transition-all duration-300"
              >
                Investment Guide
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
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === anchor.id
                      ? 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white'
                      : 'text-[#436175] hover:text-[#585a5e] hover:bg-[#f5f5dc]'
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">Business Immigration Program Overview</h2>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-12 text-center">Second Passport & Citizenship by Investment - Unlock True Freedom</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-white mb-6">Experience the advantages of a second citizenship and global mobility.</h3>
              
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  Navigator Immigration specializes in citizenship and residence programs through strategic investment, offering clients the opportunity to secure a second passport and greater international flexibility. We guide high-net-worth individuals through carefully vetted programs in Europe, the Caribbean, and other strategic destinations, providing clarity and peace of mind throughout the process.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                  From eligibility assessment to investment planning, documentation, and full application management, our team helps clients evaluate available options and move through the process with more clarity and structure.
                </p>
                <p className="text-sm text-left text-black/90 mb-8 leading-relaxed">
                 Gain freedom, flexibility, and security with Navigator Immigration and a more structured approach to global citizenship planning.
                </p>
              </div>

              {/* Video on Right */}
              <div className="relative">
                <video
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/business.png"
                >
                  <source src="/videos/business.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section id="investment" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8 text-center">Investment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-100/10 to-gray-100/10/10 rounded-xl p-6 shadow-lg">
                <div className="relative h-32 mb-4">
                  <Image
                    src="/img/images/pexels-davegarcia-32642490.jpg.jpeg"
                    alt="Real Estate Investment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Real Estate</h3>
                <p className="text-[#585a5e] mb-4">Invest in government-approved real estate projects</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">Varies by country</div>
                <p className="text-sm text-gray-600">Program-specific threshold</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100/10 to-gray-100/10 rounded-xl p-6 shadow-lg">
                <div className="relative h-32 mb-4">
                  <Image
                    src="/img/images/pexels-armin-rimoldi-5554303.jpg.jpeg"
                    alt="Government Bonds Investment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Government Bonds</h3>
                <p className="text-[#585a5e] mb-4">Purchase government bonds or securities</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">Varies by country</div>
                <p className="text-sm text-gray-600">Program-specific threshold</p>
              </div>
              <div className="bg-gradient-to-br from-accent-orange-red/10 to-muted-brown-grey/10 rounded-xl p-6 shadow-lg">
                <div className="relative h-32 mb-4">
                  <Image
                    src="/img/images/business-immigration.jpeg"
                    alt="Business Equity Investment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-3">Business Equity</h3>
                <p className="text-[#585a5e] mb-4">Invest in established or new businesses</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">Varies by country</div>
                <p className="text-sm text-gray-600">Program-specific threshold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-24 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8 text-center">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-accent-orange-red/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Basic Eligibility</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Age: 18-45 years</li>
                    <li>Language: IELTS 6.0+ or equivalent</li>
                    <li>Education: Minimum high school diploma</li>
                    <li>Work experience: 1+ years in skilled occupation</li>
                  </ul>
                </div>
                <div className="bg-accent-orange-red/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Financial Requirements</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Proof of funds and investment readiness</li>
                    <li>Settlement funds for family</li>
                    <li>Application fees</li>
                    <li>Medical examination costs</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-accent-orange-red/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Documentation</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Business registration documents</li>
                    <li>Financial statements</li>
                    <li>Bank references</li>
                    <li>Investment agreement</li>
                  </ul>
                </div>
                <div className="bg-accent-orange-red/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#436175] mb-3">Personal Requirements</h3>
                  <ul className="space-y-2 text-[#585a5e]">
                    <li>Age: 18-55 years</li>
                    <li>No criminal record</li>
                    <li>Good health</li>
                    <li>Language proficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-orange-red" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Permanent Residency</h3>
                <p className="text-[#585a5e]">Obtain permanent residency for you and your family</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-accent-orange-red" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Business Expansion</h3>
                <p className="text-[#585a5e]">Expand your business to new markets globally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-orange-red" />
                </div>
                <h3 className="text-xl font-semibold text-[#436175] mb-2">Global Mobility</h3>
                <p className="text-[#585a5e]">Travel freely with multiple passports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">How to Get Business Visa</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Follow our proven 6-step process to secure your business immigration visa
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  step: 1, 
                  title: "Initial Consultation", 
                  description: "Evaluate your eligibility and investment options",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 2, 
                  title: "Business Plan", 
                  description: "Develop a comprehensive business plan",
                  icon: <FileText className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 3, 
                  title: "Due Diligence", 
                  description: "Background checks and verification",
                  icon: <Shield className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 4, 
                  title: "Investment", 
                  description: "Make the required investment",
                  icon: <DollarSign className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 5, 
                  title: "Application", 
                  description: "Submit your residency application",
                  icon: <Users className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 6, 
                  title: "Approval", 
                  description: "Receive your residency status",
                  icon: <Award className="w-8 h-8" />,
                  color: "orange"
                }
              ].map((item, index) => (
                <div key={index} className="relative h-full">
                  <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex h-full flex-col items-center text-center">
                      <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}>
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
                  {index < 5 && (
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-[#436175] to-[#585a5e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Start Your Business Immigration Journey</h2>
            <p className="text-xl mb-8">Get expert guidance on business immigration programs</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Business Investors", value: "800+", icon: <Building className="w-8 h-8" /> },
              { label: "Total Investment", value: "$500M+", icon: <DollarSign className="w-8 h-8" /> },
              { label: "Consultation Focus", value: "Route Fit", icon: <Award className="w-8 h-8" /> },
              { label: "Countries", value: "Multi-market", icon: <Globe className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <div className="text-orange-600 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Assessment Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Your Free Assessment</h2>
              <p className="text-xl text-gray-600">
                Take the first step towards your business immigration journey
              </p>
            </div>
            <QuickAssessmentForm 
              title="Business Immigration Assessment"
              subtitle="Find out your eligibility in 24 hours"
              serviceType="business"
            />
          </div>
        </div>
      </section>

      {/* Investment Visas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Investment Visas</h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Secure Residency Through Strategic Investments</h3>
              <p className="text-lg text-gray-600 mb-6">
                Secure residency through strategic investments in various countries. 
                These programs offer pathways to permanent residency for qualified investors 
                with minimum investment requirements and clear processing timelines.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Canada Investor Immigration
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Federal and provincial investor programs including the Start-up Visa program 
                    for innovative entrepreneurs and the Immigrant Investor Venture Capital Pilot 
                    Program. Canada offers stable investment environment with clear pathways to citizenship.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Start-up Visa</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Provincial Programs</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Citizenship Path</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Australia Business Innovation Visa
                  </h4>
                  <p className="text-gray-600 mb-3">
                    For business owners and senior executives with successful business careers. 
                    This visa provides a pathway to permanent residency through business innovation 
                    and investment in Australian economy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Business Innovation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Investment Stream</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">PR Pathway</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    US EB-5 Investor Program
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Investment-based green card program with qualifying investment, due-diligence, and employment criteria under current official rules. Applicants should always confirm the latest thresholds and filing requirements before proceeding.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Green Card</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Direct PR</span>
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">Family Included</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Investment Program Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Permanent residency for family</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Business expansion opportunities</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Target className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Global market access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Target className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Tax optimization benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl mb-8" style={{height: '384px'}}>
                <Image
                  src="/img/images/pexels-andre-furtado-43594-2960861.jpg.jpeg"
                  alt="Business Investment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Invest in Your Future</h3>
                  <p className="text-orange-100">Strategic investments for global residency</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Investment Comparison</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Canada Start-up Visa</span>
                    <span className="font-semibold text-gray-900">Route review required</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Australia Business Innovation</span>
                    <span className="font-semibold text-gray-900">Route review required</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">US EB-5 Program</span>
                    <span className="font-semibold text-gray-900">Route review required</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">EU Golden Visas</span>
                    <span className="font-semibold text-gray-900">Route review required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl mb-8" style={{height: '384px'}}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Entrepreneur Programs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Launch Your Business</h3>
                  <p className="text-blue-100">Entrepreneur visas for innovative founders</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Entrepreneur Success Stories</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Tech Startup Success</h5>
                        <p className="text-sm text-gray-600">Canada Start-up Visa - AI Company</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Secured designated support and expanded operations</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">E-commerce Expansion</h5>
                        <p className="text-sm text-gray-600">UK Innovator Visa - Retail Platform</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Expanded to 3 countries, 50+ employees</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Entrepreneur Programs</h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Launch and Grow Your Business</h3>
              <p className="text-lg text-gray-600 mb-6">
                Launch and grow your business in new markets with entrepreneur immigration programs 
                designed for innovative business founders and startup owners. These programs 
                provide pathways to residency while building successful enterprises.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Canada Start-up Visa Program
                  </h4>
                  <p className="text-gray-600 mb-3">
                    For innovative entrepreneurs with the potential to build scalable businesses 
                    in Canada. Requires a letter of support from designated organizations and 
                    qualifying business ownership.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Innovation Focus</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Venture Support</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Direct PR</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    UK Innovator Founder Visa
                  </h4>
                  <p className="text-gray-600 mb-3">
                    For experienced business founders with innovative business ideas. Replaces 
                    the previous Tier 1 Entrepreneur visa with more flexible requirements 
                    and faster processing times.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Business Experience</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Innovation Required</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Fast Track</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    US L-1A Manager Visa
                  </h4>
                  <p className="text-gray-600 mb-3">
                    For multinational managers and executives transferring to a U.S. branch, 
                    affiliate, or subsidiary of the same company. Provides pathway to 
                    L-1A to EB-1C green card.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Multinational</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Managerial Role</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Green Card Path</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Entrepreneur Program Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Business establishment support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to local markets</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Legal business framework</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Family inclusion benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Immigration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance for your business expansion and investment immigration needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Building className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                In-depth analysis of business opportunities and investment landscapes in target countries.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Market research reports</li>
                <li>• Investment risk assessment</li>
                <li>• Competitive analysis</li>
                <li>• Regulatory compliance review</li>
              </ul>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                Strategic planning for business expansion and international growth with proven methodologies.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Business plan development</li>
                <li>• Financial modeling</li>
                <li>• Growth roadmap creation</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Shield className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Support</h3>
              <p className="text-gray-600 mb-4">
                Ensure full compliance with immigration and business regulations in your target country.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Legal compliance review</li>
                <li>• Regulatory filing assistance</li>
                <li>• Ongoing compliance monitoring</li>
                <li>• Risk mitigation strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#436175] to-[#585a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Expand Your Business Globally
          </h2>
          <p className="text-xl text-black-900 mb-8 max-w-3xl mx-auto">
            Let us help you navigate the complex world of business immigration and unlock new opportunities 
            for your enterprise. Your global expansion starts with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Schedule Business Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/immigration/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-bg-orange-100 transform hover:scale-105 transition-all duration-300"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </section>
      {seoPage.complianceNote ? <ComplianceNotice note={seoPage.complianceNote} /> : null}
      {seoPage.table ? (
        <ComparisonTable title="Business Immigration Comparison" table={seoPage.table} />
      ) : null}
      <FaqSection items={seoPage.faqs} />
      <TrustSection points={seoPage.trustPoints} />
      <RelatedLinksSection links={seoPage.relatedLinks} />
      {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
    </div>
  );
}
