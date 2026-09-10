import type { Metadata } from 'next';
import { brandPhoneDisplay, brandPhoneE164 } from './contactInfo';

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoLink = {
  href: string;
  label: string;
};

export type SeoBreadcrumb = {
  name: string;
  path: string;
};

export type SeoTable = {
  columns: string[];
  rows: string[][];
};

export type SeoContentSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type SeoPageConfig = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  answer: string;
  intro?: string;
  ctaLabel?: string;
  serviceName?: string;
  serviceDescription?: string;
  pageType?: 'Service' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'WebPage' | 'Article';
  breadcrumbs: SeoBreadcrumb[];
  faqs: SeoFaq[];
  relatedLinks: SeoLink[];
  trustPoints: string[];
  localBlock?: string;
  sections?: SeoContentSection[];
  table?: SeoTable;
  complianceNote?: string;
};

export const siteUrl = 'https://navigatorglobals.com';
export const siteName = 'Navigator Immigration Consultant';
export const brandKeyword = 'Navigator Immigration Consultant Dubai';
export const brandLogo = '/img/logo/logo-resized.png';
export const brandIcon = '/favicon.png';
export const defaultOgImage = '/title.jpeg';

export const businessInfo = {
  legalName: 'Navigator Immigration Consultant',
  alternateNames: [
    'Navigator',
    'Navigator Immigration Consultant Dubai',
    'Navigator Immigration Consultant UAE',
  ],
  email: 'info@navigatorglobals.com',
  primaryPhone: brandPhoneE164,
  displayPhone: brandPhoneDisplay,
  address: {
    streetAddress: '606, Latifa Towers, Trade Center 1, Sheikh Zayed Road',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '112110',
    addressCountry: 'AE',
  },
  officeHoursLabel: 'Mon-Sat: 10:00 AM to 7:00 PM',
  openingHours: ['Mo-Sa 10:00-19:00'],
  areaServed: [
    'Dubai',
    'UAE',
    'India',
    'Canada',
    'Australia',
    'Europe',
    'United Kingdom',
    'United States',
    'New Zealand',
  ],
  sameAs: [
    'https://www.facebook.com/navigatorimmigration',
    'https://www.linkedin.com/company/navigator-immigration',
    'https://twitter.com/navigatorimm',
    'https://www.instagram.com/navigatorimmigration',
  ],
};

const rootBreadcrumbs: SeoBreadcrumb[] = [{ name: 'Home', path: '/' }];

