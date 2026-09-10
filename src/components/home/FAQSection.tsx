'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Building, Briefcase, ChevronDown, HelpCircle } from 'lucide-react';
import { coreSeoPages } from '@/lib/marketingSeo';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openItems, setOpenItems] = useState<{[key: string]: boolean }>({});

  const tabs = [
    { id: 'general', label: 'General', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'skilled', label: 'Skilled PR', icon: <Award className="w-5 h-5" /> },
    { id: 'student', label: 'Student/Visit Visa', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'business', label: 'Business Visa', icon: <Building className="w-5 h-5" /> },
    { id: 'work', label: 'Work Permit', icon: <Briefcase className="w-5 h-5" /> }
  ];

  const faqData = {
    general: coreSeoPages.home.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
      category: 'Navigator Immigration',
    })),
    skilled: [
      {
        question: "How can I apply for Canada PR from Dubai?",
        answer: "Most applicants begin with an eligibility review, language testing, education assessment planning, and route selection for Express Entry or a provincial pathway.",
        category: "General"
      },
      {
        question: "What is the difference between Express Entry and PNP?",
        answer: "Express Entry is the federal application system, while a PNP is a province-led route that may support applicants who match local labour or nomination criteria.",
        category: "Process"
      },
      {
        question: "Can I apply for Canada PR without a job offer?",
        answer: "Yes. Many skilled applicants pursue Canada PR without a job offer, although scores, education, and work experience remain important.",
        category: "Documentation"
      },
      {
        question: "How do I apply for Australia PR?",
        answer: "Australia PR planning often includes points review, skills assessment preparation, English testing, and comparing subclass 189, 190, or 491 routes.",
        category: "Eligibility"
      },
      {
        question: "Can my family be included in my PR application?",
        answer: "In many skilled migration programs, eligible spouses and dependent children can be included if the application meets the program rules.",
        category: "Process"
      }
    ],
    student: [
      {
        question: "What documents are required for a student visa?",
        answer: "Common student visa documents include a passport, admission letter, academic records, language results, proof of funds, and supporting study-plan documents.",
        category: "Language"
      },
      {
        question: "How do I apply for a Canada study permit?",
        answer: "Students usually need an acceptance letter, financial proof, identity documents, and a complete application aligned with Canada’s study permit rules.",
        category: "Work Rights"
      },
      {
        question: "How do I apply for a USA F1 visa?",
        answer: "The USA F1 process commonly includes school admission, I-20 issuance, DS-160 filing, fee payment, and interview preparation.",
        category: "Financial"
      },
      {
        question: "Do I need IELTS for a student visa?",
        answer: "Many destinations and institutions require IELTS, TOEFL, PTE, or another accepted language score depending on the course and country.",
        category: "Family"
      },
      {
        question: "Can students get PR after studying abroad?",
        answer: "Some destinations offer post-study work options that may support future skilled migration, but the path depends on the country and your long-term profile.",
        category: "Post-Graduation"
      }
    ],
    business: [
      {
        question: "What is business immigration?",
        answer: "Business immigration refers to visa and residency pathways for founders, investors, and business owners entering a country through business activity or investment.",
        category: "Investment"
      },
      {
        question: "What is citizenship by investment?",
        answer: "Citizenship by investment is a structured program in selected countries where eligible applicants may pursue citizenship after meeting legal investment and due-diligence requirements.",
        category: "Eligibility"
      },
      {
        question: "What is the Canada Start-up Visa?",
        answer: "Canada Start-up Visa is a founder-focused pathway that generally requires an innovative business idea and support from a designated organization.",
        category: "Experience"
      },
      {
        question: "Can my family be included in business immigration?",
        answer: "Many investor and entrepreneur pathways allow eligible dependants, but family inclusion depends on the country and route selected.",
        category: "Process"
      },
      {
        question: "What documents are required for an investor visa?",
        answer: "Investor visa applications often require identity documents, business or financial records, source-of-funds evidence, and country-specific compliance paperwork.",
        category: "Flexibility"
      }
    ],
    work: [
      {
        question: "How can I get a Europe work permit?",
        answer: "Many Europe work permit routes require a suitable job offer, role-specific documents, and a country-specific application process.",
        category: "Types"
      },
      {
        question: "Which European countries offer work permits?",
        answer: "Popular options include Germany, Poland, Portugal, Norway, and other countries using national employment visas or EU Blue Card routes.",
        category: "Timeline"
      },
      {
        question: "What is an EU Blue Card?",
        answer: "The EU Blue Card is a residence and work permit route for qualified professionals who meet participating-country salary and role requirements.",
        category: "Requirements"
      },
      {
        question: "Do I need a job offer for a Europe work permit?",
        answer: "Many Europe work permit routes do require a job offer, although the exact requirement depends on the destination and permit category.",
        category: "Flexibility"
      },
      {
        question: "Can family members join on a Europe work permit?",
        answer: "Some countries allow eligible dependants to join the main applicant, subject to that country’s work-permit and family rules.",
        category: "Renewal"
      }
    ]
  };

  const currentFAQs = faqData[activeTab as keyof typeof faqData];

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section suppressHydrationWarning className="py-24" style={{background: 'linear-gradient(135deg, rgba(247,55,24,0.85), rgba(67,97,117,0.75), rgba(88,90,94,0.85))'}}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-dark-blue-grey mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-medium-dark-grey max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about immigration processes and requirements from our expert consultants
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Tabs */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 lg:space-y-3">
                <h3 className="text-lg font-semibold text-dark-blue-grey mb-4 hidden lg:block">Categories</h3>
                {/* Mobile: horizontal scrollable tabs */}
                <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 -mx-4 px-4 scrollbar-hide">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-left transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-light-brown-grey/30 text-dark-blue-grey shadow-lg border-2 border-white'
                          : 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white border border-white'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`flex-shrink-0 ${
                        activeTab === tab.id ? 'text-dark-blue-grey' : 'text-white'
                      }`}>
                        {tab.icon}
                      </div>
                      <span className="font-medium text-xs">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
                {/* Desktop: vertical tabs */}
                <div className="hidden lg:block space-y-3">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-full text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-light-brown-grey/30 text-dark-blue-grey shadow-lg transform scale-105 border-2 border-white'
                          : 'bg-gradient-to-r from-[#436175] to-[#585a5e] text-white hover:bg-light-brown-grey/30 hover:text-dark-blue-grey hover:shadow-md border border-white'
                      }`}
                      whileHover={{ scale: activeTab === tab.id ? 1.02 : 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className={`flex-shrink-0 ${
                        activeTab === tab.id ? 'text-dark-blue-grey' : 'text-white'
                      }`}>
                        {tab.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-sm">{tab.label}</span>
                        <div className={`text-xs mt-1 ${
                          activeTab === tab.id ? 'text-dark-blue-grey/80' : 'text-white/80'
                        }`}>
                          {faqData[tab.id as keyof typeof faqData].length} questions
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="bg-[#f5f5dc] rounded-2xl p-6 shadow-lg mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-dark-blue-grey to-muted-brown-grey rounded-xl flex items-center justify-center">
                      {tabs.find(tab => tab.id === activeTab)?.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-blue-grey">
                        {tabs.find(tab => tab.id === activeTab)?.label}
                      </h3>
                      
                      <p className="text-medium-dark-grey">
                        {faqData[activeTab as keyof typeof faqData].length} frequently asked questions
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {currentFAQs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#f5f5dc] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-start justify-between p-6 text-left hover:bg-gradient-to-r hover:from-light-brown-grey/20 hover:to-transparent transition-colors duration-200"
                      >
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-dark-blue-grey to-muted-brown-grey rounded-full flex items-center justify-center mt-1">
                            <HelpCircle className="w-5 h-5 text-very-light-beige" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-dark-blue-grey mb-2 leading-tight">
                              {faq.question}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 bg-light-brown-grey/30 text-dark-blue-grey rounded-full text-xs font-medium">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4 mt-1">
                          <motion.div
                            animate={{ rotate: openItems[index] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                          >
                            <ChevronDown className="w-4 h-4 text-medium-dark-grey" />
                          </motion.div>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openItems[index] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-6 bg-gradient-to-r from-light-brown-grey/20 to-transparent">
                              <p className="text-dark-blue-grey leading-relaxed text-base">
                                {faq.answer}
                              </p>
                              <div className="mt-4 flex items-center space-x-4">
                                <Link href="/contact" className="text-sm text-dark-blue-grey hover:text-muted-brown-grey font-medium underline">
                                  Learn more →
                                </Link>
                                <Link href="/contact" className="text-sm text-accent-orange-red hover:text-orange-700 font-medium underline">
                                  Still have questions?
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Help Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-gradient-to-r from-dark-blue-grey to-muted-brown-grey rounded-2xl p-8 text-white text-center"
                >
                  <h3 className="text-2xl text-white font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Can&apos;t find the answer you&apos;re looking for? Our expert immigration consultants are here to help you with personalized guidance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transition-all duration-300">
                      Schedule Consultation
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transition-all duration-300">
                      Contact Support
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
