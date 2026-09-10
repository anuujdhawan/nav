'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, GraduationCap, Plane, CheckCircle, BookOpen, Camera, Globe, Users, Award, Heart, Star, FileText, Clock, Shield } from 'lucide-react';
import QuickAssessmentForm from '../../components/QuickAssessmentForm';

export default function StudyVisitVisas() {
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
    { id: 'study', label: 'Study Programs', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'visit', label: 'Visit Visas', icon: <Plane className="w-4 h-4" /> },
    { id: 'requirements', label: 'Requirements', icon: <FileText className="w-4 h-4" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
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
              Study Abroad & 
              <span className="text-[#f5f5dc]"> Visit Visas</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-very-light-beige/80 max-w-3xl mx-auto">
              Pursue education abroad or visit family and friends with proper visa authorization. 
              We simplify the complex visa application process with expert guidance and 
              personalized support for your international journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/immigration/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transform hover:scale-105 transition-all duration-300"
              >
                Visa Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Anchor Navigation */}
      <div className="sticky z-30 bg-white border-b border-gray-200 shadow-sm top-48 lg:top-36">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-4">
            <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
              {anchorPoints.map((anchor) => (
                <button
                  key={anchor.id}
                  onClick={() => scrollToSection(anchor.id)}
                  className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === anchor.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <span className="hidden sm:inline">{anchor.icon}</span>
                  <span>{anchor.label}</span>
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-medium rounded-lg hover:from-[#436175] hover:to-[#585a5e] transition-all duration-300 text-xs lg:text-sm"
            >
              Get Started
              <ArrowRight className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Students Placed", value: "2500+", icon: <GraduationCap className="w-8 h-8" /> },
              { label: "Visitor Visas", value: "1800+", icon: <Plane className="w-8 h-8" /> },
              { label: "Success Rate", value: "99%", icon: <Award className="w-8 h-8" /> },
              { label: "Universities", value: "500+", icon: <BookOpen className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <div className="text-purple-600 group-hover:text-white transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Assessment</h2>
              <p className="text-xl text-gray-600">
                Take the first step towards your study or visit visa journey
              </p>
            </div>
            <QuickAssessmentForm 
              title="Study/Visit Visa Assessment"
              subtitle="Find out your eligibility in 24 hours"
              serviceType="study"
            />
          </div>
        </div>
      </section>

      {/* Study Visas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Study Visas</h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">World-Class Education Awaits</h3>
              <p className="text-lg text-gray-600 mb-6">
                Study at world-class institutions in Canada, Australia, UK, USA, and EU countries. 
                We help you secure student visas for your educational journey, from application 
                to arrival, ensuring a smooth transition to your new academic environment.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Canada Study Permit
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Study at designated learning institutions across Canada with pathways 
                    to post-graduate work permits and permanent residency. Canada offers 
                    high-quality education at competitive tuition rates with multicultural 
                    campuses and excellent research opportunities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">PGWP Eligible</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">PR Pathway</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Affordable</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Australia Student Visa (500)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Full-time study in Australian institutions with work rights during 
                    studies and post-study work opportunities. Australia is known for its 
                    excellent quality of life, world-ranked universities, and vibrant 
                    student cities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Work Rights</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">PSW Visa</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Top Universities</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    UK & USA Student Visas
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Access prestigious universities in the UK and USA with comprehensive 
                    visa support. Both countries offer exceptional educational opportunities 
                    with diverse programs and global recognition.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Prestigious</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Research Focus</span>
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">Global Recognition</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Student Visa Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">World-class education</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Part-time work rights</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Post-study work options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Pathway to permanent residency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl mb-8" style={{height: '384px'}}>
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Study Abroad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Study Your Dream Course</h3>
                  <p className="text-[#436175]100">Join thousands of international students</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Popular Study Destinations</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">CA</span>
                      </div>
                      <span className="text-gray-700">Canada</span>
                    </div>
                    <span className="text-orange-600 font-semibold">High Demand</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-[#436175]600 text-xs font-bold">AU</span>
                      </div>
                      <span className="text-gray-700">Australia</span>
                    </div>
                    <span className="text-orange-600 font-semibold">Top Choice</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-xs font-bold">UK</span>
                      </div>
                      <span className="text-gray-700">United Kingdom</span>
                    </div>
                    <span className="text-[#436175]600 font-semibold">Prestigious</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">US</span>
                      </div>
                      <span className="text-gray-700">United States</span>
                    </div>
                    <span className="text-[#436175]600 font-semibold">Elite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Visas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl mb-8" style={{height: '384px'}}>
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Visitor Visas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Your Loved Ones</h3>
                  <p className="text-[#436175]100">Create memories that last a lifetime</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Visitor Visa Types</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Tourism Visa</h5>
                    <p className="text-gray-600 text-sm">For leisure travel and sightseeing</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Family Visit Visa</h5>
                    <p className="text-gray-600 text-sm">Visit family members and relatives</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Business Visitor Visa</h5>
                    <p className="text-gray-600 text-sm">Attend meetings, conferences, and events</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Visitor Visas</h2>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Your World</h3>
              <p className="text-lg text-gray-600 mb-6">
                Visit family, friends, or explore new destinations with proper visitor authorization. 
                We assist with tourist and family visit visas worldwide, making your travel 
                dreams a reality with simplified application processes.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Canada Visitor Visa (TRV)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Temporary Resident Visa for tourism, family visits, or business meetings. 
                    Canada offers multiple entry visas with validity up to 10 years, allowing 
                    multiple visits during the validity period.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Multiple Entry</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">10 Year Validity</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Fast Processing</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Australia Visitor Visa (600)
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Tourism or visiting family/friends with streamlined online application process. 
                    Australia offers visitor visas with various streams including tourist, 
                    business visitor, and sponsored family visitor visas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Online Application</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Quick Approval</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Multiple Streams</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    Schengen Visitor Visa
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Single visa for 26 European countries with 90-day stay allowance. 
                    Perfect for European tours, visiting multiple countries with one visa 
                    application and seamless border crossings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">26 Countries</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">90 Days Stay</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Multi-Country</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Visitor Visa Requirements:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Valid passport with sufficient validity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Purpose of visit documentation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Proof of financial means</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Ties to home country</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your study and travel visa applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <BookOpen className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Counseling</h3>
              <p className="text-gray-600 mb-4">
                Guidance on choosing the right institution and program based on your academic background, career goals, and budget.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Course selection assistance</li>
                <li>• University application support</li>
                <li>• Scholarship guidance</li>
                <li>• Career planning</li>
              </ul>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <FileText className="w-10 h-10 text-[#436175]600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Preparation</h3>
              <p className="text-gray-600 mb-4">
                Complete assistance with application forms, financial documentation, and all required paperwork for visa submission.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Application form completion</li>
                <li>• Financial documentation</li>
                <li>• Statement of purpose writing</li>
                <li>• Document verification</li>
              </ul>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                <Camera className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pre-Departure Support</h3>
              <p className="text-gray-600 mb-4">
                Help with travel arrangements, accommodation, and settlement guidance to ensure smooth transition to your new destination.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Travel booking assistance</li>
                <li>• Accommodation support</li>
                <li>• Airport pickup arrangements</li>
                <li>• Orientation programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">How to Get Study/Visit Visa</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              Follow our proven 5-step process to secure your study or visitor visa efficiently
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { 
                  step: 1, 
                  title: "Eligibility Check", 
                  description: "We assess your eligibility and identify the best visa option",
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: "blue"
                },
                { 
                  step: 2, 
                  title: "Document Prep", 
                  description: "Our team helps you gather and prepare all necessary documents",
                  icon: <FileText className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 3, 
                  title: "Application", 
                  description: "We submit your application with all supporting documents",
                  icon: <Shield className="w-8 h-8" />,
                  color: "purple"
                },
                { 
                  step: 4, 
                  title: "Follow-up", 
                  description: "We track your application progress and keep you informed",
                  icon: <Users className="w-8 h-8" />,
                  color: "orange"
                },
                { 
                  step: 5, 
                  title: "Approval", 
                  description: "We assist with pre-departure arrangements and settlement support",
                  icon: <Award className="w-8 h-8" />,
                  color: "red"
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-xl hover:from-[#436175] hover:to-[#585a5e] transition-all duration-300 shadow-lg"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Visit Visa Assessment Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Visit Visa Assessment</h2>
              <p className="text-xl text-gray-600">
                Find out your eligibility for visitor visas in 24 hours
              </p>
            </div>
            <QuickAssessmentForm 
              title="Visit Visa Assessment"
              subtitle="Discover your travel visa options"
              serviceType="visit"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-orange-red to-muted-brown-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Educational or Travel Journey
          </h2>
          <p className="text-xl text-[#436175]100 mb-8 max-w-3xl mx-auto">
            Let us help you navigate the visa process for studying abroad or visiting your dream destinations. 
            Your international journey starts here with expert guidance every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[rgb(247,55,24)] text-[rgb(247,55,24)] font-semibold rounded-lg hover:bg-[rgb(247,55,24)] hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/immigration/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300"
            >
              Student Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