export const coreSeoPages = {
  home: {
    path: '/',
    title: 'Immigration Consultants in Dubai | Navigator',
    description:
      'Dubai immigration consultants for Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration.',
    keywords: [
      'Navigator Immigration Consultant Dubai',
      'best immigration consultancy in Dubai',
      'trusted visa consultants UAE',
      'Canada PR Australia PR Dubai',
      'immigration services Dubai',
      'visa consultancy Sheikh Zayed Road',
      'student visa work permit Dubai',
      'business immigration Dubai',
    ],
    h1: 'Navigator Immigration Consultant | Trusted Dubai Immigration Consultancy',
    answer:
      'Navigator Immigration Consultant is a Dubai-based visa consultancy helping professionals, students, families, and business owners with Canada PR, Australia PR, student visas, Europe work permits, visit visas, and investor pathways. Our team supports eligibility checks, document preparation, and application strategy from our office at Latifa Towers on Sheikh Zayed Road.',
    ctaLabel: 'Book Free Immigration Consultation',
    serviceName: 'Immigration Consultancy in Dubai',
    serviceDescription:
      'Immigration consultancy in Dubai for Canada PR, Australia PR, study visas, Europe work permits, visit visas, and business immigration.',
    pageType: 'WebPage',
    breadcrumbs: rootBreadcrumbs,
    faqs: [
      {
        question: 'What services does Navigator Immigration Consultant provide?',
        answer:
          'Navigator Immigration Consultant helps with Canada PR, Australia PR, skilled migration, student visas, Europe work permits, visit visas, and business immigration programs.',
      },
      {
        question: 'Is Navigator Immigration Consultant based in Dubai?',
        answer:
          'Yes. Navigator Immigration Consultant serves clients from its Dubai office at 606, Latifa Towers, Trade Center 1, Sheikh Zayed Road.',
      },
      {
        question: 'Can I get a free immigration assessment?',
        answer:
          'Yes. You can contact Navigator Immigration Consultant to request a free immigration assessment and discuss the best visa pathway for your profile.',
      },
      {
        question: 'Which countries does Navigator Immigration Consultant help with?',
        answer:
          'Navigator Immigration Consultant supports clients targeting Canada, Australia, New Zealand, the UK, the USA, and multiple Europe work and study destinations.',
      },
      {
        question: 'Does Navigator Immigration Consultant help with Canada PR and Australia PR?',
        answer:
          'Yes. The team provides support for Canada PR pathways such as Express Entry and PNP, as well as Australia skilled migration options such as subclass 189, 190, and 491.',
      },
      {
        question: 'Does Navigator Immigration Consultant help with student visas and Europe work permits?',
        answer:
          'Yes. Navigator Immigration Consultant advises on study-abroad visas, document preparation, and Europe work permit options for selected countries and job-linked pathways.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'Canada PR consultants in Dubai' },
      { href: '/work-permits', label: 'Europe work permit assistance' },
      { href: '/student-visa', label: 'student visa consultants' },
      { href: '/visit-visa', label: 'visit visa assistance' },
      { href: '/business-immigration', label: 'business immigration consultants' },
      { href: '/contact', label: 'free immigration consultation' },
    ],
    trustPoints: [
      '15+ years of immigration guidance experience',
      'Dubai office at Latifa Towers, Sheikh Zayed Road',
      'Consultation support for PR, study, work, visit, and business visas',
      'Phone, WhatsApp, and email support for UAE and overseas clients',
    ],
    localBlock:
      'Navigator Immigration Consultant is an immigration consultancy in Dubai, UAE serving clients looking for Canada PR, Australia PR, Europe work permits, student visas, visit visas, and business immigration guidance.',
  },
  skilled: {
    path: '/skilled',
    title: 'Canada & Australia PR Consultants in Dubai',
    description:
      'Get Canada PR and Australia PR guidance in Dubai, including profile assessment, document planning, and skilled migration pathway advice.',
    keywords: [
      'Canada PR consultants in Dubai',
      'Australia PR visa consultant in Dubai',
      'skilled immigration consultants',
      'PR visa consultants in Dubai',
      'Canada Express Entry consultants',
      'Australia skilled migration consultants',
      'New Zealand immigration consultants',
      'book free PR consultation',
    ],
    h1: 'Canada PR & Australia PR Skilled Immigration Consultants',
    answer:
      'Navigator Immigration Consultant helps skilled professionals and families apply for Canada PR, Australia PR, and selected New Zealand pathways from Dubai. We guide clients on Express Entry, PNP, subclass 189, subclass 190, subclass 491, documents, IELTS planning, and application strategy through structured consultation and profile review.',
    ctaLabel: 'Book Free PR Consultation',
    serviceName: 'Skilled Immigration Consultancy',
    serviceDescription:
      'Skilled immigration consultancy for Canada PR, Australia PR, and New Zealand options from Dubai.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Skilled Immigration', path: '/skilled' }],
    faqs: [
      {
        question: 'How can I apply for Canada PR from Dubai?',
        answer:
          'You usually start with an eligibility review, language testing, educational credential assessment, and profile creation for Express Entry or a suitable provincial nominee pathway.',
      },
      {
        question: 'What is Express Entry?',
        answer:
          'Express Entry is Canada’s online system for managing skilled immigration applications for programs such as the Federal Skilled Worker Program and Canadian Experience Class.',
      },
      {
        question: 'What is the difference between Express Entry and PNP?',
        answer:
          'Express Entry is the federal application system, while a Provincial Nominee Program is a province-led pathway that may add extra eligibility or nomination advantages for selected applicants.',
      },
      {
        question: 'Can I apply for Canada PR without a job offer?',
        answer:
          'Yes. Many candidates enter the Express Entry pool without a job offer, although a strong language score, education, and work experience remain important.',
      },
      {
        question: 'What is the difference between subclass 189, 190, and 491?',
        answer:
          'Subclass 189 is an independent skilled visa, subclass 190 is state nominated, and subclass 491 is a regional skilled pathway with its own eligibility rules.',
      },
      {
        question: 'Can my family be included in my PR application?',
        answer:
          'In many skilled immigration pathways, eligible spouses and dependent children can be included, subject to the country’s program rules and documentation requirements.',
      },
    ],
    relatedLinks: [
      { href: '/work-permits', label: 'Europe work permit visa' },
      { href: '/student-visa', label: 'student visa options' },
      { href: '/visit-visa', label: 'visit visa support' },
      { href: '/business-immigration', label: 'business immigration programs' },
      { href: '/contact', label: 'book free PR consultation' },
    ],
    trustPoints: [
      'Canada and Australia pathway consultations from Dubai',
      'Support for Express Entry, PNP, subclass 189, 190, and 491 preparation',
      'Application planning for individuals and families',
      'Clear consultation process focused on eligibility, documents, and next steps',
    ],
    localBlock:
      'Clients searching for Canada PR consultants in Dubai or Australia PR consultants in UAE can reach Navigator Immigration Consultant for profile reviews, document guidance, and consultation support.',
    table: {
      columns: ['Program', 'Best for', 'Key factor', 'Typical focus'],
      rows: [
        ['Canada Express Entry', 'Skilled professionals', 'CRS score', 'Federal PR route'],
        ['Canada PNP', 'Applicants with provincial fit', 'Province criteria', 'Targeted nomination pathway'],
        ['Australia 189', 'Independent skilled applicants', 'Points test', 'No state sponsorship'],
        ['Australia 190/491', 'Applicants with nomination options', 'State or regional nomination', 'Added nomination support'],
      ],
    },
  },
  workPermits: {
    path: '/work-permits',
    title: 'Europe Work Permit Consultants in Dubai',
    description:
      'Europe work permit guidance from Dubai for Germany, Poland, Portugal, Norway, EU Blue Card, and other employer-linked visa pathways.',
    keywords: [
      'Europe work permit consultants in Dubai',
      'Europe work visa consultants',
      'Germany work visa consultants',
      'Poland work permit visa',
      'Portugal work permit visa consultant',
      'EU Blue Card consultants',
      'work permit consultants in Dubai',
      'free work permit assessment',
    ],
    h1: 'Europe Work Permit & EU Work Visa Consultants',
    answer:
      'Navigator Immigration Consultant helps job-seeking and employer-linked applicants explore Europe work permit options from Dubai, including Germany, Poland, Portugal, Norway, and EU Blue Card routes. We review eligibility, job-offer requirements, documents, and application flow so clients understand which pathway fits their profile and destination goals.',
    ctaLabel: 'Free Work Permit Assessment',
    serviceName: 'Europe Work Permit Consultancy',
    serviceDescription:
      'Europe work permit guidance for Germany, Poland, Portugal, Norway, and EU Blue Card pathways from Dubai.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Work Permits', path: '/work-permits' }],
    faqs: [
      {
        question: 'How can I get a Europe work permit?',
        answer:
          'Most pathways require a suitable job offer, role-specific documents, proof of qualifications, and a country-specific application submitted through the correct visa or residence process.',
      },
      {
        question: 'Which European countries offer work permits?',
        answer:
          'Popular options include Germany, Poland, Portugal, Norway, and countries using EU Blue Card or national employment visa routes for skilled workers.',
      },
      {
        question: 'What is an EU Blue Card?',
        answer:
          'The EU Blue Card is a residence and work permit route used in participating European countries for qualified professionals meeting salary and role requirements.',
      },
      {
        question: 'Can I apply for a Germany work visa from Dubai?',
        answer:
          'Yes, if you meet the role and documentation requirements and follow the embassy or consular process applicable to your case.',
      },
      {
        question: 'Do I need a job offer for a Europe work permit?',
        answer:
          'Many Europe work permit routes do require a job offer, although the exact rules vary by country and visa category.',
      },
      {
        question: 'Can family members join on a Europe work permit?',
        answer:
          'Some countries allow eligible dependants to accompany or join the main applicant, but the rules depend on the specific country and permit category.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'PR pathways after overseas work' },
      { href: '/student-visa', label: 'study-to-work options' },
      { href: '/visit-visa', label: 'visit visa support for travel planning' },
      { href: '/contact', label: 'free work permit consultation' },
    ],
    trustPoints: [
      'Europe work permit guidance from a Dubai office',
      'Country-focused consultation for Germany, Poland, Portugal, Norway, and EU Blue Card routes',
      'Document planning for job-linked visa applications',
      'Clear guidance on family inclusion and compliance checkpoints',
    ],
    localBlock:
      'Navigator Immigration Consultant supports clients looking for Europe work permit consultants in Dubai, including Germany work visa, Poland work permit, Portugal work visa, and EU Blue Card guidance.',
    table: {
      columns: ['Country or route', 'Common requirement', 'Useful for', 'Typical document focus'],
      rows: [
        ['Germany Work Visa', 'Job offer or approved route', 'Skilled professionals', 'Qualifications and employment contract'],
        ['Poland Work Permit', 'Employer sponsorship', 'Operational and trade roles', 'Permit documents and employer paperwork'],
        ['Portugal Work Visa', 'Employment or approved pathway', 'Longer-term relocation', 'Work contract and supporting funds'],
        ['EU Blue Card', 'Qualified role and salary threshold', 'Higher-skilled applicants', 'Degree, salary, and job details'],
      ],
    },
  },
  studentVisa: {
    path: '/student-visa',
    title: 'Student Visa Consultants in Dubai',
    description:
      'Student visa and study-abroad guidance from Dubai for Canada, the UK, USA, Australia, New Zealand, and Europe.',
    keywords: [
      'student visa consultants in Dubai',
      'study abroad consultants Dubai',
      'Canada student visa consultants',
      'UK student visa consultants',
      'USA F1 visa consultants Dubai',
      'Australia student visa consultants Dubai',
      'study abroad consultants UAE',
      'book student visa consultation',
    ],
    h1: 'Student Visa Consultants for Study Abroad',
    answer:
      'Navigator Immigration Consultant helps students from Dubai and across the UAE plan study-abroad applications for Canada, the UK, the USA, Australia, New Zealand, and Europe. We support admission-linked document planning, SOP preparation, proof of funds, and student visa filing so applicants can move from university shortlist to visa submission with a clearer process.',
    ctaLabel: 'Check Your Student Visa Eligibility',
    serviceName: 'Student Visa Consultancy',
    serviceDescription:
      'Student visa and study-abroad guidance for Canada, UK, USA, Australia, New Zealand, and Europe from Dubai.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Student Visa', path: '/student-visa' }],
    faqs: [
      {
        question: 'Which country is best for studying abroad?',
        answer:
          'The best destination depends on your budget, academic goals, preferred course, work-rights expectations, and long-term plans such as post-study work or immigration pathways.',
      },
      {
        question: 'What documents are required for a student visa?',
        answer:
          'Common documents include a valid passport, admission letter, academic records, language test results, proof of funds, and supporting study-plan documents such as an SOP when required.',
      },
      {
        question: 'How do I apply for a Canada study permit?',
        answer:
          'Applicants generally need a letter of acceptance, financial proof, identity documents, and a complete online application aligned with the current study permit process.',
      },
      {
        question: 'How do I apply for a USA F1 visa?',
        answer:
          'The process typically involves school admission, form I-20 issuance, fee payment, DS-160 completion, and visa interview preparation.',
      },
      {
        question: 'Do I need IELTS for a student visa?',
        answer:
          'Many institutions and visa routes require language proof such as IELTS, TOEFL, or PTE, but the exact requirement depends on the country, course, and institution.',
      },
      {
        question: 'What is an SOP for a student visa?',
        answer:
          'An SOP is a statement explaining your academic background, study goals, destination choice, and future plan, often used to support admission or visa review.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'PR pathways after study abroad' },
      { href: '/visit-visa', label: 'visit visa for parents' },
      { href: '/work-permits', label: 'Europe work permit after study' },
      { href: '/contact', label: 'book student visa consultation' },
    ],
    trustPoints: [
      'Study-abroad guidance covering admission and visa planning',
      'Support for proof of funds, SOP, and document preparation',
      'Coverage for Canada, UK, USA, Australia, New Zealand, and Europe',
      'Student-focused consultation from a Dubai office',
    ],
    localBlock:
      'Students looking for study abroad consultants in Dubai or student visa consultants in UAE can reach Navigator Immigration Consultant for admission and visa guidance across major destinations.',
    table: {
      columns: ['Destination', 'Common visa route', 'Key documents', 'Post-study focus'],
      rows: [
        ['Canada', 'Study Permit', 'Offer letter, funds, academics', 'Post-graduation work pathway'],
        ['UK', 'Student Visa', 'CAS, funds, identity documents', 'Graduate route options'],
        ['USA', 'F1 Visa', 'I-20, DS-160, interview readiness', 'Academic and internship pathway'],
        ['Australia', 'Subclass 500', 'COE, funds, identity docs', 'Study and post-study work planning'],
      ],
    },
  },
  visitVisa: {
    path: '/visit-visa',
    title: 'Visit Visa Consultants in Dubai',
    description:
      'Visit visa guidance from Dubai for Schengen, tourist, family visit, and business visitor applications.',
    keywords: [
      'visit visa consultants in Dubai',
      'Schengen visa consultants in Dubai',
      'tourist visa consultants',
      'family visit visa consultants Dubai',
      'business visitor visa consultants',
      'travel visa consultants Dubai',
      'tourist visa document checklist',
      'free visit visa assessment',
    ],
    h1: 'Immigration Consultant Dubai | Visit Visa, Tourist Visa & Schengen Visa Consultants',
    answer:
      'Navigator Immigration Consultant helps travellers and families in Dubai prepare visit visa applications for Schengen countries, Canada, the UK, the USA, Australia, and other destinations. We support document checklists, cover letters, travel history presentation, proof-of-funds review, and application readiness for tourism, family visits, and selected business travel purposes.',
    ctaLabel: 'Free Visit Visa Assessment',
    serviceName: 'Visit Visa Consultancy',
    serviceDescription:
      'Visit visa, tourist visa, and Schengen visa guidance from Dubai with checklist and application support.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Visit Visa', path: '/visit-visa' }],
    faqs: [
      {
        question: 'What documents are required for a visit visa?',
        answer:
          'Requirements often include a passport, application forms, travel itinerary, proof of funds, employment or income proof, and destination-specific supporting documents.',
      },
      {
        question: 'How can I apply for a Schengen visa from Dubai?',
        answer:
          'Applicants usually select the correct Schengen destination, prepare supporting documents, complete the application, and attend biometrics or appointment steps through the applicable channel.',
      },
      {
        question: 'What is the difference between tourist visa and visitor visa?',
        answer:
          'The naming varies by country, but tourist visas usually focus on leisure travel while visitor visas may also cover family visits or certain short-term personal purposes.',
      },
      {
        question: 'What is proof of funds for a visit visa?',
        answer:
          'Proof of funds can include bank statements, salary evidence, sponsorship support, or other financial documents showing you can cover your travel and stay.',
      },
      {
        question: 'Is travel insurance required for Schengen visa?',
        answer:
          'Yes, travel medical insurance is commonly required for Schengen applications and must usually meet the coverage conditions set by the destination rules.',
      },
      {
        question: 'How do I avoid visit visa rejection?',
        answer:
          'A clear travel purpose, consistent documents, strong financial evidence, and convincing ties to your home country usually help reduce avoidable refusal risks.',
      },
    ],
    relatedLinks: [
      { href: '/student-visa', label: 'student visa guidance' },
      { href: '/business-immigration', label: 'business immigration programs' },
      { href: '/work-permits', label: 'Europe work permit options' },
      { href: '/contact', label: 'free visit visa assessment' },
    ],
    trustPoints: [
      'Support for Schengen, family visit, and tourist visa documentation',
      'Checklist guidance from a Dubai-based consultancy',
      'Application planning for leisure, family, and selected business travel',
      'Clear communication on proof of funds and supporting evidence',
    ],
    localBlock:
      'Navigator Immigration Consultant supports travellers looking for visit visa consultants in Dubai, including Schengen visa, family visit visa, and tourist visa application assistance.',
    table: {
      columns: ['Visa type', 'Typical use', 'Key support area', 'Common risk to avoid'],
      rows: [
        ['Schengen Visa', 'Europe tourism or visits', 'Insurance and itinerary', 'Weak financial proof'],
        ['Family Visit Visa', 'Visiting relatives abroad', 'Invitation and relationship proof', 'Unclear visit purpose'],
        ['Tourist Visa', 'Leisure travel', 'Travel history presentation', 'Incomplete booking support'],
        ['Business Visitor Visa', 'Meetings or events', 'Trip purpose documents', 'Mismatch between role and itinerary'],
      ],
    },
  },
  businessImmigration: {
    path: '/business-immigration',
    title: 'Business Immigration in Dubai | Navigator',
    description:
      'Compare business immigration, investor visa, citizenship, Canada Start-up Visa, US EB-5, UK Innovator Founder, and Golden Visa options.',
    keywords: [
      'business immigration consultants in Dubai',
      'investor visa consultants in Dubai',
      'citizenship by investment consultants UAE',
      'second passport consultants in Dubai',
      'Canada Start-up Visa consultant',
      'US EB-5 investor visa consultant Dubai',
      'Europe Golden Visa consultant Dubai',
      'business immigration consultation',
    ],
    h1: 'Business Immigration, Investor Visa & Second Passport Consultants',
    answer:
      'Navigator Immigration Consultant helps founders, investors, and business owners review business immigration, residency-by-investment, and selected second-passport pathways from Dubai. We support high-level eligibility planning, document preparation, and program comparison for Canada Start-up Visa, UK Innovator Founder, US EB-5, Europe Golden Visa routes, and other investor-led options where suitable.',
    ctaLabel: 'Free Business Immigration Assessment',
    serviceName: 'Business Immigration Consultancy',
    serviceDescription:
      'Business immigration, investor visa, and second-passport consultation from Dubai for founders and investors.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Business Immigration', path: '/business-immigration' }],
    faqs: [
      {
        question: 'What is business immigration?',
        answer:
          'Business immigration refers to visa and residency pathways designed for investors, entrepreneurs, founders, and senior business professionals entering a country through business activity or investment.',
      },
      {
        question: 'What is citizenship by investment?',
        answer:
          'Citizenship by investment is a program structure in selected jurisdictions where qualifying applicants may pursue citizenship after meeting legal investment and due-diligence requirements.',
      },
      {
        question: 'Which countries offer residency by investment?',
        answer:
          'Programs vary by country and change over time, so availability, investment amounts, and eligibility must always be reviewed against the latest official rules before applying.',
      },
      {
        question: 'What is the Canada Start-up Visa?',
        answer:
          'Canada Start-up Visa is a founder-focused pathway that generally requires an innovative business concept and support from a designated organization.',
      },
      {
        question: 'Can my family be included in business immigration?',
        answer:
          'Many investor and entrepreneur pathways allow eligible dependants, but family inclusion depends on the country and route selected.',
      },
      {
        question: 'What documents are required for an investor visa?',
        answer:
          'Applicants often need identity documents, business or financial records, source-of-funds evidence, and country-specific legal or due-diligence documents.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'skilled immigration options' },
      { href: '/work-permits', label: 'Europe work permits' },
      { href: '/visit-visa', label: 'visit visa assistance' },
      { href: '/contact', label: 'business immigration consultation' },
    ],
    trustPoints: [
      'Business immigration consultations from Dubai for founders and investors',
      'Guidance across investor, startup, and selected second-passport options',
      'Structured review of program fit, documentation, and compliance needs',
      'Clear caution that rules and investment thresholds can change by country',
    ],
    localBlock:
      'Navigator Immigration Consultant supports clients searching for business immigration consultants in Dubai, investor visa consultants in UAE, and second-passport advisory support.',
    complianceNote:
      'Program availability, investment amount, and eligibility may change by country and should always be verified before application.',
    table: {
      columns: ['Program', 'Country or region', 'Suitable for', 'Key requirement'],
      rows: [
        ['Canada Start-up Visa', 'Canada', 'Founders with scalable ideas', 'Designated organization support'],
        ['UK Innovator Founder', 'United Kingdom', 'Innovative founders', 'Eligible business concept'],
        ['US EB-5', 'United States', 'Investors', 'Qualifying investment and compliance'],
        ['Golden Visa routes', 'Selected Europe destinations', 'Investors and families', 'Country-specific investment rules'],
      ],
    },
  },
  about: {
    path: '/about',
    title: 'About Navigator Immigration Consultant',
    description:
      'Learn about Navigator Immigration Consultant, a Dubai consultancy for PR, student, work, visit, and business immigration services.',
    keywords: [
      'about Navigator Immigration Consultant',
      'Navigator Immigration Consultant Dubai',
      'trusted immigration consultants Dubai',
      'visa consultants with experience',
      'global immigration consultancy Dubai',
      'contact Navigator Immigration Consultant',
    ],
    h1: 'About Navigator Immigration Consultant',
    answer:
      'Navigator Immigration Consultant is a Dubai-based immigration consultancy supporting PR, student visa, work permit, visit visa, and business immigration clients. From our office at Latifa Towers on Sheikh Zayed Road, we help individuals, families, and business owners understand their options, prepare documents, and move through application processes with practical guidance.',
    ctaLabel: 'Contact Our Dubai Office',
    pageType: 'AboutPage',
    breadcrumbs: [...rootBreadcrumbs, { name: 'About', path: '/about' }],
    faqs: [
      {
        question: 'Who is Navigator Immigration Consultant?',
        answer:
          'Navigator Immigration Consultant is a Dubai-based consultancy that assists clients with immigration, visa, study-abroad, work permit, and investor migration planning.',
      },
      {
        question: 'Where is Navigator Immigration Consultant located?',
        answer:
          'The office is located at 606, Latifa Towers, Trade Center 1, Sheikh Zayed Road, Dubai, UAE.',
      },
      {
        question: 'What immigration services does Navigator Immigration Consultant provide?',
        answer:
          'The company supports Canada PR, Australia PR, skilled migration, student visas, Europe work permits, visit visas, and business immigration consultations.',
      },
      {
        question: 'Why choose Navigator Immigration Consultant?',
        answer:
          'Clients choose Navigator Immigration Consultant for Dubai-based consultation access, multi-service coverage, and structured help with eligibility, documents, and application planning.',
      },
      {
        question: 'Does Navigator Immigration Consultant provide free consultation?',
        answer:
          'Navigator Immigration Consultant offers consultation options including a free initial assessment for selected inquiries.',
      },
      {
        question: 'How can I contact Navigator Immigration Consultant?',
        answer:
          'You can contact the team by phone, WhatsApp, email, or the website contact form to request a consultation.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'Canada PR and Australia PR services' },
      { href: '/work-permits', label: 'Europe work permit assistance' },
      { href: '/student-visa', label: 'student visa services' },
      { href: '/visit-visa', label: 'visit visa support' },
      { href: '/business-immigration', label: 'business immigration services' },
      { href: '/contact', label: 'contact Navigator Immigration Consultant' },
    ],
    trustPoints: [
      'Dubai office at Latifa Towers, Sheikh Zayed Road',
      '15+ years of immigration guidance experience highlighted across the site',
      'Support for PR, study, work, visit, and business immigration pathways',
      'Multiple contact options for local and overseas clients',
    ],
    localBlock:
      'Navigator Immigration Consultant is a trusted immigration consultancy in Dubai supporting UAE and overseas clients with PR visas, student visas, work permits, visit visas, and investor migration consultations.',
  },
  blog: {
    path: '/immigration/blog',
    title: 'Immigration Blog | Navigator',
    description:
      'Practical visa guides, PR pathway explainers, student visa tips, work permit advice, and business immigration insights.',
    keywords: [
      'immigration blog',
      'visa guide',
      'PR visa guide',
      'student visa guide',
      'work permit guide',
      'Schengen visa guide',
      'business immigration guide',
    ],
    h1: 'Immigration Blog, Visa Updates & Expert Guides',
    answer:
      'Navigator Immigration Consultant publishes immigration guides, visa explainers, document checklists, and process articles for readers in Dubai and beyond. The blog focuses on Canada PR, Australia PR, study visas, Europe work permits, visit visas, and business immigration topics designed to answer practical search questions and help readers understand their next step.',
    ctaLabel: 'Read Immigration Guides',
    pageType: 'CollectionPage',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Blog', path: '/immigration/blog' }],
    faqs: [],
    relatedLinks: [
      { href: '/skilled', label: 'Canada PR and Australia PR services' },
      { href: '/student-visa', label: 'student visa guidance' },
      { href: '/work-permits', label: 'Europe work permit support' },
      { href: '/visit-visa', label: 'visit visa support' },
      { href: '/business-immigration', label: 'business immigration advice' },
    ],
    trustPoints: [
      'Service-linked immigration guides for commercial and informational intent',
      'Content mapped to PR, study, work, visit, and business immigration topics',
      'Internal links between guides and relevant consultation pages',
    ],
  },
  contact: {
    path: '/contact',
    title: 'Free Visa Consultation in Dubai',
    description:
      'Book a free Dubai visa consultation for Canada PR, Australia PR, student visas, Europe work permits, or business immigration.',
    keywords: [
      'free visa consultation Dubai',
      'book immigration appointment Dubai',
      'free PR assessment Dubai',
      'immigration consultation online',
      'visa advice Dubai free',
      'talk to immigration expert Dubai',
    ],
    h1: 'Book a Free Visa Consultation in Dubai',
    answer:
      'Contact Navigator Immigration Consultant in Dubai to book a free immigration consultation, ask about Canada PR, Australia PR, student visas, Europe work permits, visit visas, or business immigration, and speak with our team at Latifa Towers on Sheikh Zayed Road. You can reach us by phone, WhatsApp, email, or the website contact form.',
    ctaLabel: 'Book a Free Immigration Consultation',
    pageType: 'ContactPage',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Contact', path: '/contact' }],
    faqs: [
      {
        question: 'How can I contact Navigator Immigration Consultant?',
        answer:
          'You can contact Navigator Immigration Consultant by phone, WhatsApp, email, or the website contact form to request a consultation.',
      },
      {
        question: 'Where is Navigator Immigration Consultant located in Dubai?',
        answer:
          'The office is at 606, Latifa Towers, Trade Center 1, Sheikh Zayed Road, Dubai, UAE.',
      },
      {
        question: 'Can I book a free immigration consultation?',
        answer:
          'Yes. The contact page is designed for clients who want to request a free immigration consultation or initial assessment.',
      },
      {
        question: 'What documents should I bring for consultation?',
        answer:
          'It helps to bring identification, education details, work history, travel records, and any relevant visa or immigration documents for a more useful consultation.',
      },
      {
        question: 'Does Navigator Immigration Consultant provide online visa consultation?',
        answer:
          'Yes. Consultation can begin online or by phone, depending on the service and your location.',
      },
      {
        question: 'How quickly does Navigator Immigration Consultant respond?',
        answer:
          'Response times can vary, but the team encourages direct contact by phone or form submission for faster follow-up on active inquiries.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'Canada PR consultation' },
      { href: '/work-permits', label: 'Europe work permit consultation' },
      { href: '/student-visa', label: 'student visa consultation' },
      { href: '/visit-visa', label: 'visit visa consultation' },
      { href: '/business-immigration', label: 'business immigration consultation' },
    ],
    trustPoints: [
      'Dubai office at Latifa Towers, Trade Center 1, Sheikh Zayed Road',
      'Direct phone, WhatsApp, and email contact options',
      'Consultation support across PR, study, work, visit, and business immigration services',
      'Free initial assessment available for eligible inquiries',
    ],
    localBlock:
      'Clients searching for immigration consultants near Sheikh Zayed Road, visa consultants near Latifa Towers, or a Dubai immigration office can contact Navigator Immigration Consultant directly through this page.',
  },
} satisfies Record<string, SeoPageConfig>;

export const landingPages = {
  immigrationConsultantsDubai: {
    path: '/immigration-consultants-dubai',
    title: 'Best Immigration Consultants in Dubai',
    description:
      'Navigator Immigration Consultant helps with Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration in Dubai.',
    keywords: [
      'immigration consultants in Dubai',
      'best immigration consultants in Dubai',
      'visa consultants in Dubai',
      'immigration consultancy in Dubai',
      'immigration office in Dubai',
      'Dubai visa consultants',
      'top immigration consultants UAE',
      'local immigration experts Dubai',
    ],
    h1: 'Top Immigration Consultants in Dubai — Expert Visa & PR Guidance',
    answer:
      'Navigator Immigration Consultant is an immigration consultancy in Dubai helping clients with PR, student visas, work permits, visit visas, and business immigration from its office at Latifa Towers on Sheikh Zayed Road. We support eligibility review, document preparation, and application planning for clients in the UAE and overseas.',
    ctaLabel: 'Speak to a Dubai Immigration Consultant',
    serviceName: 'Immigration Consultants in Dubai',
    serviceDescription:
      'Dubai immigration consultancy for PR, study, work, visit, and business visa pathways.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Immigration Consultants in Dubai', path: '/immigration-consultants-dubai' }],
    faqs: [
      {
        question: 'What makes Navigator Immigration Consultant one of the best immigration consultants in Dubai?',
        answer:
          'Navigator Immigration Consultant combines 15+ years of experience with a Dubai office at Latifa Towers, multi-country service coverage, and structured consultation support for PR, study, work, visit, and business immigration pathways.',
      },
      {
        question: 'Which services do immigration consultants in Dubai typically provide?',
        answer:
          'Dubai immigration consultants typically help with Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration through eligibility checks, document planning, and application strategy.',
      },
      {
        question: 'How do I choose the right immigration consultant in Dubai?',
        answer:
          'Look for transparent consultants with a verifiable office location, clear service scope, and experience across the visa category you need. Navigator Immigration Consultant is based at Latifa Towers on Sheikh Zayed Road.',
      },
      {
        question: 'Can Dubai immigration consultants help with Canada PR?',
        answer:
          'Yes. Many immigration consultants in Dubai assist with Canada PR pathways including Express Entry, PNP, and business immigration routes through eligibility review and document preparation.',
      },
      {
        question: 'How much do immigration consultants in Dubai charge?',
        answer:
          'Fees vary by service scope and complexity. Navigator Immigration Consultant offers a free initial assessment to discuss your profile and the best pathway before any commitment.',
      },
      {
        question: 'Do I need to visit the office for immigration consultation?',
        answer:
          'We welcome office visits at our Dubai location, but consultations can also begin online or by phone depending on your location and preference.',
      },
    ],
    relatedLinks: [
      { href: '/canada-pr', label: 'Canada PR consultants in Dubai' },
      { href: '/australia-pr', label: 'Australia PR consultants in Dubai' },
      { href: '/student-visa-consultants-dubai', label: 'student visa consultants in Dubai' },
      { href: '/schengen-visa', label: 'Schengen visa consultants in Dubai' },
      { href: '/business-immigration-consultants-dubai', label: 'business immigration consultants in Dubai' },
      { href: '/success-stories', label: 'immigration consultant case studies and success stories' },
    ],
    trustPoints: [
      'Dubai office at Latifa Towers near Sheikh Zayed Road',
      'Support for Canada PR, Australia PR, study, work, visit, and business immigration',
      'Free assessment and consultation-focused intake process',
      'Phone, WhatsApp, and email support for local and overseas clients',
    ],
    localBlock:
      'Navigator Immigration Consultant is an immigration consultancy in Dubai serving clients near Sheikh Zayed Road, Trade Centre 1, and across the UAE with visa and PR guidance.',
    sections: [
      {
        title: 'Why clients search for immigration consultants in Dubai',
        body:
          'Most users want a local immigration consultant who can explain requirements clearly, review documents before filing, and help compare the right service pathway for their profile. With hundreds of immigration firms operating in the UAE, choosing the right consultant can significantly affect your application outcome. Navigator Immigration Consultant stands out by offering structured consultation support across a wide range of visa categories, from skilled PR pathways to study-abroad planning, Europe work permits, tourist visas, and business investor routes. Our team takes the time to understand your background, goals, and constraints before recommending a specific pathway, rather than offering generic advice that may not fit your situation.',
        bullets: [
          'PR and skilled migration consultations',
          'Student visa and study-abroad planning',
          'Europe work permit and visit visa support',
          'Business immigration and investor pathway guidance',
        ],
      },
      {
        title: 'Services available from our Dubai office',
        body:
          'Navigator Immigration Consultant supports clients with commercial and informational visa needs, from initial eligibility review through document readiness and consultation follow-up. Our service model is designed for individuals, families, students, and business owners who want a clearer understanding of the immigration process before making major life decisions. Each service pathway — whether Canada PR, Australia skilled migration, a student visa for the UK or USA, or a Europe work permit — comes with its own eligibility criteria, documentation standards, and processing timelines. Our role is to help you navigate these complexities with a structured plan that aligns with your personal and professional goals.',
        bullets: [
          'Canada PR and Australia PR guidance',
          'Student visa support for major destinations',
          'Europe work permit consultations',
          'Visit visa and Schengen document planning',
        ],
      },
      {
        title: 'Why choose Navigator Immigration Consultant as your Dubai immigration consultant',
        body:
          'Choosing the right immigration consultant in Dubai is a critical decision that affects your application timeline, document quality, and overall confidence in the process. Navigator Immigration Consultant brings practical experience across multiple immigration systems, including Canada Express Entry and PNP programs, Australia subclass 189, 190, and 491 skilled visas, UK and USA student visa routes, Europe work permit pathways, Schengen visit visas, and business immigration programs such as the Canada Start-up Visa and UK Innovator Founder routes. Our team provides transparent guidance on eligibility, required documents, processing times, and potential challenges so you can plan with realistic expectations.',
        bullets: [
          '15+ years of immigration guidance experience in Dubai',
          'Office at 606, Latifa Towers, Trade Center 1, Sheikh Zayed Road',
          'Coverage for Canada, Australia, UK, USA, Europe, and New Zealand',
          'Free initial assessment for eligible inquiries',
        ],
      },
      {
        title: 'Understanding the immigration process from Dubai',
        body:
          'The immigration process varies significantly by destination country and visa category. Canada PR applicants typically begin with an Express Entry or PNP eligibility review, followed by language testing (IELTS or equivalent), educational credential assessment (ECA), and profile creation. Australia PR applicants focus on occupation selection, skills assessment, points calculation, and state nomination options where applicable. Student visa applicants need admission letters, proof of funds, and in many cases a strong Statement of Purpose. Work permit seekers require a job offer or employer sponsorship, while visit visa applicants must demonstrate travel purpose, financial capacity, and ties to their home country. Navigator Immigration Consultant provides clear, step-by-step guidance for each of these pathways from our Dubai office.',
        bullets: [
          'Canada PR: Express Entry, PNP, CRS score planning',
          'Australia PR: Subclass 189, 190, 491 points-based system',
          'Student visas: Admission support, SOP, proof of funds',
          'Work permits: Job offer requirements, employer sponsorship',
          'Visit visas: Document checklists, travel insurance, funds proof',
        ],
      },
      {
        title: 'Statistics and success trends for Dubai immigration applicants',
        body:
          'According to Immigration, Refugees and Citizenship Canada (IRCC), over 110,000 Express Entry applications were processed in 2025 with CRS cut-off scores ranging from 470 to 540 depending on the draw type. Australia\'s Department of Home Affairs reported granting over 195,000 skilled migration places in the 2024-25 program year, with subclass 189 invitations issued at points thresholds between 65 and 95. Navigator Immigration Consultant tracks these trends to help Dubai-based applicants position their profiles competitively. For Canada PR, factors such as language proficiency (CLB 9 or higher), foreign work experience, and provincial nomination can significantly improve an applicant\'s CRS score. For Australia PR, age (25-32), superior English, and skilled employment history remain the strongest points contributors.',
        bullets: [
          'Canada Express Entry: CRS range 470-540 in recent draws',
          'Australia skilled migration: 195,000+ places in 2024-25',
          'IELTS CLB 9 can add 30+ CRS points for Canada',
          'Australia state nomination adds 5 or 15 points for 190/491',
          'Student visa approval rates: Canada ~60%, UK ~95%, Australia ~75%',
        ],
      },
    ],
  },
  canadaPr: {
    path: '/canada-pr',
    title: 'Canada PR Consultants in Dubai | Navigator',
    description:
      'Canada PR guidance in Dubai for Express Entry, PNP, profile assessment, document planning, and application preparation.',
    keywords: [
      'Canada PR consultants in Dubai',
      'Canada PR visa consultant',
      'apply for Canada PR from Dubai',
      'Canada Express Entry consultants',
      'Canada PNP consultants',
      'Canada PR eligibility check',
    ],
    h1: 'Canada PR Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant helps clients in Dubai review Canada PR options such as Express Entry and selected provincial nominee pathways. We support eligibility checks, document planning, ECA and IELTS preparation strategy, and profile guidance so applicants can understand the route that best fits their background and goals.',
    ctaLabel: 'Check Your Canada PR Eligibility',
    serviceName: 'Canada PR Consultancy',
    serviceDescription:
      'Canada PR consultancy in Dubai covering Express Entry, PNP, and eligibility planning.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Canada PR', path: '/canada-pr' }],
    faqs: [
      {
        question: 'Can I apply for Canada PR from Dubai?',
        answer:
          'Yes. Many applicants begin their Canada PR process from Dubai by completing an eligibility review, language testing, ECA planning, and profile preparation.',
      },
      {
        question: 'Do I need IELTS for Canada PR?',
        answer:
          'Language testing is commonly required, and IELTS or an accepted equivalent is usually used to prove English proficiency for eligible programs.',
      },
      {
        question: 'What is the difference between Express Entry and PNP?',
        answer:
          'Express Entry is the federal application system, while PNP routes are province-led options that may support applicants meeting local labour or nomination criteria.',
      },
      {
        question: 'Can I apply for Canada PR without a job offer?',
        answer:
          'Yes. A job offer can help in some cases, but many skilled applicants enter through routes that do not require one.',
      },
      {
        question: 'What documents are needed for Canada PR?',
        answer:
          'Applicants often need a passport, language results, education documents, work history proof, and supporting identity and financial records depending on the route.',
      },
      {
        question: 'How do consultants help with Canada PR applications?',
        answer:
          'A consultant can help review eligibility, organize supporting documents, explain program fit, and support process planning from profile stage through application readiness.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'full skilled immigration service page' },
      { href: '/contact', label: 'book a Canada PR consultation' },
      { href: '/australia-pr', label: 'Australia PR options' },
      { href: '/student-visa', label: 'study pathways that may lead to PR' },
    ],
    trustPoints: [
      'Dubai-based consultation support for Canada PR planning',
      'Guidance for Express Entry and provincial pathways',
      'Document readiness and eligibility review support',
      'Clear next-step planning for individuals and families',
    ],
    sections: [
      {
        title: 'Canada PR pathways we discuss',
        body:
          'Canada PR planning often starts with identifying whether a federal skilled or provincial pathway is the better fit for your occupation, language profile, and long-term goals.',
        bullets: ['Express Entry', 'Provincial Nominee Programs', 'Family-linked planning in eligible cases', 'Document and points strategy'],
      },
    ],
    table: {
      columns: ['Pathway', 'Best for', 'Main factor', 'Consultation focus'],
      rows: [
        ['Express Entry', 'Skilled professionals', 'CRS competitiveness', 'Language, education, experience'],
        ['PNP', 'Applicants with provincial fit', 'Nomination criteria', 'Occupation and province matching'],
      ],
    },
  },
  australiaPr: {
    path: '/australia-pr',
    title: 'Australia PR Consultants in Dubai | Navigator',
    description:
      'Australia PR guidance in Dubai for subclass 189, 190, and 491, points planning, skills assessment, and nomination options.',
    keywords: [
      'Australia PR consultants in Dubai',
      'Australia skilled migration consultant',
      'Australia PR points test',
      'apply for Australia PR from Dubai',
      'subclass 189 visa consultant',
      'subclass 190 visa consultant',
    ],
    h1: 'Australia PR Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant supports applicants in Dubai who want to understand Australia PR and skilled migration pathways such as subclass 189, 190, and 491. We review points, skills assessment planning, state nomination fit, and document readiness so clients can prepare for the route that matches their occupation and profile.',
    ctaLabel: 'Review Your Australia PR Points',
    serviceName: 'Australia PR Consultancy',
    serviceDescription:
      'Australia PR and skilled migration consultation for subclass 189, 190, and 491 applicants from Dubai.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Australia PR', path: '/australia-pr' }],
    faqs: [
      {
        question: 'How do I apply for Australia PR from Dubai?',
        answer:
          'The process usually starts with occupation review, points assessment, skills assessment planning, language testing, and checking whether an independent or nominated pathway is more suitable.',
      },
      {
        question: 'What is the difference between subclass 189, 190, and 491?',
        answer:
          'Subclass 189 is independent, subclass 190 is state nominated, and subclass 491 is a regional pathway with its own nomination and location-related requirements.',
      },
      {
        question: 'Do I need a skills assessment for Australia PR?',
        answer:
          'Many skilled migration pathways require a relevant skills assessment from the proper assessing authority for your nominated occupation.',
      },
      {
        question: 'What affects my Australia PR points?',
        answer:
          'Age, English language score, work experience, education, partner factors, and nomination can all affect your points profile.',
      },
      {
        question: 'Can my family be included in my Australia PR application?',
        answer:
          'Eligible dependants can often be included, subject to Australia’s immigration rules and required documents.',
      },
      {
        question: 'How do consultants help with Australia skilled migration?',
        answer:
          'Consultants help compare eligible pathways, review points, guide document preparation, and support planning for state nomination or independent filing.',
      },
    ],
    relatedLinks: [
      { href: '/skilled', label: 'complete skilled immigration page' },
      { href: '/contact', label: 'book an Australia PR consultation' },
      { href: '/canada-pr', label: 'Canada PR alternatives' },
      { href: '/student-visa', label: 'Australia student visa support' },
    ],
    trustPoints: [
      'Dubai consultation support for Australia PR route selection',
      'Planning for subclass 189, 190, and 491 pathways',
      'Points, skills assessment, and nomination discussions',
      'Clear process guidance without approval guarantees',
    ],
  },
  europeWorkPermit: {
    path: '/europe-work-permit',
    title: 'Europe Work Permit in Dubai | Navigator',
    description:
      'Europe work permit guidance from Dubai for employer-linked routes in Germany, Poland, Portugal, and EU Blue Card destinations.',
    keywords: [
      'Europe work permit consultants',
      'Europe work visa consultants',
      'Europe work permit from Dubai',
      'work visa for Europe from UAE',
      'Germany work visa consultants',
      'EU Blue Card consultant',
    ],
    h1: 'Europe Work Permit Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant supports clients in Dubai who want to compare Europe work permit options, understand job-offer requirements, and prepare country-specific documentation for destinations such as Germany, Poland, Portugal, and EU Blue Card pathways. We focus on route selection, document readiness, and realistic next-step planning for employment-led applications.',
    ctaLabel: 'Get a Europe Work Permit Consultation',
    serviceName: 'Europe Work Permit Landing Page',
    serviceDescription:
      'Europe work permit consultation page for Dubai-based applicants exploring employment-led routes.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Europe Work Permit', path: '/europe-work-permit' }],
    faqs: coreSeoPages.workPermits.faqs,
    relatedLinks: [
      { href: '/work-permits', label: 'Europe work permit service page' },
      { href: '/contact', label: 'book a work permit consultation' },
      { href: '/schengen-visa', label: 'Schengen travel planning support' },
      { href: '/student-visa', label: 'study and work pathways' },
    ],
    trustPoints: coreSeoPages.workPermits.trustPoints,
    table: coreSeoPages.workPermits.table,
  },
  studentVisaConsultantsDubai: {
    path: '/student-visa-consultants-dubai',
    title: 'Student Visa Consultants in Dubai | Navigator',
    description:
      'Study-abroad planning, admission documents, SOP guidance, and student visa support for applicants in Dubai.',
    keywords: [
      'student visa consultants in Dubai',
      'study abroad consultants in Dubai',
      'student visa consultants UAE',
      'overseas education consultants Dubai',
      'book student visa consultation',
      'student visa document preparation',
    ],
    h1: 'Student Visa Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant helps students in Dubai compare study-abroad destinations, review admission-linked documents, prepare SOPs, and file student visa applications for countries such as Canada, the UK, the USA, Australia, New Zealand, and selected Europe destinations. The focus is on process clarity, document quality, and realistic course-to-visa planning.',
    ctaLabel: 'Book Student Visa Consultation',
    serviceName: 'Student Visa Consultants in Dubai',
    serviceDescription:
      'Dubai student visa consultancy for study-abroad planning and application guidance.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Student Visa Consultants in Dubai', path: '/student-visa-consultants-dubai' }],
    faqs: coreSeoPages.studentVisa.faqs,
    relatedLinks: [
      { href: '/student-visa', label: 'student visa service page' },
      { href: '/contact', label: 'book a student visa consultation' },
      { href: '/skilled', label: 'future PR pathway planning' },
      { href: '/visit-visa', label: 'visit visa for parents and family' },
    ],
    trustPoints: coreSeoPages.studentVisa.trustPoints,
    table: coreSeoPages.studentVisa.table,
  },
  schengenVisa: {
    path: '/schengen-visa',
    title: 'Schengen Visa Consultants in Dubai',
    description:
      'Schengen visa guidance in Dubai with document checklists, funds review, travel insurance, and visit-purpose planning.',
    keywords: [
      'Schengen visa consultants in Dubai',
      'Schengen visa from Dubai',
      'Europe tourist visa consultant',
      'Schengen visa document checklist',
      'Schengen visa cover letter',
      'tourist visa consultants Dubai',
    ],
    h1: 'Schengen Visa Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant helps applicants in Dubai prepare Schengen visa documents, review proof of funds, organize travel insurance, and build stronger application files for tourism, family visits, or short business travel where suitable. The goal is a cleaner, better-supported application that clearly explains the trip and supporting evidence.',
    ctaLabel: 'Request a Schengen Visa Review',
    serviceName: 'Schengen Visa Consultancy',
    serviceDescription:
      'Dubai Schengen visa consultation and document preparation support.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Schengen Visa', path: '/schengen-visa' }],
    faqs: [
      {
        question: 'What documents are required for a Schengen visa?',
        answer:
          'Common documents include a passport, application form, travel insurance, itinerary, proof of funds, accommodation details, and supporting employment or sponsorship evidence.',
      },
      {
        question: 'Is travel insurance required for Schengen visa?',
        answer:
          'Yes. Travel medical insurance that meets Schengen requirements is typically required before submission.',
      },
      {
        question: 'How can I apply for a Schengen visa from Dubai?',
        answer:
          'Applicants normally prepare destination-specific documents, complete the relevant application, and attend the required appointment or biometrics process through the proper channel.',
      },
      {
        question: 'What is proof of funds for a Schengen visa?',
        answer:
          'Proof of funds often includes bank statements, salary evidence, sponsor support, or other financial documents showing you can cover the trip.',
      },
      {
        question: 'What causes Schengen visa rejection?',
        answer:
          'Common refusal factors include unclear travel purpose, weak financial evidence, inconsistent itinerary details, missing documents, or weak ties to the home country.',
      },
      {
        question: 'Can consultants help with Schengen cover letters and checklists?',
        answer:
          'Yes. A consultant can help organize the application pack, review the checklist, and improve the consistency of supporting documents and travel explanation.',
      },
    ],
    relatedLinks: [
      { href: '/visit-visa', label: 'visit visa service page' },
      { href: '/contact', label: 'book a Schengen visa consultation' },
      { href: '/student-visa', label: 'student travel and study support' },
      { href: '/work-permits', label: 'Europe work permit routes' },
    ],
    trustPoints: coreSeoPages.visitVisa.trustPoints,
    table: coreSeoPages.visitVisa.table,
  },
  businessImmigrationConsultantsDubai: {
    path: '/business-immigration-consultants-dubai',
    title: 'Business Immigration Consultants in Dubai',
    description:
      'Business immigration, residency-by-investment, investor visa, and second-passport planning for founders and investors in Dubai.',
    keywords: [
      'business immigration consultants in Dubai',
      'investor visa consultants in Dubai',
      'second passport consultants in Dubai',
      'citizenship by investment consultants UAE',
      'residency by investment consultants',
      'business visa consultants Dubai',
    ],
    h1: 'Business Immigration Consultants in Dubai',
    answer:
      'Navigator Immigration Consultant supports founders, investors, and business owners in Dubai who want to compare investor visa, residency-by-investment, and selected second-passport options. We help clients understand route suitability, family inclusion, document expectations, and program differences before they commit to a country-specific process.',
    ctaLabel: 'Book a Business Immigration Consultation',
    serviceName: 'Business Immigration Consultants in Dubai',
    serviceDescription:
      'Dubai business immigration consultation for investor, startup, and selected second-passport pathways.',
    pageType: 'Service',
    breadcrumbs: [...rootBreadcrumbs, { name: 'Business Immigration Consultants in Dubai', path: '/business-immigration-consultants-dubai' }],
    faqs: coreSeoPages.businessImmigration.faqs,
    relatedLinks: [
      { href: '/business-immigration', label: 'business immigration service page' },
      { href: '/contact', label: 'book a business immigration consultation' },
      { href: '/skilled', label: 'skilled migration alternatives' },
      { href: '/visit-visa', label: 'visit visa support for exploratory travel' },
    ],
    trustPoints: coreSeoPages.businessImmigration.trustPoints,
    complianceNote: coreSeoPages.businessImmigration.complianceNote,
    table: coreSeoPages.businessImmigration.table,
  },
} satisfies Record<string, SeoPageConfig>;

