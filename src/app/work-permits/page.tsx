'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Globe, Clock, CheckCircle, FileText, Users, Shield, Award, Building } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';
import {
  ComparisonTable,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from '@/components/seo/PageSeoSections';
import { coreSeoPages } from '@/lib/marketingSeo';


export default function WorkPermits() {
  const seoPage = coreSeoPages.workPermits;
  const [activeSection, setActiveSection] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const anchorPoints = [
    { id: 'overview', label: 'Program Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'types', label: 'Permit Types', icon: <FileText className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Building className="w-4 h-4" /> },
    { id: 'countries', label: 'Countries', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen" style={{
      background: '#f5f5dc',
      backgroundImage: `
        radial-gradient(circle at 40% 60%, rgba(67, 97, 117, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 60% 40%, rgba(88, 90, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(67, 97, 117, 0.04) 0%, transparent 50%)
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {seoPage.h1}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-surface-light/80 max-w-3xl mx-auto">
              {seoPage.answer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/immigration/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#436175] transform hover:scale-105 transition-all duration-300"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-[#f5f5dc] border-b border-[#436175]/20 shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeSection === anchor.id
                      ? 'bg-[#436175] text-white'
                      : 'text-[#585a5e] hover:text-white hover:bg-[#436175]'
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


      {/* Work Permit Overview Section */}
      <section id="overview" className="py-24 bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">European Work Permit Overview</h2>
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Expand your career across Europe with Navigator Immigration.</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on Left */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-white mb-6">Comprehensive Work Permit Solutions</h3>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Choose from our range of Europe work permit solutions with consultation-led guidance on eligibility, documents, and employer-linked application planning.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  At Navigator Immigration, we help skilled professionals and global talent pursue European work permits with clearer route selection, document planning, and employer-linked application support from Dubai.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  We provide end-to-end support for all European work permit pathways, including EU Blue Card, country-specific employment authorizations, and seasonal work visas. Our team assesses your profile, identifies the fastest route to eligibility, and crafts a customized application strategy to maximize your success.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  With Navigator Immigration, you benefit from a more structured process: precise documentation, proactive follow-ups, and expert guidance at every step. Our clients trust us for personalized solutions and practical support as they prepare to move to Europe with confidence.
                </p>
                <p className="text-sm text-left text-black/90 mb-2 leading-relaxed">
                  Ready to work and live in Europe? Contact Navigator Immigration and take the first step toward your European work permit with a clearer application plan.
                </p>
              </div>

              {/* Video on Right */}
              <div className="relative">
                <video
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="none"
                  poster="/videoScreenshots/work-visa.png"
                >
                  <source src="/videos/work-visa.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>

              
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#436175] mb-4">European Work Experience Gallery</h2>
            <p className="text-xl text-[#585a5e] max-w-3xl mx-auto">
              Discover the diverse work environments and opportunities across Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Item 1: Office Work */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern European Office"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Modern Office Spaces</h3>
                  <p className="text-sm text-white">State-of-the-art work environments across Europe</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2: Tech Professionals */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tech Professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Tech Innovation Hubs</h3>
                  <p className="text-sm text-white">Leading technology centers in Berlin, Amsterdam, and Dublin</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3: Healthcare Workers */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Healthcare Professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Healthcare Excellence</h3>
                  <p className="text-sm text-white">Medical professionals serving across European hospitals</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4: Engineering */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Engineering Work"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Engineering Projects</h3>
                  <p className="text-sm text-white">Infrastructure and innovation across the continent</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5: Finance Professionals */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/img/eu-permit/wp_4.jpg"
                alt="Finance and Banking"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Financial Centers</h3>
                  <p className="text-sm text-white">Banking and finance in London, Frankfurt, and Paris</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6: Research & Development */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/img/eu-permit/wp_3.jpg"
                alt="Research Laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Research & Development</h3>
                  <p className="text-sm text-white">Scientific innovation in European research centers</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 7: Hospitality */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/img/eu-permit/wp_2.jpg"
                alt="Hospitality Industry"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Hospitality Excellence</h3>
                  <p className="text-sm text-white">Tourism and service industry opportunities</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 8: Remote Work */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/img/eu-permit/wp_1.jpg"
                alt="Remote Work"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg text-white font-semibold mb-1">Remote Work Culture</h3>
                  <p className="text-sm text-white">Flexible work arrangements across Europe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-xl hover:from-[#585a5e] hover:to-[#436175] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Your European Career
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">How to Get European Work Permit</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Follow our proven 5-step process to secure your European work authorization efficiently
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Eligibility Check",
                  description: "We assess your eligibility and identify the best work permit option",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 2,
                  title: "Document Prep",
                  description: "Our team helps you gather and prepare all necessary documents",
                  icon: <FileText className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 3,
                  title: "Application",
                  description: "We submit your application with all supporting documents",
                  icon: <Shield className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 4,
                  title: "Follow-up",
                  description: "We track your application progress and keep you informed",
                  icon: <Users className="w-8 h-8" />,
                  color: "[#f5f5dc]"
                },
                {
                  step: 5,
                  title: "Approval",
                  description: "We assist with post-approval requirements and settlement support",
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
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="requirements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Work Permit Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance and comprehensive support throughout your work permit journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                <FileText className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Expertise</h3>
              <p className="text-gray-600">
                Comprehensive assistance with all documentation requirements and application forms.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                <Clock className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Processing</h3>
              <p className="text-gray-600">
                Expedited processing options and efficient application submission for quicker results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                <Shield className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">
                Ensure full compliance with immigration laws and regulations of target countries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#f5f5dc] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#436175] transition-colors duration-300">
                <Users className="w-10 h-10 text-[#436175] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous support throughout your employment and assistance with renewals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Visit Visa Assessment Section */}
      <section className="py-20 bg-gradient-to-br from-[#f5f5dc] to-[#e8e8e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free European Work Permit Assessment</h2>
              <p className="text-xl text-gray-600">
                Find out your eligibility for European work permits in 24 hours
              </p>
            </div>
            <QuickAssessmentForm
              title="European Work Permit Assessment"
              subtitle="Discover your European work permit options"
              serviceType="work-permit"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#436175] to-[#585a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your European Work Permit Application Today
          </h2>
          <p className="text-xl text-[#f5f5dc] mb-8 max-w-3xl mx-auto">
            Don&apos;t wait to begin your European career. Contact us now for a comprehensive assessment
            and expert guidance on your European work permit options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
                href="/immigration/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#436175] transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section id="countries">
        {seoPage.table ? (
          <ComparisonTable title="Europe Work Permit Snapshot" table={seoPage.table} />
        ) : null}
        <FaqSection items={seoPage.faqs} />
        <TrustSection points={seoPage.trustPoints} />
        <RelatedLinksSection links={seoPage.relatedLinks} />
        {seoPage.localBlock ? <LocalSeoBlock text={seoPage.localBlock} /> : null}
      </section>
    </div>
  );
}