export function absoluteUrl(path: string) {
  if (path === '/') {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path}`;
}

export function buildPageMetadata(
  page: SeoPageConfig,
  languages?: Record<string, string>,
  blogOverrides?: {
    publishedTime?: string;
    modifiedTime?: string;
    ogImage?: string;
    canonical?: string;
    index?: boolean;
    follow?: boolean;
  }
): Metadata {
  const keywordSet = new Set([
    ...page.keywords,
    siteName,
    brandKeyword,
    'navigator global immigration',
  ]);

  const ogImageUrl = blogOverrides?.ogImage ?? defaultOgImage;

  const metadata: Metadata = {
    title: page.title,
    description: page.description,
    keywords: [...keywordSet],
    alternates: {
      canonical: blogOverrides?.canonical ?? absoluteUrl(page.path),
      languages: languages ?? {
        'en': blogOverrides?.canonical ?? absoluteUrl(page.path),
        'x-default': blogOverrides?.canonical ?? absoluteUrl(page.path),
      },
    },
    robots: {
      index: blogOverrides?.index ?? true,
      follow: blogOverrides?.follow ?? true,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: blogOverrides?.canonical ?? absoluteUrl(page.path),
      siteName,
      type: page.path.startsWith('/blog/') || page.path.startsWith('/immigration/blog/') ? 'article' : 'website',
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImageUrl],
    },
  };

  if ((page.path.startsWith('/blog/') || page.path.startsWith('/immigration/blog/')) && blogOverrides) {
    (metadata as any).other = {
      ...((metadata as any).other || {}),
      'article:published_time': blogOverrides.publishedTime ?? new Date().toISOString(),
      'article:modified_time': blogOverrides.modifiedTime ?? new Date().toISOString(),
    };
  }

  return metadata;
}

type BlogMetadataInput = {
  title: string;
  excerpt: string;
  answer: string;
  date: string;
  tags: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    secondaryKeywords?: string[];
  };
  seoControl?: {
    canonical?: string;
    index?: boolean;
    follow?: boolean;
  };
};

export function buildBlogMetadata(post: BlogMetadataInput, path: string): Metadata {
  const title = post.seo?.metaTitle?.trim() || post.title;
  const description = post.seo?.metaDescription?.trim() || post.excerpt;
  const keywords = [
    ...post.tags,
    ...(post.seo?.focusKeyword ? [post.seo.focusKeyword] : []),
    ...(post.seo?.secondaryKeywords ?? []),
  ];

  return buildPageMetadata(
    {
      path,
      title,
      description,
      keywords,
      h1: post.title,
      answer: post.answer,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Immigration', path: '/immigration' },
        { name: 'Blog', path: '/immigration/blog' },
        { name: post.title, path },
      ],
      faqs: [],
      relatedLinks: [],
      trustPoints: [],
      pageType: 'Article',
    },
    undefined,
    {
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      canonical: post.seoControl?.canonical?.trim() || undefined,
      index: post.seoControl?.index ?? true,
      follow: post.seoControl?.follow ?? true,
    },
  );
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    alternateName: businessInfo.alternateNames,
    url: `${siteUrl}/`,
    email: businessInfo.email,
    telephone: businessInfo.primaryPhone,
    logo: absoluteUrl(brandLogo),
    sameAs: businessInfo.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessInfo.primaryPhone,
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
    },
  };
}

export function buildLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: siteName,
    url: `${siteUrl}/`,
    image: absoluteUrl(brandLogo),
    telephone: businessInfo.primaryPhone,
    email: businessInfo.email,
    priceRange: '$$',
    openingHours: businessInfo.openingHours,
    address: {
      '@type': 'PostalAddress',
      ...businessInfo.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2218045,
      longitude: 55.2810727,
    },
    areaServed: businessInfo.areaServed,
    sameAs: businessInfo.sameAs,
  };

  return schema;
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: `${siteUrl}/`,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'en',
  };
}

export function buildWebPageSchema(page: SeoPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(page.path)}#webpage`,
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: page.serviceName
      ? {
          '@type': 'Thing',
          name: page.serviceName,
        }
      : undefined,
  };
}

export function buildServiceSchema(page: SeoPageConfig) {
  if (!page.serviceName || !page.serviceDescription) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(page.path)}#service`,
    serviceType: page.serviceName,
    name: page.serviceName,
    description: page.serviceDescription,
    provider: {
      '@id': `${siteUrl}/#localbusiness`,
    },
    areaServed: businessInfo.areaServed,
    availableChannel: [{
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(page.path),
    }],
  };
}

export function buildFaqSchema(faqs: SeoFaq[]) {
  if (!faqs.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(breadcrumbs: SeoBreadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: absoluteUrl(breadcrumb.path),
    })),
  };
}

export function buildVideoObjectSchema(videoUrl: string, name: string, description: string, thumbnailUrl: string, uploadDate?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    contentUrl: videoUrl.startsWith('/') ? absoluteUrl(videoUrl) : videoUrl,
    embedUrl: videoUrl.startsWith('/') ? absoluteUrl(videoUrl) : videoUrl,
    ...(uploadDate ? { uploadDate } : {}),
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}

export type HowToStep = {
  position: number;
  name: string;
  text: string;
  url?: string;
};

export function buildHowToSchema(steps: HowToStep[], serviceName: string, totalTime?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Apply for ${serviceName}`,
    description: `Step-by-step guide to applying for ${serviceName} with Navigator Immigration Consultant.`,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.position,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };
}

export function buildAuthorPersonSchema(name: string, description: string, image?: string, url?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    description,
    ...(image ? { image } : {}),
    ...(url ? { url } : {}),
    worksFor: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}

export function buildSpeakableSchema(cssSelector: string, pageUrl?: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl ? `${pageUrl}#speakable` : undefined,
    ...(pageUrl ? { url: pageUrl } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [cssSelector],
    },
  };
  return schema;
}

export type TestimonialData = {
  name: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
};

export function buildAggregateRatingSchema(
  testimonials: TestimonialData[],
  itemName: string,
  itemDescription: string
) {
  if (!testimonials.length) return null;

  const totalRating = testimonials.reduce((sum, t) => sum + t.ratingValue, 0);
  const averageRating = totalRating / testimonials.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: itemName,
    description: itemDescription,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewBody: t.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.ratingValue,
        bestRating: '5',
      },
      ...(t.datePublished ? { datePublished: t.datePublished } : {}),
    })),
  };
}

export type DefinedTermItem = {
  name: string;
  description: string;
  url?: string;
};

export function buildDefinedTermSchema(terms: DefinedTermItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Immigration Glossary | Immigration Terms & Definitions',
    description: 'Common immigration terms explained by Navigator Immigration Consultant.',
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.name,
      description: term.description,
      ...(term.url ? { url: term.url } : {}),
    })),
  };
}

export function buildClaimSchema(claimText: string, claimant: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Claim',
    claimInterpreter: {
      '@type': 'Organization',
      name: siteName,
    },
    description: claimText,
    url: `${siteUrl}/`,
    datePublished,
  };
}

export function buildWebPageSchemaWithReview(page: SeoPageConfig, lastReviewed?: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(page.path)}#webpage`,
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: page.serviceName
      ? {
          '@type': 'Thing',
          name: page.serviceName,
        }
      : undefined,
  };

  if (lastReviewed) {
    schema.lastReviewed = lastReviewed;
    schema.reviewedBy = {
      '@type': 'Organization',
      name: siteName,
    };
  }

  return schema;
}
